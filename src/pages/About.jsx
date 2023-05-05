import './CSS/About.css'
import { PageHero } from '../components'
import aboutImage from '../assets/hero-bcg.jpeg'

const About = () => {
  return (
    <main>
      <PageHero title="about" />
      <div className="about-page page section section-center">
        <img src={aboutImage} alt="about" />
        <article>
          <div className="about-title">
            <h2>About us</h2>
            <div className="about-underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            blanditiis accusamus, quod aperiam temporibus error qui amet ad,
            provident perferendis officiis aliquam officia similique odit est
            alias molestias quibusdam! Repellendus! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolore, soluta? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Vitae voluptatibus nesciunt
            libero perferendis! Ducimus, placeat cumque dolorum distinctio iure.
          </p>
        </article>
      </div>
    </main>
  )
}

export default About
