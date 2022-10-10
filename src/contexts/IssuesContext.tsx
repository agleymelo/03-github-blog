import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/axios'

type UserType = {
  login: string
  name: string
  avatar_url: string
  bio: string
  followers: number
}

type PostType = {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

type IssuesContextType = {
  user: UserType
  posts: PostType[]
  searchIssues: (query: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

type IssuesProviderProps = {
  children: ReactNode
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [user, setUser] = useState<UserType>({} as UserType)
  const [posts, setPosts] = useState<PostType[]>([])

  async function searchIssues(query: string) {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} is:issue repo:agleymelo/03-github-blog`,
      },
    })

    setPosts(response.data.items)
  }

  useEffect(() => {
    api.get('/users/agleymelo').then((response) => setUser(response.data))

    searchIssues('')
  }, [])

  return (
    <IssuesContext.Provider value={{ user, posts, searchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
