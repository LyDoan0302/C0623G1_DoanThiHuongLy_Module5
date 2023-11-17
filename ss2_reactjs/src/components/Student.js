import React from "react";

const students = [
  {
    id: 1,
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
  },
  {
    id: 2,
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
  },
  {
    id: 3,
    company: "Ernst Handel",
    contact: "Roland Mendel",
    country: "Austria",
  },
  {
    id: 4,
    company: "Island Trading",
    contact: "Helen Bennett",
    country: "UK",
  },
  {
    id: 5,
    company: "Laughing Bacchus Winecellars",
    contact: "Yoshi Tannamuri",
    country: "Canada",
  },
  {
    id: 6,
    company: "Magazzini Alimentari Riuniti",
    contact: "Giovanni Rovelli",
    country: "Italy",
  },
];

const Student = () => {
  return (
    <div>
      <h1>Students</h1>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Contact</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} class="">
              <td scope="row">{student.company}</td>
              <td>{student.contact}</td>
              <td>{student.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
