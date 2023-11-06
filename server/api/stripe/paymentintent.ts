import Stripe from "stripe";

export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  const stripe = new Stripe(process.env.STRIPE_SK_KEY!, {
    apiVersion: "2023-10-16",
  });

  return await stripe.paymentIntents.create({
    amount: Number(body.amount),
    currency: "usd",
    automatic_payment_methods: { enabled: true },
  });
});
