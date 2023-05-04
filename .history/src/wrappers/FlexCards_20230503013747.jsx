import GenericCard from '../cards/GenericCard'
import './FlexCards.css'

import styled from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'

const Wrapper = styled.div`
  @media (min-width: 550px) {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-content: space-evenly;
      align-items: center;
      gap: 1%;
    }
  }
`

const FlexCards = () => {
  return (
    <div className="row">
      <GenericCard />
      <GenericCard />
      <GenericCard />
      <GenericCard />
    </div>
  )
}

export default FlexCards
