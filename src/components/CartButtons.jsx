import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import './CSS/CartButtons.css'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items } = useCartContext()

  return (
    <div className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        Login <FaUserPlus />
      </button>
    </div>
  )
}

export default CartButtons
