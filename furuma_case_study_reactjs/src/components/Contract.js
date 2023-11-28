import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as contractService from "../service/ContractService";
import { toast } from "react-toastify";

const Contract = () => {
  const [show, setShow] = useState(false);
  const [contracts, setContracts] = useState();
  const [idDelete, setIdDelete] = useState(-1);
  const [contractNumberDel, setContractNumberDel] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (contractId, contractNumber) => {
    setIdDelete(contractId);
    setContractNumberDel(contractNumber);
    setShow(true);
  };
  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    let res = await contractService.getAll();
    setContracts(res.data);
  };

  const handleDelete = async () => {
    let isDeleted = await contractService.removeContract(idDelete);
    if (isDeleted) {
      toast.success("Đã xoá thành công!");
      setShow(false);
      getAll();
    } else {
      toast.error("Xoá thất bại");
      setShow(false);
    }
  };
  if (!contracts) {
    return null;
  }
  return (
    <>
      <div className="container" style={{ minHeight: 500 }}>
        <Button className="ms-10 mt-5" variant="warning">
          <Link to="/contractCreate">Thêm mới hợp đồng</Link>
        </Button>
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
              {contracts.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.contractNumber}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.deposit}</td>
                  <td>{item.totalPayment}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleShow(item.id, item.contractNumber);
                      }}
                    >
                      Xoá
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xoá</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xoá {contractNumberDel} không ?
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

export default Contract;
