import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import './CSS/CartButtons.css'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()

  return (
    <div className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
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
