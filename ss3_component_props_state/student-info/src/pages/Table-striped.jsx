import Table from "react-bootstrap/Table";

function StripedRowExample(props) {
  const { teachers } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((teacher, index) => (
          <tr key={teacher.id}>
            <td>{index + 1}</td>
            <td>{teacher.id}</td>
            <td>{teacher.name}</td>
            <td>{teacher.addaress}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
