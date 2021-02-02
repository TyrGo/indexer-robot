import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, FormFeedback } from 'reactstrap';
import IndexApi from "./Api";


function CheckOutForm() {
  const [submission, setSubmission] = useState({ email: '', amount: ''})
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();


  function handleChange(evt) {
    let { name, value } = evt.target;
    setSubmission(oldSubmission => ({ ...oldSubmission, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;
    let result = await IndexApi.postPay(submission, stripe, elements);

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds) // maybe set error state; if error in state; render alert above button
      console.log(result.error.message);
      history.push("/error");
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log("success!!!")
        history.push('/thanks')
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  const style = {
    style: {
      base: {
        color: 'white', fontFamily: "Courier, monospace",
        '::placeholder': { color: 'white', },
      },
      invalid: { color: '#9e2146', },
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input type="email"
          id="id"
          name="email"
          value={submission.email}
          placeholder="enter your email address"
          onChange={handleChange}
        />
      </FormGroup>
        <FormFeedback>please enter an email</FormFeedback>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">US$</InputGroupAddon>
          <Input placeholder="enter an amount" min={0} max={100} type="number" step="1" name="amount" value={submission.amount} onChange={handleChange}/>
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <CardElement options={style} />
      </FormGroup>
      <Button type="submit" disabled={!stripe}>
        donate
      </Button>
    </Form>
  );
};

export default CheckOutForm;
