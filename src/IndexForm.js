import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { Button, CustomInput, Form, FormGroup, FormFeedback, Input, Card, CardBody, CardTitle } from 'reactstrap';
import IndexApi from "./Api";

function IndexForm() {
  const [submission, setSubmission] = useState({ email: undefined, ms: undefined, words: undefined })
  const history = useHistory();

  function handleChange(evt) {
    let { name, value } = evt.target;

    if (name === "ms") {
      evt.target.setCustomValidity('');
      value = evt.target.files[0];

      if (!value?.name?.endsWith(".pdf")) {
        evt.target.setCustomValidity('Please upload a .pdf file');
      }
    }

    if (name === "words") {
      evt.target.setCustomValidity('');
      value = evt.target.files[0];

      if (!value?.name?.endsWith(".txt")) {
        evt.target.setCustomValidity('Please upload a .txt file');
      }
    }

    setSubmission(oldSubmission => ({ ...oldSubmission, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    IndexApi.postSubmission(submission);
    history.push("/done")
  }

  return (
    <section className="col-12 col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <Form onSubmit={handleSubmit}>
              <h3 className="font-weight-bold">
                create your book index
              </h3>
              <br />
              <FormGroup>
                <Input type="email"
                  id="id"
                  name="email"
                  value={submission.email}
                  placeholder="enter your email address"
                  onChange={handleChange}
                />
                <FormFeedback >please enter an email</FormFeedback>
              </FormGroup>
              <FormGroup>
                <CustomInput type="file"
                  id="ms"
                  required
                  name="ms"
                  label="upload manuscript"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <CustomInput type="file"
                  id="words"
                  required name="words"
                  label="upload index words"
                  onChange={handleChange}
                />
              </FormGroup>
              <br />
              <Button>submit</Button>
            </Form>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  )
}

export default IndexForm

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom"
// import { Button, CustomInput, Form, FormGroup, FormFeedback, Input, Card, CardBody, CardTitle } from 'reactstrap';
// import IndexApi from "./Api";

// function IndexForm() {
//   const [submission, setSubmission] = useState({email: undefined, ms: undefined, words: undefined})
//   const history = useHistory();

//   function handleChange(evt) {
//      let { name, value } = evt.target;
//      if (name === "ms" || name === "words") value = evt.target.files[0];
//      setSubmission(oldSubmission => ({ ...oldSubmission, [name]: value }));
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     IndexApi.postSubmission(submission);
//     history.push("/done")
//   }

//   return (
//     <section className="col-12 col-md-8">
//       <Card>
//         <CardBody className="text-center">
//           <CardTitle>
//             <Form onSubmit={handleSubmit}>
//               <h3 className="font-weight-bold">
//                 Create Your Book Index
//               </h3>
//               <br />
//               <FormGroup>
//                 <Input type="email" 
//                        id="id"
//                        name="email" 
//                        value={submission.email}
//                        placeholder="enter your email address" 
//                        onChange={handleChange} 
//                        />
//                 <FormFeedback >please enter an email</FormFeedback>
//               </FormGroup>
//               <FormGroup>
//                 <CustomInput type="file"
//                              id="ms" 
//                              required
//                              name="ms" 
//                              label="upload manuscript" 
//                              onChange={handleChange}
//                              />
//               </FormGroup>
//               <FormGroup>
//                 <CustomInput type="file" 
//                              id="words"
//                              required name="words" 
//                              label="upload index words" 
//                              onChange={handleChange}
//                              />
//               </FormGroup>
//               <br />
//               <Button>Submit</Button>
//             </Form>
//           </CardTitle>
//         </CardBody>
//       </Card>
//     </section>
//     )
//   }

// export default IndexForm