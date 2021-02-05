import { CardElement } from '@stripe/react-stripe-js';
import axios from "axios";

// const BASE_API_URL = "http://localhost:5000";
const BASE_API_URL = "https://bookindexer1.herokuapp.com"

class IndexApi {
  static async postSubmission(submission) {
    const encodedEmail = encodeURIComponent(submission.email);
    const formData = new FormData();

    formData.append("ms", submission.ms, 'ms.pdf');
    formData.append("words", submission.words, 'words.txt');
    
    const result = await axios.post(`${BASE_API_URL}/${encodedEmail}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return result.data;
  }

  static async postPay(submission, stripe, elements) {
    const response = await axios.post(`${BASE_API_URL}/pay`, { email: submission.email, amount: submission.amount }) 
    const clientSecret = response.data['client_secret'];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: submission.email
        },
      }
    });

    return result;
  }
}

export default IndexApi;
