import './HeroImg.css'
import { Button } from '../buttons/Primary'
const HeroImg = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Stylish Art Online</h1>
        <Button varient="outline">Shop Now</Button>
      </div>
    </div>
  )
}

export default HeroImg
