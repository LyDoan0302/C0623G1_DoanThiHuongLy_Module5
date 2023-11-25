import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import * as facilityService from "../service/FacilityService";
import { useParams } from "react-router-dom";
import HouseService from "./HouseService";
import VillaService from "./VillaService";
import RoomService from "./RoomService";

const ServiceDetail = () => {
  const [facility, setFacility] = useState();
  const { id } = useParams();

  useEffect(() => {
    getFacilityById();
  }, []);

  const getFacilityById = async () => {
    let res = await facilityService.getFacilityById(id);
    console.log(res.data);
    setFacility(res.data);
  };

  if (!facility) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>{facility.serviceName}</h2>
        <img src={facility.img} className="card-img-top" alt="..." />
        <ListGroup>
          <div className="mb-3 mt-3">
            <p>Service name: </p>
            <ListGroup.Item>{facility.serviceName}</ListGroup.Item>
          </div>
          <div className="mb-3">
            <p>Area (m2): </p>
            <ListGroup.Item>{facility.area}</ListGroup.Item>
          </div>
          <div className="mb-3">
            <p>Price (VND): </p>
            <ListGroup.Item>{facility.price}</ListGroup.Item>
          </div>
          <div className="mb-3">
            <p>Max quantity of people: </p>
            <ListGroup.Item>{facility.maxQuantity}</ListGroup.Item>
          </div>
          <div className="mb-3">
            <p>Type of renting: </p>
            <ListGroup.Item>{facility.rentType.typeName}</ListGroup.Item>
          </div>
          {facility.serviceType.name === "house" && (
            <HouseService facility={facility} />
          )}
          {facility.serviceType.name === "villa" && (
            <VillaService facility={facility} />
          )}
          {facility.serviceType.name === "room" && (
            <RoomService facility={facility} />
          )}
        </ListGroup>
      </div>
    </>
  );
};

export default ServiceDetail;
