import React from "react";

const Customer = () => {
  return (
    <>
      <div>
        {/* Body */}
        <div className="container">
          <div className="table-responsive">
            <h1>Quản lý khách hàng</h1>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Họ tên</th>
                  <th scope="col">Ngày sinh</th>
                  <th scope="col">Giới tính</th>
                  <th scope="col">Số CMND</th>
                  <th scope="col">Số điện thoại</th>
                  <th scope="col">Email</th>
                  <th scope="col">Loại khách</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                <tr className>
                  <td scope="row">001</td>
                  <td>Đoàn Thị Hương Ly</td>
                  <td>03/02/1989</td>
                  <td>Nữ</td>
                  <td>233103393</td>
                  <td>0987654321</td>
                  <td>lydoan.kt@gmail.com</td>
                  <td>Diamond</td>
                  <td>Đà Nẵng</td>
                  <td>
                    <div>
                      <a href>
                        <i
                          className="bx bxs-message-edit"
                          style={{ color: "#49a681" }}
                        />
                      </a>
                      <a href>
                        <i
                          className="bx bxs-user-detail"
                          style={{ color: "#49a681" }}
                        />
                      </a>
                      {/* Button trigger modal */}
                      <button
                        style={{ backgroundColor: "#49a681", color: "white" }}
                        type="button"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Xoá
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className>
                  <td scope="row">001</td>
                  <td>Đoàn Thị Hương Ly</td>
                  <td>03/02/1989</td>
                  <td>Nữ</td>
                  <td>233103393</td>
                  <td>0987654321</td>
                  <td>lydoan.kt@gmail.com</td>
                  <td>Diamond</td>
                  <td>Đà Nẵng</td>
                  <td>
                    <div>
                      <a href>
                        <i
                          className="bx bxs-message-edit"
                          style={{ color: "#49a681" }}
                        />
                      </a>
                      <a href>
                        <i
                          className="bx bxs-user-detail"
                          style={{ color: "#49a681" }}
                        />
                      </a>
                      {/* Button trigger modal */}
                      <button
                        style={{ backgroundColor: "#49a681", color: "white" }}
                        type="button"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Xoá
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* phan trang */}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Customer;
