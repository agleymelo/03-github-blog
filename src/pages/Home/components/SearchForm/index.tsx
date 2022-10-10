import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useDebouncedValue } from '../../../../hooks/useDebounce'
import { ContainerSearchForm, InputSearch } from './styles'

export function SearchForm() {
  const [search, setSearch] = useState('')

  const { posts, searchIssues } = useContext(IssuesContext)

  const { register } = useFormContext()

  const debounce = useDebouncedValue(search)

  async function handleSearchIssues(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  const countAllPosts = posts.length

  useEffect(() => {
    searchIssues(debounce)
  }, [debounce])

  return (
    <ContainerSearchForm>
      <div>
        <strong>Publications</strong>

        <span>{countAllPosts} Publications</span>
      </div>

      <InputSearch
        {...register('query')}
        type="text"
        placeholder="Search for content"
        onChange={handleSearchIssues}
      />
    </ContainerSearchForm>
  )
}
