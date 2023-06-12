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
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()

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
    try {
      const serverlessFunctionResponse = await axios.post(
        '/.netlify/functions/stripePaymentIntent',
        JSON.stringify({
          cartProducts,
          total_amount,
          shipping_fee,
        })
      )
      setClientSecret(serverlessFunctionResponse.data.clientSecret)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    createPaymentIntent()
  }, [])

  const handleChange = async (event) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    })
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
      setTimeout(() => {
        navigate('/')
        clearCart()
      }, 7000)
    }
  }

  return (
    <div className="stripe-checkout">
      {succeeded ? (
        <article>
          <h4>Thank you !</h4>
          <h4>Your payment was successful !</h4>
          <h4>Redirecting to home page</h4>
        </article>
      ) : (
        <article>
          <h4>Hello, {myUser?.name}</h4>
          <p>Your total is: {formatPrice(total_amount + shipping_fee)}</p>
          <p>Test Card Number: 4242 4242 4242 4242 </p>
        </article>
      )}
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
          Payment Succeeded, see the result in your
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://dashboard.stripe.com/test/payments`}
          >
            Stripe dashboard.
          </a>
        </p>
      </form>
    </div>
  )
}

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}
export default StripeCheckout
