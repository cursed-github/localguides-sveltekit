import Stripe from "stripe";

const SECRET_STRIPE_KEY =
  "sk_test_51NjyrUSHniTOhyE6g4j4mOAlrJ3O1p4nrheIRZIiJV5VmB3ccQrF17kLPmlAzygAJBIHcwX1qOoOhmnOyjpQu8Fz00pXjITsJt";
const stripe = new Stripe(SECRET_STRIPE_KEY, {
  apiVersion: "2023-08-16",
});


export const POST = async ({request}) => {
      // items: [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
      const data = await request.json();
      const items = data.items;
      console.log(items);
      /*
          we have: [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
          stripe wants: [ { price: "1", quantity: 6 }, { price: "2", quantity: 3 } ]
      */
  
      let lineItems  = [];
      items.forEach((item) => {
          lineItems.push( { price: item.id, quantity: 1} )
      });
      cont product = {
            price: 'price_1NjywySHniTOhyE6dU6fdplO',
            quantity: 1
      }
      // It gives us a URL for the person to check out with
      const session = await stripe.checkout.sessions.create({
          line_items: lineItems,
          mode: 'payment',
          success_url: "http://localhost:5173/profile",
          cancel_url: "http://localhost:5173/",
      });
  
      return new Response(
          JSON.stringify({ url: session.url }), // frontend will get this url to redirect
          {
              status: 200,
              headers: { 'content-type': 'application/json'}
          }
      )
  }