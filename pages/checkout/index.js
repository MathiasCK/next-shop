import { Step, StepLabel, Stepper } from "@material-ui/core";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../../components/button/button";
import AddressForm from "../../components/checkout/address-form";
import PaymentForm from "../../components/checkout/payment-form";

import {
  useCart,
  useErrorMessage,
  useHandleCaptureCheckout,
  useOrder,
} from "../../context/CartContext";
import commerce from "../../utils/commerce";
import Spinner from "../../utils/Spinner";

const steps = ["Shipping adress", "Payment details", "Review"];

const Checkout = () => {
  const cart = useCart();
  const error = useErrorMessage();
  const order = useOrder();
  const captureCheckout = useHandleCaptureCheckout();

  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState();
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log("TOKEN", token);
        setCheckoutToken(token);
      } catch (error) {
        console.log("tokenerror", error.message);
      }
    };
    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const backStep = () => setActiveStep((prev) => prev - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 300);
  };

  let Confirmation = () =>
    order.cursomer ? (
      <>
        <div>
          <h1>
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}!
          </h1>
          <h2>Order ref: {order.customer_reference}</h2>
        </div>
        <Link href="/">
          <div>
            <Button>Back to home</Button>
          </div>
        </Link>
      </>
    ) : isFinished ? (
      <>
        <div>
          <h1>Thank you for your purchase!</h1>
        </div>
        <Link href="/">
          <Button>Back to home</Button>
        </Link>
      </>
    ) : (
      <Spinner />
    );

  if (error) {
    console.log("USER", error);
    Confirmation = () => (
      <div>
        <h1>Error: {error}</h1>
        <Link href="/">
          <Button>Back to home</Button>
        </Link>
      </div>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        nextStep={nextStep}
        backStep={backStep}
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        onCaptureCheckout={captureCheckout}
        timeout={timeout}
      />
    );

  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* If we're on the last step */}
      {activeStep === steps.length ? (
        <Confirmation />
      ) : !checkoutToken ? (
        <Spinner />
      ) : (
        <Form />
      )}
    </div>
  );
};

export default Checkout;
