import React from "react";
import { useState } from "react";
const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
  });
  const addItem = () => {
    console.log(formData);
    const newItems = [...items, formData];
    setItems(newItems);
    setFormData({ name: "", quantity: "" });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "auto",
        width: "content-fit",
      }}
    >
      <div>ShoppingList</div>

      <div>
        {items.length > 0 && (
          <table>
            <th>
              <td>Item Name</td>
              <td>Quantity</td>
            </th>
            {items.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </table>
        )}
      </div>

      <div>
        <input
          style={{
            marginRight: "10px",
            width: "200px",
            height: "20px",
            padding: "5px",
          }}
          type="text"
          placeholder="Item Name"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <input
          style={{
            marginRight: "10px",
            width: "200px",
            height: "20px",
            padding: "5px",
          }}
          type="number"
          placeholder="Quantity"
          onChange={(e) => {
            setFormData({ ...formData, quantity: e.target.value });
          }}
        />
        <button
          style={{
            width: "100px",
            height: "20px",
            padding: "5px",
          }}
          onClick={() => {
            addItem();
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;
