import React, { createContext, useContext } from "react";

const DBContext = createContext();

export function DBProvider({ children }) {
  // Ваш код для ініціалізації бази даних та надання функціональності

  return (
    <DBContext.Provider
      value={"/* Значення, яке ви хочете надати в контексті */"}
    >
      {children}
    </DBContext.Provider>
  );
}

export function useDB() {
  return useContext(DBContext);
}
