import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  margin: auto;
  white-space: nowrap;
  padding-bottom: 13px;
  :before {
    background-color: #c50000;
    content: '';
    display: block;
    height: 3px;
    width: 75px;
    margin-bottom: 5px;
  }
  :after {
    background-color: #c50000;
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    height: 3px;
    width: 75px;
    margin-bottom: 0.25em;
  }
`

const Div = styled.div`
  position: relative;
  
  /* background: #f8f8f8;
  width: 90%;
  max-width: 500px;
  padding: 2em;
  margin: 1.5em auto;
  border: 3px solid rgba(0, 0, 0, 0.08); */
`

const Title = ({ heading }) => {
  return (
    <Div>
      <H1>{heading}</H1>
    </Div>
  )
}

export default Title
