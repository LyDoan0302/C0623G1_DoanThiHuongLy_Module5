import React from "react";
import { Component } from "react";
import StripedRowExample from "../pages/Table-striped";

const teachers = [
  {
    id: 1,
    name: "HaiTT",
    address: "Da Nang",
  },
  {
    id: 2,
    name: "PhuongTD",
    address: "Da Nang",
  },
  {
    id: 3,
    name: "CongNT",
    address: "Da Nang",
  },
];

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [...teachers],
    };
  }
  render() {
    return (
      <div className="container mt-5">
        <StripedRowExample teachers={this.state.teachers} />
      </div>
    );
  }
}

export default Teacher;
