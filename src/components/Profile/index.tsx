import { BsBoxArrowInUpRight } from "react-icons/bs";
import { FaGithub, FaBuilding, FaUserFriends } from "react-icons/fa";
import { useTheme } from "styled-components";

import {
  ProfileBio,
  ProfileContainer,
  ProfileFooter,
  ProfileTitle,
  Wrapper,
} from "./styles";

type ProfileProps = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
};

export function Profile({
  login,
  name,
  avatar_url,
  bio,
  followers,
}: ProfileProps) {
  const theme = useTheme();

  return (
    <ProfileContainer>
      <img src={avatar_url} alt="" />

      <Wrapper>
        <ProfileTitle>
          <h3>{name}</h3>

          <a href="https://github.com/agleymelo" target="_blank">
            GITHUB
            <BsBoxArrowInUpRight size={12} />
          </a>
        </ProfileTitle>

        <ProfileBio>{bio}</ProfileBio>

        <ProfileFooter>
          <span>
            <FaGithub size={18} color={theme["base-label"]} />
            {login}
          </span>
          <span>
            <FaBuilding size={18} color={theme["base-label"]} />
            AGLEY
          </span>
          <span>
            <FaUserFriends size={18} color={theme["base-label"]} />
            {followers} seguidores
          </span>
        </ProfileFooter>
      </Wrapper>
    </ProfileContainer>
  );
}
