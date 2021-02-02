import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function About() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              about
            </h3>
          </CardTitle>
          <p className="about">
            our index robot helps make your book index. submit your book and
            entries, and it emails you a neat index ordered. click the <b>help</b> tab for more details
          </p>
          <br />
          <br />
          <div>
            <div className="bios">
              <img className="image" src="https://philpeople.org/assets/storage/y5/cg/variants/y5cgC4raPCC6FkycaHBwQb58/257c61d87e22f766aa744f898d860cda70552b9b68cc6d2d47b0c7ea73b83e5c" />
              <p className="bio">
                ty | i compose philosophy — and programs in python, javascript and ruby
              </p>
              </div>
              <br />
              <div className="bios">
              <img className="image" src="https://ca.slack-edge.com/T2LECLYJ3-U01AHFJR3UH-bd06ef36a7bc-512" />
              <br />
              <p className="bio">
                ting | i compose music — and programs in python and javascript
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default About;