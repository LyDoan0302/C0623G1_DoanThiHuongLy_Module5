import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const changeValue2 = (count) => {
    setCount((previousValue) => previousValue + 2);
  };
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <Button variant="warning" onClick={changeValue2}>
          Add 2
        </Button>
      </div>
    </>
  );
};

export default Counter2;
