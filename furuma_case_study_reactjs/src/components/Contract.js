import React from "react";

const Contract = () => {
  return (
    <>
      <div className="container" style={{ height: 500 }}>
        <div className="table-responsive">
          <h1>Quản lý hợp đồng</h1>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Số hợp đồng</th>
                <th scope="col">Ngày bắt đầu</th>
                <th scope="col">Ngày kết thúc</th>
                <th scope="col">Số tiền đặt cọc</th>
                <th scope="col">Tổng số tiền thanh toán</th>
                <th scope="col">Chức năng</th>
              </tr>
            </thead>
            <tbody>
              <tr className>
                <td scope="row">001</td>
                <td>Ly_thuê villa</td>
                <td>0001</td>
                <td>17/11/2023</td>
                <td>20/11/2023</td>
                <td>3000000</td>
                <td>12000000</td>
                <td>
                  <div>
                    <a href>
                      <i
                        className="bx bxs-message-edit"
                        style={{ color: "#49a681" }}
                      />
                    </a>
                    <a href />
                    <i className="bx bx-detail" style={{ color: "#49a681" }} />
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
    </>
  );
};

export default Contract;
