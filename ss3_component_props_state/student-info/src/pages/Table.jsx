import Table from "react-bootstrap/Table";

function DarkExample(props) {
  const { students } = props;

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Class</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.class}</td>
            <td>{student.address}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DarkExample;
