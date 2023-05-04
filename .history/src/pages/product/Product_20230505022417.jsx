import styled from 'styled-components'

import NavBar from '../../nav/NavBar'
import SideNav from '../../sidenav/SideNav'
import FlexCards from '../../wrappers/FlexCards'

const ProductPage = styled.div``

const NavBar = styled.div``

const Product = () => {
  return (
    <ProductPage>
      <NavBar>
        <NavBar />
      </NavBar>
      <div>
        <div>
          <SideNav />
        </div>
        <div>
          <FlexCards />
        </div>
      </div>
    </ProductPage>
  )
}

export default Product
