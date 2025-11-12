import React from "react";
import { useReducer } from "react";
const CounterReducer = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "incrementByAmount":
        return { count: Number(state.count + action.payload) };
      case "decrementByAmount":
        return { count: state.count - action.payload };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };
  const [formData, setFormData] = React.useState({ number: 0 });
  const [state, dispatch] = useReducer(reducer, initialState);
  const actionButtons = (type) => {
    dispatch({ type: type, payload: formData.number });
    //clear input field after action
    document.getElementById("enterNumber").value = "";
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <input
          type="number"
          id="enterNumber"
          onChange={(e) => {
            setFormData({ ...formData, number: Number(e.target.value) });
          }}
        />
        <button onClick={() => actionButtons("incrementByAmount")}>
          Increment By Amount
        </button>
        <button onClick={() => actionButtons("decrementByAmount")}>
          Decrement By Amount
        </button>
      </div>
    </div>
  );
};

export default CounterReducer;
