import { Card, CardBody, CardTitle } from 'reactstrap';
import {StripePaymentForm} from './CheckoutForm.js';

export const StripePayment = () => {
  return (
    <div style={{marginLeft: 'auto 0'}} className="row justify-content-center mt-lg-5">
      <h2>Stripe Payment</h2>
      <div className="col-4 center mt-5">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardBody>
              <StripePaymentForm
                clientSecret={
                  'pi_3RQA7CETAJmI65im1U3sqxDQ_secret_ZCQR9cGBSkmryE4pyiueiy1B3'
                }
              />
            </CardBody>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
