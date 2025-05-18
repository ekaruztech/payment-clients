import React from 'react';
import { PaystackButton } from 'react-paystack';

export const PayStack: React.FC = () => {
    const handlePaystackSuccessAction = (reference: string) => {
        console.log('Payment Successful:', reference);
    };

    const handlePaystackCloseAction = () => {
        console.log('Payment dialog closed.');
    };

    const componentProps = {
        reference: "trx-bmsi-8fe6d9e4-907d-4357-863d-394e021964fb",
        email: 'testing@gmail.com',
        amount: 30000,
        publicKey: 'pk_test_4965cf704ebc5df1ab543cab546db81aeb51e547',
        text: 'Pay Now',
        onSuccess: handlePaystackSuccessAction,
        onClose: handlePaystackCloseAction,
    };

    return (
        <div className="paystack-button-component">
            <h2>Paystack Payment</h2>
            <PaystackButton {...componentProps} />
        </div>
    );
};
