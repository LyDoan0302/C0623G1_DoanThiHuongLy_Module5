import React from "react";

const CustomerCreate = () => {
  return (
    <>
      <div className="container">
        <h1>Thêm mới khách hàng</h1>
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
            <button
              className="btn btn-outline-success dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Chọn giới tính
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Nam
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Nữ
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Khác
                </a>
              </li>
            </ul>
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
            <button
              className="btn btn-outline-success dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Chọn loại khách
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
              <li>
                <a className="dropdown-item" href="#">
                  Diamond
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Platinium
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Gold
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Silver
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Member
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail6" className="form-label">
              Địa chỉ
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail6"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-warning my-5">
            Lưu thông tin khách hàng
          </button>
        </form>
      </div>
    </>
  );
};

export default CustomerCreate;
