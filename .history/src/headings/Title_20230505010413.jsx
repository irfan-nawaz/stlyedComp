import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const H1 = styled.h1`
  margin: 3rem;
  color: #474a56;
  font-size: var(--font-xl);
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  text-decoration-line: overline;
  text-decoration-color: #474a56;
  text-decoration-style: double;
  text-underline-offset: 5px;
  text-emphasis: filled double-circle #ffb703;
  text-emphasis-position: under;
  @media (min-width: 550px) {
    font-size: var(--font-xxl);
    margin: 4rem;
  }

  @media (min-width: 900px) {
    font-size: var(--font-xxl);
    margin: 6rem;
  }
`

const Title = ({ heading }) => {
  return (
    <Div>
      <H1>{heading}</H1>
    </Div>
  )
}

export default Title
