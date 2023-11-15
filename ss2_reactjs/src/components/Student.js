import React from "react";

const students = [
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
  },
  {
    company: "Ernst Handel",
    contact: "Roland Mendel",
    country: "Austria",
  },
  {
    company: "Island Trading",
    contact: "Helen Bennett",
    country: "UK",
  },
  {
    company: "Laughing Bacchus Winecellars",
    contact: "Yoshi Tannamuri",
    country: "Canada",
  },
  {
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
            <tr class="">
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
