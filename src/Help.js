import React from "react";
import txtpic from "./txtpic.png"
import { Card, CardBody, CardTitle } from 'reactstrap';
import "./App.css";

function Help() {
  return (
    <section className="col-12 col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">how to use this</h3>
          </CardTitle>
          <div className="help">
            <p>
              our index robot helps make your book index. submit your book and
              entries, and it emails you a neat index ordered.
            </p>
            <br />
            <p className="help">
              ❶ enter your email address
            </p>
            <p className="help">❷ upload the book as a pdf file</p>
            <p className="help">
              ❸ upload the words you want indexed as txt file
            </p>
            <p className="help">❹ done! check your email in a few minutes</p>
            <br />
            <p>your txt file should look like this:</p>
            <br />
            <img className="txtpic" src={txtpic} alt="txt format" />
            <br />
            <br />
            <p>
              each entry on new line, and subentries
              seperated with commas. the index robot will order alphabetically.
              the index returned should look like this, with pages ranged and
              subentries separated by semi-colons:
            </p>
            <br />
            <img className="txtpic" src={txtpic} alt="txt format" />
            <br />
            <br />
            <p>
              <b>note:</b> the robot doesn't seperate front-matter from the 
              rest of the book. so it might count
              a page numbered with roman numeral 'i' as page '1'. it's
              usually a good idea to remove front-matter from the pdf first
            </p>
            <br />
            <p>
              sorry about that! but the robot was built in a few hours. if you'd
              like it to be cleverer, you could pay us enough to work on it a little
              more :) meanwhile, it's n substitute for a professional indexer, 
              but should save some time
            </p>
            <br />
          </div>
        </CardBody>
            <p className="center">by <a href="https://tyron.world" className="link">ty</a> and <a>ting</a></p>
      </Card>
    </section>
  );
}

export default Help

