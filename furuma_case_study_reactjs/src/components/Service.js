import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { XSquare, PencilSquare, CardText } from "react-bootstrap-icons";
import { Link, useLocation, useParams } from "react-router-dom";
import * as facilityService from "../service/FacilityService";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const Service = () => {
  const [show, setShow] = useState(false);
  const [idDelete, setIdDelete] = useState(-1);
  const [serviceName, setServiceName] = useState("");
  const [facilities, setFacilities] = useState();
  const [facilityType, setFacilityType] = useState();
  const params = useParams();

  useEffect(() => {
    if (params.faci) {
      setFacilityType(params.faci);
    }
  }, [params]);

  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    let data = await facilityService.getAll();
    setFacilities(data.data);
  };
  const handleClose = () => setShow(false);
  const handleShow = (id, serviceName) => {
    setIdDelete(id);
    setServiceName(serviceName);
    setShow(true);
  };
  if (!facilities) {
    return null;
  }
  const handleDelete = async () => {
    let isDeleted = await facilityService.removeFacility(idDelete);
    if (isDeleted) {
      setShow(false);
      toast.success("Đã xoá thành công!");
      getAll();
    } else {
      toast.error("Xoá thất bại!");
    }
  };
  return (
    <>
      <div className="justify-content-between flex-wrap my-5 mx-5">
        <Button className="ms-10 mt-5" variant="warning">
          <Link to="/service/create">Thêm mới dịch vụ</Link>
        </Button>
      </div>

      <div className="d-flex justify-content-between flex-wrap my-5 mx-5">
        {facilities.map((item) => {
          if (facilityType) {
            if (item.serviceType.name === facilityType) {
              return (
                <div
                  className="card mb-5"
                  style={{ width: "18rem" }}
                  key={item.id}
                >
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.serviceName}</h5>
                    <p className="card-text">{item.maxQuantity}</p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <Link
                          to={`/service/${item.id}`}
                          className="btn btn-primary"
                        >
                          <CardText />
                          Chi tiết
                        </Link>
                      </div>
                      <div className="d-flex ">
                        <Button
                          className="d-flex ms-3 "
                          variant="outline-primary"
                        >
                          <Link to={`/service/edit/${item.id}`}>
                            <PencilSquare />
                          </Link>
                        </Button>
                        <Button
                          className="d-flex ms-3 "
                          variant="outline-primary"
                          onClick={() => {
                            handleShow(item.id, item.serviceName);
                          }}
                        >
                          <XSquare />
                        </Button>
                      </div>

                      <div>
                        <a href>
                          <i className="bx bx-edit" />
                        </a>
                        <a href>
                          <i className="bx bx-folder-minus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          } else {
            return (
              <div
                className="card mb-5"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.serviceName}</h5>
                  <p className="card-text">{item.maxQuantity}</p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Link
                        to={`/service/${item.id}`}
                        className="btn btn-primary"
                      >
                        Chi tiết
                      </Link>
                    </div>
                    <div className="d-flex ">
                      <Button
                        className="d-flex ms-3 "
                        variant="outline-primary"
                      >
                        <Link to={`/service/edit/${item.id}`}>
                          <PencilSquare />
                        </Link>
                      </Button>
                      <Button
                        className="d-flex ms-3 "
                        variant="outline-primary"
                        onClick={() => {
                          handleShow(item.id, item.serviceName);
                        }}
                      >
                        <XSquare />
                      </Button>
                    </div>

                    <div>
                      <a href>
                        <i className="bx bx-edit" />
                      </a>
                      <a href>
                        <i className="bx bx-folder-minus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
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

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "red" }}>
          Bạn có chắc muốn xoá {serviceName} ?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Xoá
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Service;
