/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const HotelContext = createContext(null);

export const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [compare, setCompare] = useState(
    JSON.parse(localStorage.getItem("compare")) || []
  );

  // Prevent duplicates when adding
  const addToCompare = (hotel) => {
    if (!hotel || !hotel.id) return;
    const exists = compare.some((h) => h.id === hotel.id);
    if (exists) return;
    const updated = [...compare, hotel];
    setCompare(updated);
    try {
      localStorage.setItem("compare", JSON.stringify(updated));
    } catch (e) {
      // ignore storage errors
      console.error("failed to persist compare", e);
    }
  };

  const clearCompare = () => {
    setCompare([]);
    localStorage.removeItem("compare");
  };

  return (
    <HotelContext.Provider
      value={{ hotels, setHotels, compare, addToCompare, clearCompare }}
    >
      {children}
    </HotelContext.Provider>
  );
};
