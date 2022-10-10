import { Link } from "react-router-dom";

import styled from "styled-components";

export const CardListContainer = styled(Link)`
  width: 26rem;
  height: 16.25rem;

  padding: 1rem;

  background: ${(props) => props.theme["base-post"]};
  border-radius: 6px;

  text-decoration: none;

  > span {
    margin-top: 1.25rem;

    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};

    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
  }

  border: 2px solid transparent;
`;

export const CardListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  > h2 {
    flex: 1;

    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
  }

  > time {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;
