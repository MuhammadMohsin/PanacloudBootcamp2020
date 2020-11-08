// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    console.log("Payment Success Details: =>>", JSON.stringify(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Calling webhook function" }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
