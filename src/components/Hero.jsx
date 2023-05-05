import styled from 'styled-components'
import './CSS/Hero.css'
import { Link } from 'react-router-dom'
import heroBck1 from '../assets/hero-bcg.jpeg'
import heroBck2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="section-center">
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
    </div>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`
export default Hero
