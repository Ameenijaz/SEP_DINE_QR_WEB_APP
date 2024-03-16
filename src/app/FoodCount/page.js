import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
// import "./layout.css";

function Foodcount({ itemCount }) {
  const [count, setCount] = useState(1);

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  }
  useEffect(() => {
    if (count > 0) {
      itemCount(count);
    }
  }, [count]);
  return (
    <div className="Foodcount-main">
      <button onClick={decrement}>
        <Icon icon="icons8:minus" />
      </button>
      <h1>{count}</h1>
      <button onClick={increment}>
        <Icon icon="icons8:plus" />
      </button>
    </div>
  );
}
export default Foodcount;
