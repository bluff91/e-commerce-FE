import './CSS/Product.css'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { formatPrice } from '../utils/helpers'

const Product = ({ id, name, price, image }) => {
  return (
    <div className="product-container">
      <div className="img-wrapper">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <div className="product-footer">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  )
}

export default Product
