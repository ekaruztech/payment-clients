import {useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe,} from '@stripe/react-stripe-js';

const PUBLIC_KEY =
    'pk_test_51RLbt4R7OYdnxEw82XmTZgEAGEYphUYOx8QnaJAfNAsSR8IXrFfMxHwVUYqqSqtcx0reGBw1UOOlUHImjJEmQRJb00Y2FkIkB8';
const stripePromise = loadStripe(PUBLIC_KEY);

export const CheckoutForm = ({clientSecret}: any) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState<string>(''); // Initialize as empty string instead of object

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement: any = elements.getElement(CardElement);

        const {error, paymentIntent}: any = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: cardElement,
                },
            }
        );

        if (error) {
            setError(error.message);
        } else if (paymentIntent.status === 'succeeded') {
            console.log('paymentIntent :::: ', paymentIntent);
            console.log('Payment succeeded!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement/>
            <br/>
            <br/>
            <button type="submit" disabled={!stripe}>
                Submit Payment
            </button>
            {error && <div>{error}</div>}
        </form>
    );
};

export const StripePaymentForm = ({clientSecret}: any) => {
    return (
        <div style={{marginLeft: 'auto 0'}}>
            <Elements stripe={stripePromise}>
                <CheckoutForm clientSecret={clientSecret}/>
            </Elements>
        </div>
    );
};