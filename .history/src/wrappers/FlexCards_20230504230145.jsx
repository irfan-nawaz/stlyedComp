import GenericCard from '../cards/GenericCard'

import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.footer};
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  > h2 {
    color: #474a56;
    font-size: var(--font-xxl);
    padding: 0;
    margin: -10px 0;
  }
`

const Cards = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1%;
  }
`

const FlexCards = () => {
  return (
    <Wrapper>
      <h2>Featured</h2>
      <Cards>
        <GenericCard />
        <GenericCard />
        <GenericCard />
        <GenericCard />
      </Cards>
    </Wrapper>
  )
}

export default FlexCards
