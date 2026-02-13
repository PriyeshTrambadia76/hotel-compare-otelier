import { useContext, useEffect, useState } from "react";
import { HotelContext } from "../context/HotelContext";
import { fetchHotels } from "../api/amadeus";
import HotelCard from "../components/HotelCard";

export default function Dashboard() {
  const { hotels, setHotels, addToCompare } = useContext(HotelContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchHotels(page).then((res) =>
      setHotels((prev) => [...prev, ...res.data])
    );
  }, [page]);

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {hotels.map((h) => (
        <HotelCard key={h.id} hotel={h} onCompare={addToCompare} />
      ))}
      <div className="col-span-full flex justify-center mt-6">
  <button
    onClick={() => setPage(page + 1)}
    className="bg-black text-white px-6 py-2 rounded"
  >
    Load More
  </button>
</div>


    </div>
  );
}
