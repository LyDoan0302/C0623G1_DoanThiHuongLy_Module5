import React from "react";
import * as toDoList from "../service/ToDoListService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, FormGroup, FormLabel } from "react-bootstrap";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import TodoList from "./TodoList";
import { useNavigate } from "react-router-dom";

const CreateToDo = () => {
  const navigate = useNavigate();
  const initValue = {
    name: "",
  };
  const validateObject = {
    name: Yup.string().required("Task is required."),
  };

  const addTask = async (values) => {
    let isSuccess = await toDoList.saveTask(values);
    if (isSuccess) {
      toast.success("Add task successfully!");
      navigate("/toDoList");
      //   toDoList.getALl();
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <div className="container">
        <Formik
          initialValues={initValue}
          onSubmit={(values) => {
            addTask(values);
          }}
          validationSchema={Yup.object(validateObject)}
        >
          <Form>
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <FormLabel>Email address</FormLabel>
              <Field type="text" placeholder="Enter task" name="name" />
              <ErrorMessage name="name" component="span" />
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

export default CreateToDo;
