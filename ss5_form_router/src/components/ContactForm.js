import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

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
    email: Yup.string().email().required("email is re"),
    phone: Yup.string()
      .required()
      .matches(phoneRegex, "Phone number is not valid."),
  };
  const notify = () => {
    toast("Contact sucessfully!");
  };
  const handleSubmit = () => alert("Contact sucessfully!");
  return (
    <>
      <div className="container">
        <h1>Contact Form</h1>
        <Formik
          initialValues={initValue}
          onSubmit={handleSubmit}
          validationSchema={Yup.object(validateObject)}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name </Form.Label>
              <ErrorMessage name="name" component="span" className="err-mess" />
              <Field type="text" placeholder="Enter name:" name="name" />
              <ErrorMessage name="name" component="span" className="err-mess" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address </Form.Label>

              <Field type="email" placeholder="Enter email" name="email" />
              <ErrorMessage
                name="email"
                component="span"
                className="err-mess"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone number </Form.Label>

              <Field
                type="text"
                placeholder="Enter phone number:"
                name="phone"
              />
              <ErrorMessage
                name="phone"
                component="span"
                className="err-mess"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Message </Form.Label>

              <Field
                type="text"
                as="textarea"
                rows={3}
                placeholder="Enter message:"
                name="message"
              />
              <ErrorMessage
                name="message"
                component="span"
                className="err-mess"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={notify}>
              Submit
            </Button>
            <ToastContainer />
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
