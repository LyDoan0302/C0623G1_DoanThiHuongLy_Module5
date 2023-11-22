import React, { useEffect, useState } from "react";
import * as bookService from "../service/BookService";
import { Table } from "react-bootstrap";

const Books = () => {
  const [books, setBooks] = useState([]);
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

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item) => (
            <tr key={item.id}>
              <td>1</td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Books;
