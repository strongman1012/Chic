import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Stripe_CLIENT_ID } from "../config/config";

const stripePromise = loadStripe(Stripe_CLIENT_ID);
const APIURL = "http://localhost:3001"

export default function StripeCheckout(props) {
  const [clientSecret, setClientSecret] = useState("");
  const { payNow } = props;
  useEffect(() => {
    fetch(`${APIURL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{}] }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm payNow={payNow} />
        </Elements>
      )}
    </div>
  );
}