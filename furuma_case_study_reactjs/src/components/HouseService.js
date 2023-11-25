import React from "react";
import { ListGroup } from "react-bootstrap";

const HouseService = (props) => {
  const { facility } = props;
  return (
    <>
      <div className="mb-3">
        <p>House standard: </p>
        <ListGroup.Item>{facility.houseStandard}</ListGroup.Item>
      </div>
      <div className="mb-3">
        <p>House's facilities: </p>
        <ListGroup.Item>{facility.houseFacilities}</ListGroup.Item>
      </div>
      <div className="mb-3">
        <p>Number of floor: </p>
        <ListGroup.Item>{facility.houseFloorNumber}</ListGroup.Item>
      </div>
    </>
  );
};

export default HouseService;
