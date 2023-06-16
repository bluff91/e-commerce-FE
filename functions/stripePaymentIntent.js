//domain/.netlify/functions/stripePaymentIntent
// eslint-disable-next-line no-undef
require('dotenv').config()

// eslint-disable-next-line no-undef
const stripe = require('stripe')(`${process.env.VITE_STRIPE_SECRET}`)

// eslint-disable-next-line no-undef
exports.handler = async (event, context) => {
  if (!event.body) {
    return { statusCode: 200, body: 'Create payment intent' }
  }
  const parsedData = JSON.parse(event.body)
  const { cartProducts, total_amount, shipping_fee } = parsedData

  //  this would be where we would connect to the backend / API to check
  //  and calculate the amount of cash for the items in the cart
  const calculateOrderAmount = () => {
    return total_amount + shipping_fee
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: 'eur',
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ msg: error.message }) }
  }
}
