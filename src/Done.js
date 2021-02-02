import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import CheckOutForm from "./CheckoutForm";

function Done() {
  return (
    <section className="col-12 col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h4>check your email in a few mins</h4>
            <p className="center">if this was useful please consider donating</p> {/**maybe get email address from prev form here! */}
            <CheckOutForm />
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Done;