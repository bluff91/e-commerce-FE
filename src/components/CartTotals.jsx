import './CSS/CartTotals.css'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import { useUserContext } from '../context/user_context'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext()

  return (
    <div className="cart-totals">
      <div className="cart-totals-container">
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn">
            Proceed to checkout
          </Link>
        ) : (
          <button className="btn" onClick={loginWithRedirect}>
            Login
          </button>
        )}
      </div>
    </div>
  )
}
export default CartTotals
