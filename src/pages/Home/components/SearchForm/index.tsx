import { ContainerSearchForm, InputSearch } from './styles'

export function SearchForm() {
  return (
    <ContainerSearchForm>
      <div>
        <h3>Publications</h3>

        <span>7 Publications</span>
      </div>

      <InputSearch type="text" placeholder="Search for content" />
    </ContainerSearchForm>
  )
}
