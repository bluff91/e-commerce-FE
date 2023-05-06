import './CSS/Product.css'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
const Product = ({ id, name, price, image }) => {
  return (
    <div className="product-container">
      <img src={image} alt={name} />
      <Link to={`/products/${id}`} className="link">
        <FaSearch />
      </Link>
      <div className="product-footer">
        <h5>{name}</h5>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Product
