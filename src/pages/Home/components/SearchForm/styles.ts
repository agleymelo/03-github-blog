import styled from "styled-components";

export const ContainerSearchForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 54rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 4.5rem;

    strong {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;

      color: ${(props) => props.theme["base-span"]};
    }
  }
`;

export const InputSearch = styled.input`
  margin-top: 0.75rem;

  width: 100%;
  height: 3.125rem;

  padding: 0.75rem 1rem;

  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  border-radius: 6px;

  border: 1px solid ${(props) => props.theme["base-border"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
    font-weight: regular;
  }
`;
