import { Link } from "react-router-dom";
import { supabase } from "../auth/supabase";

export default function Navbar() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between">
      <h1 className="font-bold">Hotel Compare</h1>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/compare">Compare</Link>
        <button onClick={handleLogout} className="ml-4 text-red-400">
          Logout
        </button>
      </div>
    </nav>
  );
}
