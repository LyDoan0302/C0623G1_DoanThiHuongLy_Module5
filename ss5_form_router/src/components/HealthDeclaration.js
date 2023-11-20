import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const HealthDeclaration = () => {
  const initValue = {
    fullName: "",
    idCard: "",
    birthday: "",
    gender: null,
    nationality: "",
    workplace: "",
    workDepartment: "",
    insuranceCard: 1,
    province: "",
    district: "",
    wards: "",
    houseNumber: "",
    phoneNumber: "",
    email: "",
  };
  const validateObject = {
    fullName: Yup.string().required("Họ tên không được để trống"),
    idCard: Yup.string()
      .required("CMND không được để trống")
      .min(9, "CMND : phải là 9 kí tự")
      .max(12, "CCCD : phải là 12 kí tự "),
    birthday: Yup.date()
      .required("Ngày sinh không được để trống")
      .min(new Date("1900-01-01"), "Năm sinh phải lớn hơn 1900"),
    // gender: Yup.required("Giới tính không được để trống"),
    nationality: Yup.string().required("Quốc tịch không được để trống"),
    province: Yup.string().required("Tỉnh không được để trống"),
    district: Yup.string().required("Quận/ Huyện không được để trống"),
    wards: Yup.string().required("Phường/ Xã không được để trống"),
    houseNumber: Yup.string().required("Số nhà không được để trống"),
    phoneNumber: Yup.string()
      .required("Số điện thoại không được để trống")
      .matches("^(84|0[3|5|7|8|9])+([0-9]{8})$", "Số điện thoại không tồn tại"),
    email: Yup.string()
      .required("Email không được để trống")
      .email()
      .matches(
        "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
        "email không tồn tại."
      ),
  };
  const onSubmit = () => {};

  return (
    <>
      <div className="container">
        <h1>Tờ khai y tế</h1>
        <Formik
          initialValues={initValue}
          onSubmit={onSubmit}
          validationSchema={Yup.object(validateObject)}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Họ và tên
              </label>
              <Field
                type="text"
                className="form-control"
                name="fullName"
                id="fullName"
              />
              <ErrorMessage name="fullName" className="err-mess" />
            </div>
            <div className="mb-3">
              <label htmlFor="idCard" className="form-label">
                Hộ chiếu/CMND
              </label>
              <Field
                type="text"
                className="form-control"
                name="idCard"
                id="idCard"
              />
              <ErrorMessage name="idCard" className="err-mess" />
            </div>
            <div className="mb-3">
              <label htmlFor="birthday" className="form-label">
                Ngày sinh
              </label>
              <Field
                type="date"
                className="form-control"
                name="birthday"
                id="birthday"
              />
              <ErrorMessage name="birthday" className="err-mess" />
            </div>
            <div className="mb-3">
              <label className="form-label">Giới tính</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Nam
                </label>
              </div>
              <div className="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="0"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Nữ
                </label>
              </div>
              {/* <ErrorMessage name="gender" className="err-mess" /> */}
            </div>
            <div className="mb-3">
              <label htmlFor="nationality" className="form-label">
                Quốc Tịch
              </label>
              <Field
                type="text"
                className="form-control"
                name="nationality"
                id="nationality"
              />
              <ErrorMessage name="nationality" className="err-mess" />
            </div>
            <div className="mb-3">
              <label htmlFor="workplace" className="form-label">
                Công ty làm việc
              </label>
              <Field
                type="text"
                className="form-control"
                name="workplace"
                id="workplace"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="workPosition" className="form-label">
                Bộ phận làm việc
              </label>
              <Field
                type="text"
                className="form-control"
                name="workDepartment"
                id="workDepartment"
              />
            </div>
            <div className="mb-3 form-check">
              <label className="form-check-label" htmlFor="insuranceCard">
                Có thẻ bảo hiểm y tế
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value="1"
                id="insuranceCard"
              />
            </div>
            <h4>Địa chỉ liên lạc tại Vệt Nam</h4>
            <div className="mb-3">
              <label htmlFor="province" className="form-label">
                Tỉnh, TP
              </label>
              <Field
                type="text"
                className="form-control"
                name="province"
                id="province"
              />
              <ErrorMessage name="province" className="err-mess" />
            </div>
            <div className="mb-3">
              <label htmlFor="district" className="form-label">
                Quận/Huyện
              </label>
              <Field
                type="text"
                className="form-control"
                name="district"
                id="district"
              />
              <ErrorMessage name="district" className="err-mess" />
            </div>
            <div className="mb-3">
              <label htmlFor="wards" className="form-label">
                Phường/Xã
              </label>
              <Field
                type="text"
                className="form-control"
                name="wards"
                id="wards"
              />
              <ErrorMessage name="wards" className="err-mess" />
            </div>
            <div className="mb-3">
              <label htmlFor="houseNumber" className="form-label">
                Số nhà
              </label>
              <Field
                type="text"
                className="form-control"
                name="houseNumber"
                id="houseNumber"
              />
              <ErrorMessage name="houseNumber" className="err-mess" />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Điện thoại
              </label>
              <Field
                type="text"
                className="form-control"
                name="phoneNumber"
                id="phoneNumber"
              />
              <ErrorMessage name="phoneNumber" className="err-mess" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                className="form-control"
                name="email"
                id="email"
              />
              <ErrorMessage name="email" className="err-mess" />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default HealthDeclaration;
