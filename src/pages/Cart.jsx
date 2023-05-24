import { CartContent, PageHero } from '../components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import './CSS/Cart.css'

const Cart = () => {
  const { removeItem, toggleAmount, clearCart, cartProducts } = useCartContext()

  if (cartProducts.length < 1) {
    return (
      <div className="cart-page page-100">
        <div className="empty">
          <h2>Your Cart is Empty</h2>
          <Link to="/products" className="btn">
            Fill It
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageHero title="cart" />
      <div className="page">
        <CartContent />
      </div>
    </div>
  )
}
export default Cart
