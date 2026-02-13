import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CompareChart({ data }) {
  // ensure data is valid array with expected keys
  const safeData = Array.isArray(data) ? data.map((d) => ({
    name: d.name ?? "Unknown",
    price: typeof d.price === "number" ? d.price : Number(d.price) || 0,
    rating: d.rating ?? 0,
  })) : [];

  if (safeData.length === 0) {
    return <div className="p-6">No data to display.</div>;
  }

  return (
    <div style={{ width: "100%", height: 360 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={safeData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" name="Price" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
