import { useCartContext } from '../context/cart_context'
import './CSS/CartContent.css'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import { Link } from 'react-router-dom'

const CartContent = () => {
  const { cartProducts, clearCart } = useCartContext()
  return (
    <div className="cart-content">
      <div className="section section-center">
        <CartColumns />
        {cartProducts.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        <hr />
        <div className="link-container">
          <Link to="/products" className="link-btn">
            continue shopping
          </Link>
          <button className="link-btn clear-btn" onClick={clearCart}>
            Clear Shopping Cart
          </button>
        </div>
        <CartTotals />
      </div>
    </div>
  )
}
export default CartContent
