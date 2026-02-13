import { useContext } from "react";
import { HotelContext } from "../context/HotelContext";
import { useNavigate } from "react-router-dom";

export default function HotelCard({ hotel }) {
  const { addToCompare } = useContext(HotelContext);
  const navigate = useNavigate();

  const handleCompare = () => {
    addToCompare(hotel);
    // navigate to compare page so user sees the chart
    navigate("/compare");
  };

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{hotel.name}</h3>
      <p>₹{hotel.price}</p>
      <p>⭐ {hotel.rating}</p>
      <button
        onClick={handleCompare}
        className="bg-indigo-600 text-white px-3 py-1 mt-2 rounded"
      >
        Compare
      </button>
    </div>
  );
}
