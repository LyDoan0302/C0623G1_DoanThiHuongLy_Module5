import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Edit = () => {
  return (
    <>
      <div className="container">
        <h1>Chỉnh sửa</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Tên dịch vụ
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
              Diện tích sử dụng
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">
              Chi phí thuê
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
              Số lượng người tối đa
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail4"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="dropdown">
            <label className="form-label">Kiểu thuê</label>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Chọn loại kiểu thuê
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Năm</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tháng</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Ngày</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Giờ</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button type="submit" className="btn btn-warning my-5">
            Cập nhật
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
