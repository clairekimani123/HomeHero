import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { googleSignIn } from "../firebase";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.error(error);
      setError("Google login failed: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {loading ? "Logging In..." : "Sign in with Google"}
        </button>
        <p className="mt-4 text-center text-sm text-gray-500">
          Or <Link to="/" className="text-blue-600">go back home</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;