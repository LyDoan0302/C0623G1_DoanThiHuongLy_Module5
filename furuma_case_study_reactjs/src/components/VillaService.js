import React from "react";
import { ListGroup } from "react-bootstrap";

const VillaService = (props) => {
  const { facility } = props;
  return (
    <>
      <div className="mb-3">
        <p>Villa Standard: </p>
        <ListGroup.Item>{facility.villaStandard}</ListGroup.Item>
      </div>
      <div className="mb-3">
        <p>Facilities: </p>
        <ListGroup.Item>{facility.villaFacilities}</ListGroup.Item>
      </div>
      <div className="mb-3">
        <p>Pool's area: </p>
        <ListGroup.Item>{facility.villaPoolArea}</ListGroup.Item>
      </div>
      <div className="mb-3">
        <p>Number of floor: </p>
        <ListGroup.Item>{facility.villaFloorNumber}</ListGroup.Item>
      </div>
    </>
  );
};

export default VillaService;
