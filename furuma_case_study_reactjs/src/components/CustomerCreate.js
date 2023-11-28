import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import * as customerService from "../service/CustomerService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FormSelect } from "react-bootstrap";

const CustomerCreate = () => {
  const [gender, setGender] = useState();
  const [customer, setCustomer] = useState();
  const navigate = useNavigate();
  const [customerTypes, setCustomerTypes] = useState();

  useEffect(() => {
    getAllCustomeType();
  }, []);

  const getAllCustomeType = async () => {
    let res = await customerService.getCutomerType();
    setCustomerTypes(res.data);
  };
  const initValue = {
    fullName: "",
    dob: "",
    gender: 0,
    idCard: "",
    phone: "",
    email: "",
    address: "",
    customerType: 1,
  };

  const validateObject = {
    // fullName: Yup.string().required("Name is required"),
    // dob: Yup.date().required("Date of birth is required"),
    // idCard: Yup.string()
    //   .min(10, "Length of IdCard is 10 or 12")
    //   .max(12, "Length of IdCard is 10 or 12")
    //   .required("IdCard is required"),
    // phone: Yup.string().required("Phone number is required"),
    // email: Yup.string().email().required("Email is required"),
    // address: Yup.string().required("Address is required"),
  };
  const saveCustomer = async (value) => {
    const obj = {
      ...value,
      customerType: customerTypes.find(
        (cus) => +cus.id === +value.customerType
      ),
    };
    console.log(obj);
    let isAdded = await customerService.saveCustomer(obj);
    if (isAdded) {
      toast.success("Đã thêm mới khách hàng thành công!");
      navigate("/customers");
    } else {
      toast.error("Thêm mới thất bại");
    }
  };
  if (!customerTypes) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h1>Thêm mới khách hàng</h1>
        <Formik
          initialValues={initValue}
          onSubmit={(values) => {
            console.log(values);
            saveCustomer(values);
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
              <Field
                className="form-select"
                name="gender"
                as="select"
                aria-label="Default select example"
              >
                <option value="0">Nữ</option>
                <option value="1">Nam</option>
                <option value="2">Khác</option>
              </Field>
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
            <div className="mb-3">
              <label htmlFor="exampleInputEmail5" className="form-label">
                Địa chỉ
              </label>
              <Field
                name="address"
                type="text"
                className="form-control"
                id="exampleInputEmail5"
                aria-describedby="emailHelp"
              />
              <ErrorMessage
                name="address"
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
              <Field className="form-select" name="customerType" as="select">
                {customerTypes.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Field>
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
