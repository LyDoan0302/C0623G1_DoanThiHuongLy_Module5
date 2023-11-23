import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselTest = () => {
  return (
    <>
      <div style={{ display: "block" }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://owa.bestprice.vn/images/hotels/large/furama-resort-da-nang-648ace083e436-848x477.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <h3
                style={{
                  fontSize: 50,
                  fontFamily: "Playfair Display",
                  fontOpticalSizing: 700,
                }}
              >
                KHU NGHỈ DƯỠNG FURAMA ĐÀ NẴNG
              </h3>
              <p
                style={{
                  fontSize: 30,
                  fontFamily: "Playfair Display",
                  fontOpticalSizing: 700,
                }}
              >
                TỰ HÀO LÀ KHU NGHỈ DƯỠNG ẨM THỰC TẠI VIỆT NAM
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/06/Review-Furama-Resort-Da-Nang-13.jpg"
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3
                style={{
                  fontSize: 50,
                  fontFamily: "Playfair Display",
                  fontOpticalSizing: 700,
                }}
              >
                KHU NGHỈ DƯỠNG FURAMA ĐÀ NẴNG
              </h3>
              <p
                style={{
                  fontSize: 30,
                  fontFamily: "Playfair Display",
                  fontOpticalSizing: 700,
                }}
              >
                TỰ HÀO LÀ KHU NGHỈ DƯỠNG ẨM THỰC TẠI VIỆT NAM
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselTest;
