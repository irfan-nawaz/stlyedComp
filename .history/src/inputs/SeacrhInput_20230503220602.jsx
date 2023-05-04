import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const StyledSearchInput = styled.div`
  display: inline;
  position: relative;
  > input {
    position: absolute;
    top: 0;
    left: 100%;
    border: none;
    border-radius: 4px;
    outline: none;
    background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
    :focus {
      /* background-color: blueviolet; */
      background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
      border-bottom: 2px solid ${(props) => props.theme.primaryColor};
      outline: none;
    }
  }
`

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <input type="text" />
      <FiSearch />
    </StyledSearchInput>
  )
}
export default SearchInput
