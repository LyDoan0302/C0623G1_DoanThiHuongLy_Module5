"use client";

import React from "react";
import axios from "axios";

const page = () => {
  const [covid, setCovid] = React.useState();

  React.useEffect(() => {
    getCovidInfo();
  }, []);

  const getCovidInfo = async () => {
    let res = await axios.get("http://localhost:8080/posts");
    setCovid(res.data);
  };

  if (!covid) {
    return null;
  }

  return (
    <>
      <div class="container">
        <h1>Vietnamese Covid's information</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Active</th>
              <th scope="col">Recorved</th>
              <th scope="col">Deaths</th>
            </tr>
          </thead>
          <tbody>
            {covid.map((item) => (
              <tr key={item.id}>
                <th scope="row">1</th>
                <td>{new Date(item.Date).toLocaleDateString()}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
