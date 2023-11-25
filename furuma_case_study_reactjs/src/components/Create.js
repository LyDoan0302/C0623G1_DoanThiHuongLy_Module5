import React, { useEffect, useState } from "react";
import { FormSelect } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { getAllServiceType } from "../service/FacilityService";
import * as facilityService from "../service/FacilityService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Create = () => {
  // select options state type service
  const [facility, setFacility] = useState();
  const [serviceType, setServiceType] = useState();
  const [rentType, setRentType] = useState();
  // const [facilities, setFacilities] = useState();
  const navigate = useNavigate();

  const initValue = {
    serviceName: "",
    serviceType: {
      name: "",
    },
    area: 0,
    price: 0,
    maxQuantity: 0,
    img: "",
    rentType: {},
    houseStandard: "",
    houseFacilities: "",
    houseFloorNumber: 0,
    villaStandard: "",
    villaFacilities: [],
    villaPoolArea: 0,
    villaFloorNumber: 0,
    roomFreeService: "",
  };

  const validateObject = {
    serviceName: Yup.string().required("Service's name is required!"),

    area: Yup.number().required("Area is required!"),
    price: Yup.number().required("Price is required"),
    maxQuantity: Yup.number()
      .min(1, "Min of quantity of people is 1 ")
      .max(10, "Max of quantity of people is 10")
      .required("Max quantity of people is required"),
    img: Yup.string().required("Link image is required"),

    houseStandard: Yup.string().required("House's standard is required"),
    houseFacilities: Yup.string().required("House's facilities are required"),
    houseFloorNumber: Yup.number().required("Number of floor is required"),
    villaStandard: Yup.string().required("Villa's standard is required"),
    villaFacilities: Yup.string().required("Villa's facilities is required"),
    villaPoolArea: Yup.number().required("Villa pool's area is required"),
    villaFloorNumber: Yup.number().required("Number of floor is required"),
    roomFreeService: Yup.string().required("Free service is required"),
  };

  // useEffect(() => {
  //   getAll();
  // });

  useEffect(() => {
    getAllServiceType();
  }, []);

  useEffect(() => {
    getAllRentType();
  }, []);

  // useEffect(() => {
  //   saveFacility();
  // }, []);

  // const getAll = async () => {
  //   let res = await facilityService.getAll();
  //   setFacilities(res.data);
  // };

  const getAllServiceType = async () => {
    let res = await facilityService.getAllServiceType();
    setServiceType(res.data);
  };

  const getAllRentType = async () => {
    let res = await facilityService.getAllRentType();
    setRentType(res.data);
  };

  const saveFacility = async (value) => {
    let isAdded = await facilityService.saveFacility(value);
    if (isAdded) {
      toast.success("Added new facility successfully!");
      navigate("/service");
    } else {
      toast.error("Add fail!");
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setFacility(+value);
  };

  console.log(facility === 2);

  if (!serviceType) {
    return null;
  }

  if (!rentType) {
    return null;
  }

  // if (!facilities) {
  //   return null;
  // }

  return (
    <>
      {/* select options onchange => set state type */}
      <Formik
        initialValues={initValue}
        onSubmit={(values) => {
          saveFacility(values);
        }}
        validationSchema={Yup.object(validateObject)}
      >
        <Form>
          <div className="container">
            <h1>Thêm mới dịch vụ</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail0" className="form-label">
                  Tên dịch vụ
                </label>
                <Field
                  name="serviceName"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail0"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage
                  name="serviceName"
                  component="span"
                  className="err-mess"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Link hình ảnh
                </label>
                <Field
                  name="img"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage
                  name="img"
                  component="span"
                  className="err-mess"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail2" className="form-label">
                  Diện tích sử dụng
                </label>
                <Field
                  name="area"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage
                  name="area"
                  component="span"
                  className="err-mess"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail3" className="form-label">
                  Chi phí thuê
                </label>
                <Field
                  name="price"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail3"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage
                  name="price"
                  component="span"
                  className="err-mess"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail4" className="form-label">
                  Số lượng người tối đa
                </label>
                <Field
                  name="maxQuantity"
                  type="number"
                  className="form-control"
                  id="exampleInputEmail4"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage
                  name="maxQuantity"
                  component="span"
                  className="err-mess"
                />
              </div>
              {/* Kiểu thuê */}
              <div className="dropdown my-4">
                <label className="form-label">Kiểu thuê</label>

                <FormSelect
                  name="rentType"
                  na
                  aria-label="Default select example"
                >
                  {rentType.map((item) => (
                    <option value={item.id}>{item.typeName}</option>
                  ))}
                </FormSelect>
              </div>
              {/* Loại dịch vụ */}
              <div className="dropdown mb-3">
                <label className="form-label">Loại dịch vụ</label>
                <FormSelect
                  className="form-select"
                  name="serviceType"
                  as="select"
                  aria-label="Default select example"
                  onChange={handleInputChange}
                >
                  {serviceType.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </FormSelect>
              </div>
              {facility === 1 && (
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail5" className="form-label">
                    Tiêu chuẩn villa
                  </label>
                  <Field
                    name="villaStandard"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail5"
                    aria-describedby="emailHelp"
                  />
                  <ErrorMessage
                    name="villaStandard"
                    component="span"
                    className="err-mess"
                  />
                </div>
              )}

              {facility === 1 && (
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail6" className="form-label">
                    Diện tích hồ bơi
                  </label>
                  <Field
                    name="villaPoolArea"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail6"
                    aria-describedby="emailHelp"
                  />
                  <ErrorMessage
                    name="villaPoolArea"
                    component="span"
                    className="err-mess"
                  />
                </div>
              )}

              {facility === 1 && (
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail7" className="form-label">
                    Số tầng
                  </label>
                  <Field
                    name="villaFloorNumber"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail7"
                    aria-describedby="emailHelp"
                  />
                  <ErrorMessage
                    name="villaFloorNumber"
                    component="span"
                    className="err-mess"
                  />
                </div>
              )}

              {facility === 2 && (
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail8" className="form-label">
                    Tiêu chuẩn phòng
                  </label>
                  <Field
                    name="houseStandard"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail8"
                    aria-describedby="emailHelp"
                  />
                  <ErrorMessage
                    name="houseStandard"
                    component="span"
                    className="err-mess"
                  />
                </div>
              )}
              {facility === 2 && (
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail9" className="form-label">
                    Tiện ích
                  </label>
                  <Field
                    name="houseFacilities"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail9"
                    aria-describedby="emailHelp"
                  />
                  <ErrorMessage
                    name="houseFacilities"
                    component="span"
                    className="err-mess"
                  />
                </div>
              )}
              {facility === 2 && (
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail10" className="form-label">
                    Số tầng
                  </label>
                  <Field
                    name="houseFloorNumber"
                    type="number"
                    className="form-control"
                    id="exampleInputEmail10"
                    aria-describedby="emailHelp"
                  />
                  <ErrorMessage
                    name="houseFloorNumber"
                    component="span"
                    className="err-mess"
                  />
                </div>
              )}
              {facility === 3 && (
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail11" className="form-label">
                    Dịch vụ miễn phí
                  </label>
                  <Field
                    name="roomFreeService"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail11"
                    aria-describedby="emailHelp"
                  />
                  <ErrorMessage
                    name="roomFreeService"
                    component="span"
                    className="err-mess"
                  />
                </div>
              )}
              {/* Hiển thị thông tin thêm của các loại dịch vụ */}
              <button type="submit" className="btn btn-warning my-5">
                Tạo
              </button>
            </form>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};

export default Create;
