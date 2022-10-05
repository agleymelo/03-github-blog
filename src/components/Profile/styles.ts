import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 13.25rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > img {
    width: 10rem;
    height: 10rem;

    border-radius: 8px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
  }

  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    font-size: 0.75rem;
    font-weight: bold;

    gap: 8px;

    color: ${(props) => props.theme.blue};
  }
`

export const ProfileBio = styled.p`
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
`

export const ProfileFooter = styled.footer`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.6;
  }
`
