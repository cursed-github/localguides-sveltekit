import Stripe from "stripe";

const SECRET_STRIPE_KEY =
  "sk_test_51LfAvvGEQ8u28rQ5IvVpV2iXwMEIRvDvMNLTyzfM6eXlxQZpLlyrXFjiRP0Nj64t7EDcXm3tnDxnEvShrmCwUDgW00TaZN1cO8";
const stripe = new Stripe(SECRET_STRIPE_KEY, {
  apiVersion: "2022-11-15",
});
