import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import * as customerService from "../service/CustomerService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const CustomerCreate = () => {
  const [customer, setCustomer] = useState();
  const navigate = useNavigate();
  const [customerType, setCustomerType] = useState();

  useEffect(() => {
    getCustomerType();
  });

  const initValue = {
    fullName: "",
    dob: "",
    gender: 0,
    idCard: "",
    phone: "",
    email: "",
    address: "",
    customerType: {},
  };

  const validateObject = {
    fullName: Yup.string().required("Name is required"),
    dob: Yup.date().required("Date of birth is required"),
    idCard: Yup.string()
      .min(10, "Length of IdCard is 10 or 12")
      .max(12, "Length of IdCard is 10 or 12")
      .required("IdCard is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.email().required("Email is required"),
    address: Yup.string().required("Address is required"),
  };
  const saveCustomer = async (value) => {
    let isAdded = await customerService.saveCustomer(value);
    if (isAdded) {
      toast.success("Add new customer successfully!");
      navigate("/customers");
    } else {
      toast.error("Add customer fail!");
    }
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    setCustomer(+value);
  };
  const getCustomerType = async () => {
    let res = await customerService.getCutomerType();
    setCustomerType(res.data);
  };
  if (!customerType) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h1>Thêm mới khách hàng</h1>
        <Formik
          initialValues={initValue}
          onSubmit={(value) => {
            saveCustomer(value);
          }}
          validationSchema={Yup.object(validateObject)}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Họ tên
              </label>
              <Field
                name="fullName"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                Ngày sinh
              </label>
              <Field
                name="dob"
                type="date"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
              <ErrorMessage name="dob" component="span" className="err-mess" />
            </div>
            {/* <div className="dropdown">
              <label className="form-label">Giới tính</label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Chọn giới tính
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Nam</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Nữ</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Khác</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div> */}
            {/* Gioi tinh */}
            <div className="dropdown mb-3">
              <label className="form-label">Giới tính</label>
              <FormSelect
                className="form-select"
                name="gender"
                as="select"
                aria-label="Default select example"
                onChange={handleInputChange}
              >
                <option value="0">Nữ</option>
                <option value="1">Nam</option>
                <option value="2">Khác</option>
              </FormSelect>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail3" className="form-label">
                Số CMND
              </label>
              <Field
                name="idCard"
                type="text"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
              />
              <ErrorMessage
                name="idCard"
                component="span"
                className="err-mess"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail4" className="form-label">
                Số điện thoại
              </label>
              <Field
                name="phone"
                type="text"
                className="form-control"
                id="exampleInputEmail4"
                aria-describedby="emailHelp"
              />
              <ErrorMessage
                name="phone"
                component="span"
                className="err-mess"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail5" className="form-label">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail5"
                aria-describedby="emailHelp"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="err-mess"
              />
            </div>
            {/* <div className="dropdown">
              <label className="form-label">Loại khách</label>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Chọn loại khách
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Diamond</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Platinium</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Silver</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Member</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div> */}
            {/* Loại khach hang */}
            <div className="dropdown mb-3">
              <label className="form-label">Loại khách hàng</label>
              <FormSelect
                className="form-select"
                name="customerType"
                as="select"
                aria-label="Default select example"
                onChange={handleInputChange}
              >
                {customerType.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </FormSelect>
            </div>
            <button type="submit" className="btn btn-warning my-5">
              Lưu thông tin khách hàng
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default CustomerCreate;
