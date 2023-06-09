import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from '@stripe/react-stripe-js'
import { useUserContext } from '../context/user_context'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import axios from 'axios'
import './CSS/StripeCheckout.css'
import { useState } from 'react'
import { useEffect } from 'react'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const CheckoutForm = () => {
  const { myUser } = useUserContext()
  const { cartProducts, total_amount, shipping_fee, clearCart } =
    useCartContext()
  //FROM STRIPE
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  }

  const createPaymentIntent = async () => {
    console.log('hi?')
    try {
      const serverlessFunctionResponse = await axios.post(
        '/.netlify/functions/stripePaymentIntent',
        JSON.stringify({
          cartProducts,
          total_amount,
          shipping_fee,
        })
      )
      console.log(serverlessFunctionResponse)
      if (serverlessFunctionResponse.data === 'payment-intent') {
        // setSucceeded(true)
      }
    } catch (error) {
      console.log(error)
    }
    console.log('hello from stripe checkout')
  }

  useEffect(() => {
    createPaymentIntent()
  }, [])

  const handleChange = async (event) => {}
  const handleSubmit = async (event) => {}

  return (
    <div>
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : 'Pay'}
          </span>
        </button>
        {/* show any error that happens durring processing of the payment */}
        {error && <div className="card-error">{error}</div>}
        {/* show success message upon completion */}
        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment Succeeded, see the result in your{' '}
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard.
          </a>
          Refresh the page to pay again
        </p>
      </form>
    </div>
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
