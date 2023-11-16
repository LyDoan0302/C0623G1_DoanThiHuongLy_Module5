import { Component } from "react";
import DarkExample from "../pages/Table";

const students = [
  {
    id: 1,
    name: "Huong Ly",
    class: "C06",
    address: "Da Nang",
  },
  {
    id: 2,
    name: "Huong Ly 2",
    class: "C07",
    address: "Da Nang",
  },
];

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [...students],
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <DarkExample students={this.state.students} />
      </div>
    );
  }
}

export default Student;
