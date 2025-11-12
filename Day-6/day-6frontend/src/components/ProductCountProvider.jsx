import React from "react";
import { useState, useContext } from "react";

const ProductCountContext = React.createContext();
const ProductCountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const updateCount = (value) => {
    setCount(() => value);
  };
  return (
    <ProductCountContext.Provider value={{ count, updateCount }}>
      {children}
    </ProductCountContext.Provider>
  );
};
const useCount = () => {
  const context = useContext(ProductCountContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a ProductCountProvider");
  }
  return context;
};
export { ProductCountProvider, useCount };
