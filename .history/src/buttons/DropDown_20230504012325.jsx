import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  display: inline-block;
  :hover {
    display: block;
  }
`
const DropButton = styled.button`
  background-color: #04aa6d;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
`
const DropContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  :hover {
    display: block;
  }
`

const DropLists = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  :hover {
    background-color: #ddd;
  }
`

const DropDown = () => {
  return (
    <Wrapper className="dropdown">
      <DropButton className="dropbtn">Dropdown</DropButton>
      <DropContent>
        <DropLists href="#">Link 1</DropLists>
        <DropLists href="#">Link 2</DropLists>
        <DropLists href="#">Link 3</DropLists>
      </DropContent>
    </Wrapper>
  )
}

export default DropDown
