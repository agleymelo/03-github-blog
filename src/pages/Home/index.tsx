import { Profile } from '../../components/Profile'
import { CardList } from './components/CardList'
import { SearchForm } from './components/SearchForm'

import { HomeContainer, WrapperCardList } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <SearchForm />

      <WrapperCardList>
        <CardList />

        <CardList />
      </WrapperCardList>
    </HomeContainer>
  )
}
