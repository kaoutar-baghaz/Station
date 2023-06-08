import express from 'express';
import Stripe from "stripe";

const app = express();
const port = 3000;

const PUBLISHABLE_KEY = "pk_test_51NBJI0DisVL1ODVdnoBYwS5ReBcROnN973zPRHGUq6ljyDw5TLNR5mFfBj72nv8J8T881pIhA0R555chdwk2SYWe00CBC4dAmf";
const SECRET_KEY = "sk_test_51NBJI0DisVL1ODVdoZOLJs1OsLJRXHic5w8HozoTJyrggenrGg8nEDNYQWqkvmLaSOGvhZhjiAvht3U6ZrmMFRd500tu4dcUb5";

const stripe = Stripe(SECRET_KEY, {apiVersion: "2022-11-15"})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  app.post("/create-payment-intent", async(req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1099, //lowest denomination of particular currency
            currency: "usd",
            payment_method_types: ["card"], //by default
          });
      
          const clientSecret = paymentIntent.client_secret;
      
          res.json({
            clientSecret: clientSecret,
          });
    } catch (e) {
        console.log(e.message);
        res.json({ error: e.message });
    }
  });