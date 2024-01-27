import React, { useState, createContext, useEffect } from "react";

export const CompareContext = createContext();

export const CompareListProvider = (props) => {
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    fetch("shop.json")
      .then((response) => response.json())
      .then((data) => setCompareList(data.slice(24, 26)));
  }, []);

  return (
    <CompareContext.Provider value={[compareList, setCompareList]}>
      {props.children}
    </CompareContext.Provider>
  );
};
