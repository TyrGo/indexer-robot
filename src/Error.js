import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Error() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              we're sorry! something went wrong
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Error;
