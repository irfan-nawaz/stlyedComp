import styled from 'styled-components'

const StyledSearchInput = styled.input`
  border: none;
  border-radius: 4px;
  outline: none;
  background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
  :focus {
    /* background-color: blueviolet; */
    background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
    border-bottom: 1px solid green;
    outline: none;
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