import React from "react";
import { ListGroup } from "react-bootstrap";

const RoomService = (props) => {
  const { facility } = props;
  return (
    <>
      <div className="mb-3">
        <p>Dịch vụ miễn phí: </p>
        <ListGroup.Item>{facility.roomFreeService}</ListGroup.Item>
      </div>
    </>
  );
};

export default RoomService;
