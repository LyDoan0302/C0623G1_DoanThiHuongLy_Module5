import React, { useEffect, useState } from "react";
import { FormSelect } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { getAllServiceType } from "../service/FacilityService";
import * as facilityService from "../service/FacilityService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

let validateObject = {
  serviceName: Yup.string().required("Tên dịch vụ: bắt buộc nhập"),
  area: Yup.number().required("Diện tích: bắt buộc nhập"),
  price: Yup.number().required("Giá thuê: bắt buộc nhập"),
  maxQuantity: Yup.number()
    .min(1, "Sức chứa tối thiểu: 1 người ")
    .max(10, "Sức chứa tối đa: 15 người ")
    .required("Sức chứa: bắt buộc nhập"),
  img: Yup.string().required("Link hình ảnh: bắt buộc nhập"),
};

const validateRoom = {
  roomFreeService: Yup.string().required(
    "Dịch vụ phòng miễn phí: bắt buộc nhập"
  ),
};

const validateHouse = {
  houseStandard: Yup.string().required("Tiêu chuẩn House: bắt buộc nhập"),
  houseFacilities: Yup.string().required("Tiện ích của House: bắt buộc nhập"),
  houseFloorNumber: Yup.number().required("Số tầng của nhà: bắt buộc nhập"),
};

const validateVilla = {
  villaStandard: Yup.string().required("Tiêu chuẩn Villa: bắt buộc nhập"),
  villaFacilities: Yup.string().required("Tiện ích của Villa: bắt buộc nhập"),
  villaPoolArea: Yup.number().required("Diện tích hồ bơi: bắt buộc nhập"),
  villaFloorNumber: Yup.number().required("Số tầng của Villa: bắt buộc nhập"),
};

const Create = () => {
  // select options state type service
  const [serviceType, setServiceType] = useState();
  const [serviceTypes, setServiceTypes] = useState();
  const [rentTypes, setRentTypes] = useState();
  // const [facilities, setFacilities] = useState();
  const [validate, setValidate] = useState(validateObject);
  const navigate = useNavigate();
  const [rentType, setRentType] = useState();

  const initValue = {
    serviceName: "",
    area: 0,
    price: 0,
    maxQuantity: 0,
    img: "",
    houseStandard: "",
    houseFacilities: "",
    houseFloorNumber: 0,
    villaStandard: "",
    villaFacilities: "",
    villaPoolArea: 0,
    villaFloorNumber: 0,
    roomFreeService: "",
  };

  useEffect(() => {
    if (serviceTypes) {
      setServiceType(serviceTypes[0].id);
    }
  }, [serviceTypes]);

  useEffect(() => {
    if (rentTypes) {
      setRentType(rentTypes[0].id);
    }
  }, [rentTypes]);

  useEffect(() => {
    if (serviceType) {
      switch (serviceType) {
        case 1:
          setValidate({ ...validateObject, ...validateVilla });
          break;
        case 2:
          setValidate({ ...validateObject, ...validateHouse });
          break;
        case 3:
          setValidate({ ...validateObject, ...validateRoom });
          break;
        default:
          break;
      }
    }
  }, [serviceType]);

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
    setServiceTypes(res.data);
  };

  const getAllRentType = async () => {
    let res = await facilityService.getAllRentType();
    setRentTypes(res.data);
  };

  const saveFacility = async (values) => {
    let isAdded = await facilityService.saveFacility(values);
    if (isAdded) {
      toast.success("Thêm mới dịch vụ thành công!");
      navigate("/services");
    } else {
      toast.error("Thêm mới thất bại!");
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setServiceType(+value);
  };

  const handleRentTypeChange = (e) => {
    const { value } = e.target;
    setRentType(+value);
  };

  if (!serviceTypes) {
    return null;
  }

  if (!rentTypes) {
    return null;
  }

  if (!serviceType) {
    return null;
  }

  if (!rentType) {
    return null;
  }

  console.log(validate);

  // if (!facilities) {
  //   return null;
  // }

  return (
    <>
      {/* select options onchange => set state type */}
      <Formik
        initialValues={initValue}
        onSubmit={(values) => {
          console.log(values);
          const type = [...serviceTypes].find((st) => st.id === serviceType);
          const rentT = [...rentTypes].find((rt) => rt.id === rentType);
          const dto = {
            ...values,
            serviceType: type,
            rentType: rentT,
          };
          saveFacility(dto);
        }}
        validationSchema={Yup.object(validate)}
      >
        <Form>
          <div className="container">
            <h1>Thêm mới dịch vụ</h1>
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
              <ErrorMessage name="img" component="span" className="err-mess" />
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
              <ErrorMessage name="area" component="span" className="err-mess" />
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

              <Field
                name="rentType"
                as="select"
                aria-label="Default select example"
                onChange={handleRentTypeChange}
              >
                {rentTypes.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.typeName}
                  </option>
                ))}
              </Field>
            </div>
            {/* Loại dịch vụ */}
            <div className="dropdown mb-3">
              <label className="form-label">Loại dịch vụ</label>
              <Field
                className="form-select"
                name="serviceType"
                as="select"
                aria-label="Default select example"
                onChange={handleInputChange}
              >
                {serviceTypes.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Field>
            </div>
            {serviceType === 1 && (
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

            {serviceType === 1 && (
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

            {serviceType === 1 && (
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

            {serviceType === 1 && (
              <div className="mb-3">
                <label htmlFor="exampleInputEmail7" className="form-label">
                  Tien ich
                </label>
                <Field
                  name="villaFacilities"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail7"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage
                  name="villaFacilities"
                  component="span"
                  className="err-mess"
                />
              </div>
            )}

            {serviceType === 2 && (
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
            {serviceType === 2 && (
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
            {serviceType === 2 && (
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
            {serviceType === 3 && (
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
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};

export default Create;
