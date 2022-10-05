import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { useTheme } from 'styled-components'

import {
  ProfileBio,
  ProfileContainer,
  ProfileFooter,
  ProfileTitle,
  Wrapper,
} from './styles'

export function Profile() {
  const theme = useTheme()

  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/49816916?v=4" alt="" />

      <Wrapper>
        <ProfileTitle>
          <h3>Agleylson Melo</h3>

          <a href="">
            GITHUB
            <BsBoxArrowInUpRight size={12} />
          </a>
        </ProfileTitle>

        <ProfileBio>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          laboriosam minima cum quasi! Repellendus, est eos omnis rem nisi atque
          inventore, ipsa necessitatibus architecto eum tempore quidem vitae
          quod accusamus!
        </ProfileBio>

        <ProfileFooter>
          <span>
            <FaGithub size={18} color={theme['base-label']} />
            agleymelo
          </span>
          <span>
            <FaBuilding size={18} color={theme['base-label']} />
            AGLEY
          </span>
          <span>
            <FaUserFriends size={18} color={theme['base-label']} />
            32 seguidores
          </span>
        </ProfileFooter>
      </Wrapper>
    </ProfileContainer>
  )
}
