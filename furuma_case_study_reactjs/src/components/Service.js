import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { XSquare, PencilSquare } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import * as facilityService from "../service/FacilityService";

const Service = () => {
  const [facilities, setFacilities] = useState();
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    let data = await facilityService.getAll();
    setFacilities(data.data);
  };
  if (!facilities) {
    return null;
  }
  return (
    <>
      <div className="justify-content-between flex-wrap my-5 mx-5">
        <Button className="ms-10 mt-5" variant="warning">
          <Link to="service/create">Add new service</Link>
        </Button>
      </div>

      <div className="d-flex justify-content-between flex-wrap my-5 mx-5">
        {facilities.map((item) => (
          <div className="card mb-5" style={{ width: "18rem" }} key={item.id}>
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.serviceName}</h5>
              <p className="card-text">{item.maxQuantity}</p>
              <div className="d-flex justify-content-between">
                <div>
                  <Link to={`/service/${item.id}`} className="btn btn-primary">
                    Chi tiết
                  </Link>
                </div>
                <div className="d-flex ">
                  <Button>
                    <XSquare />
                  </Button>

                  <Button className="d-flex ms-3 ">
                    <PencilSquare />
                  </Button>
                </div>

                <div>
                  <a href>
                    <i className="bx bx-edit" />
                  </a>
                  <a href>
                    <i className="bx bx-folder-minus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="card mb-5" style={{ width: "18rem" }}>
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <a href="#" className="btn btn-primary">
                  Chi tiết
                </a>
              </div>
              <div>
                <a href>
                  <i className="bx bx-edit" />
                </a>
                <a href>
                  <i className="bx bx-folder-minus" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-5" style={{ width: "18rem" }}>
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <a href="#" className="btn btn-primary">
                  Chi tiết
                </a>
              </div>
              <div>
                <a href>
                  <i className="bx bx-folder-minus" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-5" style={{ width: "18rem" }}>
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <a href="#" className="btn btn-primary">
                  Chi tiết
                </a>
              </div>
              <div>
                <a href>
                  <i className="bx bx-edit" />
                </a>
                <a href>
                  <i className="bx bx-folder-minus" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-5" style={{ width: "18rem" }}>
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <a href="#" className="btn btn-primary">
                  Chi tiết
                </a>
              </div>
              <div>
                <a href>
                  <i className="bx bx-edit" />
                </a>
                <a href>
                  <i className="bx bx-folder-minus" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-5" style={{ width: "18rem" }}>
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-370x239.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <a href="#" className="btn btn-primary">
                  Chi tiết
                </a>
              </div>
              <div>
                <a href>
                  <i className="bx bx-edit" />
                </a>
                <a href>
                  <i className="bx bx-folder-minus" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-5" style={{ width: "18rem" }}>
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-370x239.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <a href="#" className="btn btn-primary">
                  Chi tiết
                </a>
              </div>
              <div>
                <a href>
                  <i className="bx bx-edit" />
                </a>
                <a href>
                  <i className="bx bx-folder-minus" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-5" style={{ width: "18rem" }}>
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <a href="#" className="btn btn-primary">
                  Chi tiết
                </a>
              </div>
              <div>
                <a href>
                  <i className="bx bx-edit" />
                </a>
                <a href>
                  <i className="bx bx-folder-minus" />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* phan trang */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Service;
