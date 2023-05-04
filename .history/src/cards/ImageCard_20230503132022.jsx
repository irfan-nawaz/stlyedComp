import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`
const Card = styled.figure`
  margin: 0;
  padding: 0;
  > figcaption {
    
  }
`

const ImageCard = () => {
  return (
    <div>
      <figure>
        <img src="" alt="" />
        <figcaption></figcaption>
      </figure>
    </div>
  )
}
