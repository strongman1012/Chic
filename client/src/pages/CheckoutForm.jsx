import React, { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm(props) {
  const { payNow } = props;
  const stripe = useStripe();
  const elements = useElements();
  const APIURL = "http://localhost:3001"
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const ReturnURL = window.location.href;
  useEffect(() => {
    if (!stripe) {
      return;
    }

    // const clientSecret = new URLSearchParams(window.location.search).get(
    //   "payment_intent_client_secret"
    // );

    // if (!clientSecret) {
    //   return;
    // }

    // stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
    //   setMessage(paymentIntent.status === "succeeded" ? "Your payment succeeded" : "Unexpected error occurred");
    // });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      price: payNow,
      name: 'booking',
      username: 'userName',
      email: 'email',
      orderId: 'orderId',
      ReturnURL: ReturnURL
    }

    try {
      const response = await fetch(`${APIURL}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // window.open(data.data.url);
      window.location.href = data.data.url;
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className='bg-black w-full font-bold text-white p-3 mt-6 mb-2' disabled={isLoading || !stripe || !elements}>
        {isLoading ? "Loading..." : "Credit Card Pay now"}
      </button>
      {message && <div>{message}</div>}
    </form>
  );
}
