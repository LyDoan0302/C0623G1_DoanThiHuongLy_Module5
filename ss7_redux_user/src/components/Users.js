import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUser,
  removeUserMiddleware,
} from "../redux/middleware/UserMiddleware";
import { toast } from "react-toastify";
import { Table } from "react-bootstrap";
import { Modal } from "bootstrap";

const Users = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const [userDelete, setUserDelete] = useState({});

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const removeUser = () => {
    dispatch(removeUserMiddleware(userDelete.id));
    toast.success("Deleted successfully!");
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
                  <button
                    type="button"
                    onClick={() => setUserDelete(item)}
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModal">
                  Delete confirm
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                Are you sure to delete {"{"}userDelete.name{"}"} ?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={removeUser}
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
