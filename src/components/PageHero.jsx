import './CSS/PageHero.css'
import { Link } from 'react-router-dom'

const PageHero = ({ title, product }) => {
  return (
    <div className="page-hero">
      <div className="section-center">
        <h3>
          <Link to="/">Home /</Link>
          <span>
            {product && <Link to="/products">Products </Link>} / {title}
          </span>
        </h3>
      </div>
    </div>
  )
}

export default PageHero
