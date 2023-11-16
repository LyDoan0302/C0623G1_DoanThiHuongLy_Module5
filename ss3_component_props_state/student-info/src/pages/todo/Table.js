import React from "react";
import Table from "react-bootstrap/esm/Table";

const ToDoTable = (props) => {
  const { todos } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>To do</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={todo.id}>
            <td>{index + 1}</td>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ToDoTable;
