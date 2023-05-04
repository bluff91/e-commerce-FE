import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import './CSS/CartButtons.css'
import { Link } from 'react-router-dom'

const CartButtons = () => {
  return (
    <div className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">32</span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        Login <FaUserPlus />
      </button>
    </div>
  )
}

export default CartButtons
