import { useContext } from "react";
import { HotelContext } from "../context/HotelContext";
import CompareChart from "../components/CompareChart";
import { useNavigate } from "react-router-dom";

export default function Compare() {
  const { compare, clearCompare } = useContext(HotelContext);
  const navigate = useNavigate();

  if (!compare || compare.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="mb-4">No hotels selected for comparison.</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Hotel Comparison</h1>
        <div>
          <button
            onClick={() => clearCompare()}
            className="mr-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Clear
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            Back
          </button>
        </div>
      </div>

      <CompareChart data={compare} />
    </div>
  );
}
