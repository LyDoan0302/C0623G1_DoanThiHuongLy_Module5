import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);
  const changeValue1 = (count) => {
    setCount((previousValue) => previousValue + 1);
  };

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <Button variant="warning" onClick={changeValue1}>
          Add 1
        </Button>
      </div>
    </>
  );
};

export default Counter;
