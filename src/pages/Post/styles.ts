import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 110rem;

  margin: 0 auto;

  padding: 2rem 4rem;

  margin-top: -7rem;
`;

export const PostCardHeader = styled.div`
  width: 54rem;
  height: 13.25rem;

  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 1.5rem;
`;

export const PostCardButtonBack = styled(Link)`
  color: ${(props) => props.theme.blue};

  font-weight: bold;
  text-decoration: none;
`;

export const PostCardHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a:last-child {
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;

    font-size: 0.85rem;
    font-weight: bold;

    color: ${(props) => props.theme.blue};
    line-height: 0;

    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const PostCardFooter = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
  }
`;

export const ContainerMarkDown = styled.div`
  margin-top: 2rem;

  & > p {
    font-weight: 700;
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Markdown = styled(ReactMarkdown)`
  margin-top: 20px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;

  color: ${(props) => props.theme["base-text"]};
  code {
    span {
      font-family: "Fira Code";
    }
  }
`;
