"use client";

import { createContext, useState, useContext } from "react";

const context = createContext();

export const ContextProvider = ({ children }) => {
  const [ShowFilter, SetShowFilter] = useState(false);
  const [TotalProducts, SetTotalProducts] = useState(0);

  return (
    <context.Provider value={{ ShowFilter, SetShowFilter, SetTotalProducts, TotalProducts }}>
      {children}
    </context.Provider>
  );
};

export const UseContext = () => useContext(context);
