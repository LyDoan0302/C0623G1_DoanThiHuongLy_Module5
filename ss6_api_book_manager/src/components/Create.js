import axios from "axios";
import React from "react";
import * as Yup from "yup";
import * as bookService from "../service/BookService";
import { ToastContainer, toast } from "react-toastify";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, FormGroup, FormLabel } from "react-bootstrap";

const Create = () => {
  const initValue = {
    title: "",
    quantity: 1,
  };
  const validateObject = {
    title: Yup.string().required("Title is required!"),
    quantity: Yup.number().required("Number is required!"),
  };
  const addBook = async (values) => {
    let isSuccess = await bookService.saveBook(values);
    if (isSuccess) {
      toast.success("Book is added!");
      bookService.getAll();
    } else {
      toast.error("Error!");
    }
  };
  return (
    <>
      <div className="container">
        <Formik
          initialValues={initValue}
          onSubmit={(values) => {
            addBook(values);
          }}
          validationSchema={Yup.object(validateObject)}
        >
          <Form>
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <FormLabel>Book's title</FormLabel>
              <Field
                type="text"
                placeholder="Enter book's title"
                name="title"
              />
              <ErrorMessage name="title" component="span" />
            </FormGroup>
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <FormLabel>Quantity of book</FormLabel>
              <Field
                type="number"
                placeholder="Enter quantiy of book"
                name="quantity"
              />
              <ErrorMessage name="quantity" component="span" />
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

export default Create;
