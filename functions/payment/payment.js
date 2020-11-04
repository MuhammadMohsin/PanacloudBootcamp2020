// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const stripe = require('stripe')('sk_test_51HiczsD31JundhOOhd8cUQAss4SJ0uGqNflljjxFT8o3ez5BuKtGXxQNLCtAJ6VXFwAOLc8svuQn3R5QU5fjgeHI00Hn9tTMga');

exports.handler = async (event, context) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: 'usd',
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: 'accept_a_payment' },
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
