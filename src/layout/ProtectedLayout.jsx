import Navbar from "../components/Navbar";

export default function ProtectedLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
}
