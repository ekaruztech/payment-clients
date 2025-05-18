import React from 'react';
import {StripePayment, PayStack} from "./components";

const App: React.FC = () => {
    return (
        <div style={{margin: '5% auto', width: '500px'}} className="row justify-content-center mt-lg-5">
            <StripePayment/>
            <br/>
            <hr/>
            <br/>
            <PayStack/>
        </div>
    );
};

export default App;
