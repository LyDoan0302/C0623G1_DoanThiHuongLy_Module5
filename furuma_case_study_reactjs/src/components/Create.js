import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Create = () => {
  return (
    <>
      <div className="container">
        <h1>Thêm mới dịch vụ</h1>
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
          {/* Kiểu thuê */}
          <div className="dropdown my-4">
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
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Năm
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Tháng
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ngày
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Giờ
                </a>
              </li>
            </ul>
          </div>
          {/* Loại dịch vụ */}
          <div className="dropdown">
            <label className="form-label">Loại dịch vụ</label>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Chọn loại dịch vụ
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Villa</Dropdown.Item>
                <Dropdown.Item href="#/action-2">House</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Room</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* Hiển thị thông tin thêm của các loại dịch vụ */}
          <button type="submit" className="btn btn-warning my-5">
            Tạo
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
