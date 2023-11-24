import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUser,
  removeUserMiddleware,
} from "../redux/middleware/UserMiddleware";
import { toast } from "react-toastify";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Users = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const [userDelete, setUserDelete] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    removeUser();
    handleClose();
  };

  const handleDelete = (user) => {
    setUserDelete(user);
    handleShow();
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const removeUser = () => {
    dispatch(removeUserMiddleware(userDelete.id));
    toast.success("Deleted successfully!");
    dispatch(getAllUser());
  };
  if (!users) {
    return null;
  }

  return (
    <>
      <div className="container">
        <Table striped="columns">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Webside</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(item)}>
                    Delete
                  </Button>
                </td>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure to delete {item.name} ?!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Users;
