import { PageHero } from '../components'
import { useUserContext } from '../context/user_context'
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(
  'pk_test_51NGJdzGbc04JW59sVKsS16D9pTDfX4gbP2hJkSKB6fL0Zx23O8xTgQzybmLnbSn7tVtrb4lFninEklWoAITHCbWI00mKIf9sAA'
)
const Checkout = () => {
  // const { myUser } = useUserContext()
  // const stripe = useStripe()
  // const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (elements === null) return

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
  }

  return (
    <main>
      <PageHero title="checkout" />
      <div className="page">
        {/* {myUser ? (
          <Elements stripe={stripePromise}>
            <form onSubmit={handleSubmit}>
              <CardElement />
              <button disabled={!stripe || !elements}>Pay</button>
            </form>
          </Elements>
        ) : (
          'lol'
        )} */}
      </div>
    </main>
  )
}
export default Checkout
