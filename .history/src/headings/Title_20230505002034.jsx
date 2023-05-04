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
    right: 0;
    bottom: 0;
    height: 3px;
    width: 75px;
    margin-bottom: 0.25em;
  }
`

const Div = styled.div

const Title = ({ heading }) => {
  return (
    <div>
      <H1>{heading}</H1>
    </div>
  )
}

export default Title
