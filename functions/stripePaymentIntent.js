//domain/.netlify/functions/stripePaymentIntent

exports.handler = async (event, context) => {
  if (!event.body) {
    return { statusCode: 200, body: 'Create payment intent' }
  }
  const parsedData = JSON.parse(event.body)
  const { cartProducts, total_amount, shipping_fee } = parsedData
  if (cartProducts.length > 0 && total_amount > shipping_fee) {
    return {
      statusCode: 200,
      body: 'payment-intent',
    }
  } else {
    return { statusCode: 403, body: 'payment not successfull' }
  }
}
