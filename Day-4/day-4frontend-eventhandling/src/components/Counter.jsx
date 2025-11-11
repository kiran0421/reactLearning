import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        style={{
          width: "100px",
          height: "20px",
          padding: "5px",
        }}
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </button>
    </div>
  );
};

export default Counter;
