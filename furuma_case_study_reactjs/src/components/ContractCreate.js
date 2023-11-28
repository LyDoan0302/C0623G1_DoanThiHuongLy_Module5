import React, { useState } from "react";
import * as contractService from "../service/ContractService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ContractCreate = () => {
  const [contract, setContract] = useState();
  const navigate = useNavigate();
  const initValue = {
    contractNumber: "",
    startDate: "",
    endDate: "",
    deposit: 0,
    totalPayment: 0,
  };
  const validateObject = {
    contractNumber: Yup.string().required("Không được để trống số hợp đồng"),
    startDate: Yup.date().required("Không được để trống ngày bắt đầu"),
    endDate: Yup.date().required("Không được để trống ngày kết thúc"),
    deposit: Yup.number().required("Không được để trống tiền đặt cọc"),
    totalPayment: Yup.number().required(
      "Không được để trống tổng số tiền thanh toán"
    ),
  };
  const saveContract = async (value) => {
    let isAdded = await contractService.saveContract(value);
    if (isAdded) {
      toast.success("Added new contract successfully!");
      navigate("/contracts");
    } else {
      toast.error("Add contract fail!");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Tạo hợp đồng</h1>
        <Formik
          initialValues={initValue}
          onSubmit={(value) => {
            saveContract(value);
          }}
          validationSchema={Yup.object(validateObject)}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Số hợp đồng
              </label>
              <Field
                name="contractNumber"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <ErrorMessage
                name="contractNumber"
                component="span"
                className="err-mess"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                Ngày bắt đầu
              </label>
              <Field
                name="startDate"
                type="date"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
              <ErrorMessage
                name="startDate"
                component="span"
                className="err-mess"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail3" className="form-label">
                Ngày kết thúc
              </label>
              <Field
                name="endDate"
                type="date"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
              />
              <ErrorMessage
                name="endDate"
                component="span"
                className="err-mess"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail4" className="form-label">
                Số tiền cọc trước (VND)
              </label>
              <Field
                name="deposit"
                type="number"
                className="form-control"
                id="exampleInputEmail4"
                aria-describedby="emailHelp"
              />
              <ErrorMessage
                name="deposit"
                component="span"
                className="err-mess"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail5" className="form-label">
                Tổng số tiền thanh toán (VND)
              </label>
              <Field
                name="totalPayment"
                type="number"
                className="form-control"
                id="exampleInputEmail5"
                aria-describedby="emailHelp"
              />
              <ErrorMessage
                name="totalPayment"
                component="span"
                className="err-mess"
              />
            </div>
            <button type="submit" className="btn btn-warning my-5">
              Tạo hợp đồng
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ContractCreate;
