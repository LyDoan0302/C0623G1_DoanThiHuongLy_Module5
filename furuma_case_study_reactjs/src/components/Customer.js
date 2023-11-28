import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as customerService from "../service/CustomerService";
import { toast } from "react-toastify";
import { PencilSquare, XSquare } from "react-bootstrap-icons";

const Customer = () => {
  const [show, setShow] = useState(false);

  const [idDelete, setIdDelete] = useState(-1);
  const [filter, setFilter] = useState({
    fullName: "",
    phone: "",
  });
  const [name, setName] = useState("");
  const [customers, setCustomers] = useState();

  useEffect(() => {
    getAll();
  }, []);

  const changeFullNameSearch = (event) => {
    setFilter({
      ...filter,
      fullName: event.target.value,
    });
  };

  const changePhoneSearch = (event) => {
    setFilter({
      ...filter,
      phone: event.target.value,
    });
  };

  const submitSearch = async () => {
    let res = await customerService.findByNameAndPhone(
      filter.fullName,
      filter.phone
    );
    setCustomers(res.data);
  };
  const handleClose = () => setShow(false);
  const handleShow = (id, name) => {
    setIdDelete(id);
    setName(name);
    setShow(true);
  };

  const getAll = async () => {
    let res = await customerService.getAll();

    setCustomers(res.data);
  };
  const removeCustomer = async () => {
    console.log(idDelete);
    let isDeleted = await customerService.removeCustomer(idDelete);
    if (isDeleted) {
      toast.success("Đã xoá thành công!");
      setShow(false);
      getAll();
    } else {
      toast.error("Xoá thất bại!");
    }
  };
  if (!customers) {
    return null;
  }
  return (
    <>
      <div className="container">
        <div className="row mt-3 justify-content-between">
          <div className="col">
            <Button variant="warning">
              <Link to="/customerCreate">Thêm mới khách hàng</Link>
            </Button>
          </div>
          <div className="col">
            <input
              className="form-control"
              onChange={(event) => changeFullNameSearch(event)}
              placeholder="Nhập tên để tìm kiếm"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              onChange={(event) => changePhoneSearch(event)}
              placeholder=" Nhập số điện thoại để tìm kiếm"
            />
          </div>
          <div className="col-lg-1">
            <a className="btn btn-primary" role="button" onClick={submitSearch}>
              Tìm
            </a>
          </div>
        </div>

        {/* Body */}
        <div className="container" style={{ minHeight: 500 }}>
          <div className="table-responsive">
            <h1 className="">Quản lý khách hàng</h1>
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
                {customers.map((item, index) => (
                  <tr key={item.id}>
                    <td scope="row">{index + 1}</td>
                    <td>{item.fullName}</td>
                    <td>{item.dob}</td>
                    {item.gender === 0 && <td>Nữ</td>}
                    {item.gender === 1 && <td>Nam</td>}
                    {item.gender === 2 && <td>Khác</td>}

                    <td>{item.idCard}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>

                    <td>{item.customerType.name}</td>
                    <td>{item.address}</td>
                    <td>
                      <div>
                        <Button variant="primary me-1">
                          <Link
                            style={{ color: "white", textDecoration: "none" }}
                            to={`/customer/${item.id}`}
                          >
                            Sửa
                          </Link>
                        </Button>

                        {/* Button trigger modal */}

                        <Button
                          variant="primary"
                          onClick={() => {
                            handleShow(item.id, item.fullName);
                          }}
                        >
                          Xoá
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Xác nhận xoá!</Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xoá khách hàng {name} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="danger" onClick={removeCustomer}>
            Xoá
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Customer;
