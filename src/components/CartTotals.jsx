import './CSS/CartTotals.css'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()

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
        <Link to="/checkout" className="btn">
          Proceed to checkout
        </Link>
      </div>
    </div>
  )
}
export default CartTotals
