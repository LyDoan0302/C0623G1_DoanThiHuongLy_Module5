import React, { Component } from "react";
import BasicExample from "../pages/Form";
import ToDoTable from "../pages/todo/Table";
const list = [
  {
    id: 1,
    name: "study",
  },
  {
    id: 2,
    name: "cook",
  },
];

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [...list],
      item: "",
    };
  }
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ ...this.state, item: { id: 123, name: value } });
  };
  handleAddItem = () => {
    this.setState({
      ...this.state,
      list: [...this.state.list, this.state.item],
      item: { id: "", name: "" },
    });
  };

  render() {
    return (
      <>
        <div className="container mt-5">
          <BasicExample
            handleAddItem={this.handleAddItem}
            handleChange={this.handleChange}
            item={this.state.item.name}
          />
          <ToDoTable todos={this.state.list} />
        </div>
      </>
    );
  }
}
export default ToDoList;
