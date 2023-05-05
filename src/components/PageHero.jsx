import './CSS/PageHero.css'
import { Link } from 'react-router-dom'

const PageHero = ({ title }) => {
  return (
    <div className="page-hero">
      <div className="section-center">
        <h3>
          <Link href="/">Home</Link>
          <span> / {title}</span>
        </h3>
      </div>
    </div>
  )
}

export default PageHero
