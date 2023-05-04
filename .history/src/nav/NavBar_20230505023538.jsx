import styled from 'styled-components'
import SearchInput from '../inputs/SeacrhInput'
import artist from '../assets/markup.svg'
import { BsMoon, BsCart3, BsBagHeart } from 'react-icons/bs'
import { GrLogin } from 'react-icons/gr'
import Select from '../forms/Select'

const NavWrapper = styled.header`
  background-color: ${(props) => props.theme.footer};
`

const Nav = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1%;
  @media (min-width: 550px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
  > div {
    margin-top: 1rem;
  }
  > div > h1 {
    min-height: 70px;
  }
  > div > ul {
    text-align: center;
    min-width: 20vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1%;
    list-style-type: none;
  }
  div > ul > li {
    flex-basis: 24%;
  }
`

const NavBar = () => {
  return (
    <NavWrapper>
      <Nav>
        <div>
          <h1
            style={{
              backgroundImage: `url(${artist})`,
            }}
          >
            Logo
          </h1>
        </div>
        <div>
          <Select />
        </div>
        <div>
          <SearchInput />
        </div>
        <div>
          <ul>
            <li>
              <BsCart3 />
            </li>
            <li>
              <BsBagHeart />
            </li>
            <li>
              <GrLogin />
            </li>
            <li>
              <BsMoon />
            </li>
          </ul>
        </div>
      </Nav>
    </NavWrapper>
  )
}

export default NavBar
