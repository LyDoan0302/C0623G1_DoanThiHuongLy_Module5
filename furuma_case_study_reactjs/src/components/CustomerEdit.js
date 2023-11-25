import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const CustomerEdit = () => {
  return (
    <>
      <div className="container">
        <h1>Chỉnh sửa thông tin khách hàng</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Họ tên
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">
              Ngày sinh
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="dropdown">
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
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">
              Số CMND
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail3"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label">
              Số điện thoại
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail4"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail5" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail5"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="dropdown">
            <label className="form-label">Loại khách</label>
            <div className="dropdown">
              <label className="form-label">Giới tính</label>
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
            </div>
          </div>
          <button type="submit" className="btn btn-warning my-5">
            Lưu thông tin khách hàng
          </button>
        </form>
      </div>
    </>
  );
};

export default CustomerEdit;
