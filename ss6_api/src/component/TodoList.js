import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import * as toDoListService from "../service/ToDoListService";

const TodoList = () => {
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    getAllTodoList();
  }, []);
  const getAllTodoList = async () => {
    if (toDoList) {
      let data = await toDoListService.getALl();
      setToDoList(data);
    }
  };
  if (!toDoList) {
    return null;
  }
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>To do</th>
          </tr>
        </thead>
        <tbody>
          {toDoList.map((item, index) => (
            <tr key={item.id}>
              <td>{index}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TodoList;
