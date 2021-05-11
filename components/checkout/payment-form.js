import React, { useState } from "react";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Button from "../button/button";
import Review from "./Review";

const stripePromise = loadStripe(
  "pk_test_51IHS8SAkxwsxxcnkwLeWPnVkUo18pRARyYpcsm1yPfZ584DsAEUE3VyTWn3j9Frb7Ju8YsfNx3ZSGOpnokpGDEXx00wMVEBCQE"
);

const PaymentForm = ({
  shippingData,
  checkoutToken,
  backStep,
  onCaptureCheckout,
  nextStep,
  timeout,
}) => {
  const shippingPrice = shippingData.shippingOptions[0].price.raw;
  const itemPrice = checkoutToken.live.subtotal.raw;
  const totalPrice = shippingPrice + itemPrice;

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        list_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary shipping",
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: {
          shipping_method: shippingData.shippingOption,
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      await onCaptureCheckout(checkoutToken.id, orderData);
      timeout();
      nextStep();
    }
  };

  console.log(shippingData);

  return (
    <div style={{ margin: "2rem 0" }}>
      <Review totalPrice={totalPrice} checkoutToken={checkoutToken} />
      <h1 className="header">Payment method</h1>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button onClick={backStep}>Back</Button>
                <Button type="submit" disabled={!stripe}>
                  Pay {totalPrice} ,-
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;
