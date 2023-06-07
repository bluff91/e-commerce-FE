import { PageHero, StripeCheckout } from '../components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const { cartProducts } = useCartContext()

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
    <main>
      <PageHero title="checkout" />
      <div
        className="page"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StripeCheckout />
      </div>
    </main>
  )
}
export default Checkout
