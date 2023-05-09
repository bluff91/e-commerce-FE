import './CSS/Hero.css'
import { Link } from 'react-router-dom'
import heroBck1 from '../assets/hero-bcg.jpeg'
import heroBck2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <div className="section-center hero-section">
      <article>
        <h1>Design your Comfort zone</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          autem quasi natus facilis culpa illum deserunt! Laboriosam assumenda
          quod nemo!
        </p>
        <Link className="btn">Shop now</Link>
      </article>
      <div className="img-container">
        <img className="hero-image-1" src={heroBck1} alt="picture" />
        <img className="hero-image-2" src={heroBck2} alt="picture" />
      </div>
    </div>
  )
}

export default Hero
