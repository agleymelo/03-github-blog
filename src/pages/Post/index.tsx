import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { formatDistanceToNow } from "date-fns";
import { FaCalendarDay, FaGithub, FaComment } from "react-icons/fa";
import { useTheme } from "styled-components";

import { api } from "../../services/axios";

import {
  PostCardFooter,
  PostCardHeader,
  PostContainer,
  PostCardHeaderContent,
  PostCardButtonBack,
} from "./styles";

type Post = {
  number: number;
  title: string;
  created_at: string;
  comments: number;
  body: string;
  html_url: string;
  user: {
    login: string;
  };
};

export function Post() {
  const theme = useTheme();

  const { id } = useParams();

  const [post, setPost] = useState<Post>();

  async function fetchPost() {
    const response = await api.get(
      `/repos/agleymelo/03-github-blog/issues/${id}`
    );

    setPost(response.data);
  }

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (!post) return null;

  return (
    <PostContainer>
      <PostCardHeader>
        <PostCardHeaderContent>
          <PostCardButtonBack to="/">Back</PostCardButtonBack>

          <a href={post.html_url} target="_blank">
            View in Github
            <BsBoxArrowInUpRight size={12} />
          </a>
        </PostCardHeaderContent>

        <h1>{post.title}</h1>

        <PostCardFooter>
          <span>
            <FaGithub size={18} color={theme["base-label"]} />
            {post.user?.login}
          </span>
          <span>
            <FaCalendarDay size={18} color={theme["base-label"]} />

            {formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
            })}
          </span>
          <span>
            <FaComment size={18} color={theme["base-label"]} />
            {post.comments} {post.comments === 1 ? "comment" : "comments"}
          </span>
        </PostCardFooter>
      </PostCardHeader>
    </PostContainer>
  );
}
