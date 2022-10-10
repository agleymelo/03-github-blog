import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Profile } from "../../components/Profile";
import { IssuesContext } from "../../contexts/IssuesContext";
import { CardList } from "./components/CardList";
import { SearchForm } from "./components/SearchForm";

import { HomeContainer, WrapperCardList } from "./styles";

export function Home() {
  const { user, posts } = useContext(IssuesContext);

  const searchIssuesForm = useForm();

  return (
    <HomeContainer>
      <Profile
        name={user.name}
        login={user.login}
        avatar_url={user.avatar_url}
        bio={user.bio}
        followers={user.followers}
      />

      <FormProvider {...searchIssuesForm}>
        <SearchForm />
      </FormProvider>

      <WrapperCardList>
        {posts.map((post) => (
          <CardList
            key={post.id}
            title={post.title}
            body={post.body}
            created_at={post.created_at}
          />
        ))}
      </WrapperCardList>
    </HomeContainer>
  );
}
