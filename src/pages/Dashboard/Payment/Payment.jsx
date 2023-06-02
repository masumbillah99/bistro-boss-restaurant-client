import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div>
      <SectionTitle subHeading="---Please Process---" heading="payment" />
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </div>
  );
};

export default Payment;
