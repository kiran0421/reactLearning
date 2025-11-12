import React from "react";
import { useReducer, useContext } from "react";
import { useCount } from "./ProductCountProvider";
const CounterReducer = () => {
  const { updateCount } = useCount();
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        updateCount(state.count + 1);
        return { count: state.count + 1 };
      case "decrement":
        updateCount(state.count - 1);
        return { count: state.count - 1 };
      case "incrementByAmount":
        updateCount(Number(state.count + action.payload));
        return { count: Number(state.count + action.payload) };
      case "decrementByAmount":
        updateCount(Number(state.count - action.payload));
        return { count: state.count - action.payload };
      case "reset":
        updateCount(0);
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const actionButtons = (type) => {
    dispatch({
      type: type,
      payload: +document.getElementById("enterNumber").value,
    });
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
        <input type="number" id="enterNumber" />
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
