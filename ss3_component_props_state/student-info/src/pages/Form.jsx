import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample(props) {
  const { handleChange, handleAddItem, item } = props;
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>To do list</Form.Label>
          <Form.Control
            value={item}
            type="text"
            placeholder="Enter task"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleAddItem}>
          Add
        </Button>
      </Form>
    </>
  );
}

export default BasicExample;
