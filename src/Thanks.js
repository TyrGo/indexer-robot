import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Thanks() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              thank you for your support
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Thanks;
