import React from 'react';
import { PaystackButton } from 'react-paystack';

const PayStackButtonComponent: React.FC = () => {
    const handlePaystackSuccessAction = (reference: string) => {
        console.log('Payment Successful:', reference);
    };

    const handlePaystackCloseAction = () => {
        console.log('Payment dialog closed.');
    };

    const componentProps = {
        reference: "trx-bmsi-248a018a-9b1c-4415-ba94-ab0357cf0e51",
        email: 'testing@gmail.com',
        amount: 30000,
        publicKey: 'pk_test_4965cf704ebc5df1ab543cab546db81aeb51e547',
        text: 'Pay Now',
        onSuccess: handlePaystackSuccessAction,
        onClose: handlePaystackCloseAction,
    };

    return (
        <div className="paystack-button-component">
            <h2>Paystack Button Integration</h2>
            <PaystackButton {...componentProps} />
        </div>
    );
};

export default PayStackButtonComponent;
