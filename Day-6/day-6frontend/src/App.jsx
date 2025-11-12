import "./App.css";
import { useContext, useReducer } from "react";
import CounterReducer from "./components/CounterReducer";
import { useCount } from "./components/ProductCountProvider";
function App() {
  const { count } = useCount();
  const initalState = { userName: "Guest", isLoggedIn: false };
  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return { userName: action.payload, isLoggedIn: true };
      case "logout":
        return { userName: "Guest", isLoggedIn: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <div className="App">
        <h1>Welcome, {state.userName}!</h1>
        {state.isLoggedIn ? (
          <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
        ) : (
          <button
            onClick={() => dispatch({ type: "login", payload: "JohnDoe" })}
          >
            Login
          </button>
        )}
      </div>
      <CounterReducer />

      <h2>Global Product Count: {count}</h2>
    </>
  );
}

export default App;
