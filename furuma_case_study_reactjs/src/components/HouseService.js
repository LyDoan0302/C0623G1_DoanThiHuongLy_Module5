import React from "react";
import { ListGroup } from "react-bootstrap";

const HouseService = (props) => {
  const { facility } = props;
  return (
    <>
      <div className="mb-3">
        <p>Tiêu chuẩn House </p>
        <ListGroup.Item>{facility.houseStandard}</ListGroup.Item>
      </div>
      <div className="mb-3">
        <p>Tiện ích của House </p>
        <ListGroup.Item>{facility.houseFacilities}</ListGroup.Item>
      </div>
      <div className="mb-3">
        <p>Số tầng của House </p>
        <ListGroup.Item>{facility.houseFloorNumber}</ListGroup.Item>
      </div>
    </>
  );
};

export default HouseService;
