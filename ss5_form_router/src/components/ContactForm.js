import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { FormGroup, FormLabel } from "react-bootstrap";

const ContactForm = () => {
  const initValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const validateObject = {
    name: Yup.string().required("name is required."),
    // email: Yup.string().email().required("email is re"),
    // phone: Yup.string()
    //   .required()
    //   .matches(phoneRegex, "Phone number is not valid."),
  };
  const notify = () => {
    toast("Contact sucessfully!");
  };
  const handleSubmit = (values) => {
    console.log(values);
    notify();
  };
  return (
    <>
      <div className="container">
        <h1>Contact Form</h1>
        <Formik
          initialValues={initValue}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
          validationSchema={Yup.object(validateObject)}
        >
          <Form>
            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Name </FormLabel>
              <ErrorMessage name="name" component="span" className="err-mess" />
              <Field
                type="text"
                placeholder="Enter name:"
                name="name"
                className="form-control"
              />
              <ErrorMessage name="name" component="span" className="err-mess" />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Email address </FormLabel>

              <Field
                type="email"
                placeholder="Enter email"
                name="email"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="err-mess"
              />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Phone number </FormLabel>

              <Field
                type="text"
                placeholder="Enter phone number:"
                name="phone"
                className="form-control"
              />
              <ErrorMessage
                name="phone"
                component="span"
                className="err-mess"
              />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Message </FormLabel>

              <Field
                type="text"
                as="textarea"
                rows={3}
                placeholder="Enter message:"
                name="message"
                className="form-control"
              />
              <ErrorMessage
                name="message"
                component="span"
                className="err-mess"
              />
            </FormGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
