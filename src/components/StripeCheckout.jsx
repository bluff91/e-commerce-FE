import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from '@stripe/react-stripe-js'
import { useUserContext } from '../context/user_context'
import './CSS/StripeCheckout.css'

const stripePromise = loadStripe(
  'pk_test_51NGJdzGbc04JW59sVKsS16D9pTDfX4gbP2hJkSKB6fL0Zx23O8xTgQzybmLnbSn7tVtrb4lFninEklWoAITHCbWI00mKIf9sAA'
)

const CheckoutForm = () => {
  const { myUser } = useUserContext()
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (elements === null) return

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  )
}

const StripeCheckout = () => {
  return (
    <div className="stripe-wrapper">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}
export default StripeCheckout
