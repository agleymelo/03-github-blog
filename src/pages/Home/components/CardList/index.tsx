import { formatDistance } from 'date-fns'

import { CardListContainer, CardListHeader } from './styles'

type CardListProps = {
  number: number
  title: string
  created_at: string
  body: string
}

export function CardList({ number, title, created_at, body }: CardListProps) {
  const shortTitle =
    title.length > 38 ? title.substring(0, 38).concat('...') : title

  const removeSpecialCharacters = /\((.*?)\)|([\u0300-\u036f]|[^0-9-zA-z])/g

  const markdownAsText = body?.replace(removeSpecialCharacters, ' ')

  const shortBody = markdownAsText?.substring(0, 180).concat('...')

  return (
    <CardListContainer to={`/post/${number}`}>
      <CardListHeader>
        <h2>{shortTitle}</h2>
        <time>
          {formatDistance(Date.parse(created_at), new Date(), {
            addSuffix: true,
          })}
        </time>
      </CardListHeader>

      <span>{shortBody}</span>
    </CardListContainer>
  )
}
