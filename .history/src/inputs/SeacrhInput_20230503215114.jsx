import styled from 'styled-components'

const StyledSearchInput = styled.input`
  border: 1px solid purple;
  border-radius: 4px;
  :focus {
    background-color: blueviolet;
  }
`

const SearchInput = () => {
  return (
    <>
      <StyledSearchInput type="text" />
    </>
  )
}
export default SearchInput
