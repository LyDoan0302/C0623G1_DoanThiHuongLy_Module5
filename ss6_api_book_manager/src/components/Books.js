import React, { useEffect, useState } from "react";
import * as bookService from "../service/BookService";
import { Button, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [idDelete, setIdDelete] = useState(-1);
  const [title, setTitle] = useState("");
  //   const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (value, title) => {
    console.log(value);
    setIdDelete(value);
    setTitle(title);
    setShow(true);
  };
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    let data = await bookService.getAll();
    setBooks(data);
  };
  if (!books) {
    return null;
  }

  const deleteBook = async () => {
    const isDeleted = await bookService.deleteBook(idDelete);
    if (isDeleted) {
      setShow(false);
      toast.success("Deleted successfully!");
      getAll();
    }
  };

  return (
    <>
      <div className="container">
        <h2>Books</h2>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Quantity</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>
                  {" "}
                  <Button variant="outline-primary">Edit</Button>{" "}
                </td>
                <td>
                  {" "}
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      handleShow(item.id, item.title);
                    }}
                  >
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: "red" }}>
              Do you want to delete the book with title {title}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={deleteBook}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
      <ToastContainer />
    </>
  );
};

export default Books;
