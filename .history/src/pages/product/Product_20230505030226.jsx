import styled from 'styled-components'

import NavBar from '../../nav/NavBar'
import SideNav from '../../sidenav/SideNav'
import FlexCards from '../../wrappers/FlexCards'
import Footer from '../../Footer/Footer'

const StyledProductPage = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`

const StyledNavBar = styled.div``

const StyledSideAndCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  /* gap: 2%; */
`

const StyledSideNav = styled.div`
  background: green;
  flex-basis: 14%;
`

const StyledFlexCards = styled.div`
  flex-basis: 90%;
  /* flex-grow: 1; */
`

const StyledFooter = styled.div``

const Product = () => {
  return (
    <StyledProductPage>
      <StyledNavBar>
        <NavBar />
      </StyledNavBar>
      <StyledSideAndCard>
        <StyledSideNav>
          <SideNav />
        </StyledSideNav>
        <StyledFlexCards>
          <FlexCards />
        </StyledFlexCards>
      </StyledSideAndCard>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </StyledProductPage>
  )
}

export default Product
