import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import CheckoutForm from "./CheckoutForm";

function Donate() {
  return (
    <section className="col-12 col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">donate</h3>
            <p className="center">feel free to donate if our index was useful</p>
          </CardTitle>
          <br />
          <CheckoutForm />
        </CardBody>
      </Card>
    </section>
  );
}

export default Donate;