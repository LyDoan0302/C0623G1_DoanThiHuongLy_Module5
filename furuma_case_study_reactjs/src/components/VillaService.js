import React from "react";
import { ListGroup } from "react-bootstrap";

const VillaService = (props) => {
  const { facility } = props;
  return (
    <>
      <div className="mb-3">
        <p>Tiêu chuẩn Villa: </p>
        <ListGroup.Item>{facility.villaStandard}</ListGroup.Item>
      </div>
      <div className="mb-3">
        <p>Tiện ích: </p>
        <ListGroup.Item>{facility.villaFacilities}</ListGroup.Item>
      </div>
      <div className="mb-3">
        <p>Diện tích hồ bơi: </p>
        <ListGroup.Item>{facility.villaPoolArea}</ListGroup.Item>
      </div>
      <div className="mb-3">
        <p>Số tầng của Villa: </p>
        <ListGroup.Item>{facility.villaFloorNumber}</ListGroup.Item>
      </div>
    </>
  );
};

export default VillaService;
