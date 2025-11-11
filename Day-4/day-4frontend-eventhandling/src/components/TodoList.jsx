import { useState } from "react";
const TodoList = () => {
  const [list, setList] = useState([]);
  const updateList = () => {
    const input = document.getElementById("todo-input");
    const value = input.value;
    setList([...list, value]);
    input.value = "";
  };
  return (
    <div style={{ display: "flex", height: "auto", flexDirection: "column" }}>
      <div>TodoList</div>
      {list.map((item) => (
        <div key={item}>{item}</div>
      ))}
      <div>
        <input
          type="text"
          style={{
            marginRight: "10px",
            width: "200px",
            height: "20px",
            padding: "5px",
          }}
          id="todo-input"
        />
        <button
          style={{
            width: "100px",
            height: "20px",
            padding: "5px",
          }}
          onClick={() => updateList()}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoList;
