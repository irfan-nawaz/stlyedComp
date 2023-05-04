import styled from 'styled-components'

import NavBar from '../../nav/NavBar'
import SideNav from '../../sidenav/SideNav'
import FlexCards from '../../wrappers/FlexCards'

const StyledProductPage = styled.div``

const StyledNavBar = styled.div``

const StyledSideNav = styled.SideNav``

const StyledFlexCards = styled.div``

const Product = () => {
  return (
    <StyledProductPage>
      <StyledNavBar>
        <NavBar />
      </StyledNavBar>
      <div>
        <StyledSideNav>
          <SideNav />
        </StyledSideNav>
        <div>
          <FlexCards />
        </div>
      </div>
    </StyledProductPage>
  )
}

export default Product
