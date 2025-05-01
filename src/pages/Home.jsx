
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logOut } from "../firebase";


function Home() {
  const navigate = useNavigate();

  useEffect(() => {

  }, []);

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to HomeHero!</h1>
        <p className="mb-6">You’re all set to start booking services.</p>
        <button
          onClick={handleLogout}
          className="px-6 py-2 text-white bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;