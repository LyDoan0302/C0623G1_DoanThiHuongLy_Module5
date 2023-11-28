import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import * as customerService from "../service/CustomerService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const CustomerEdit = () => {
  const [customer, setCustomer] = useState();
  const [customerTypes, setCustomerTypes] = useState();
  const [cusType, setCusType] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAllCustomerType();
  }, []);

  const getAllCustomerType = async () => {
    let res = await customerService.getCutomerType();
    setCustomerTypes(res.data);
  };

  useEffect(() => {
    findCustomerById();
  }, []);

  const findCustomerById = async () => {
    let res = await customerService.findCustomerById(id);
    console.log(res.data);
    setCustomer(res.data);
  };

  // const handleChange = (e) => {
  //   cusType: customerTypes.find(
  //     (cus) => +cus.id === +value.customerType
  //   ),
  //   setCusType(e.target.value);
  // }

  const editCustomer = async (value) => {
    const obj = {
      ...value,
      customerType: customerTypes.find(
        (cus) => +cus.id === +value.customerType
      ),
    };
    let isEdited = await customerService.editCustomer(obj);
    if (isEdited) {
      toast.success("Sửa thông tin khách hàng thành công!");
      navigate("/customers");
    } else {
      toast.error("Sửa thông tin khách hàng thất bại");
    }
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
  if (!customerTypes) {
    return null;
  }
  if (!customer) {
    return null;
  }
  return (
    <>
      <div className="container">
        <h1>Sửa thông tin khách hàng</h1>
        <Formik
          initialValues={customer}
          onSubmit={(values) => {
            console.log(values);
            editCustomer(values);
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

            {/* Loại khach hang */}
            <div className="dropdown mb-3">
              <label className="form-label">Loại khách hàng</label>
              <Field
                className="form-select"
                name="customerType"
                as="select"
                // onChange={handleChange}
              >
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

export default CustomerEdit;
