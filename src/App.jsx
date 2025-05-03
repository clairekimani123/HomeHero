import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import BookService from "./pages/BookService";
import Payment from "./pages/Payment";
import NavBar from "./components/NavBar";

import { onAuthUserStateChange } from "./firebase";

// PublicRoute Component
function PublicRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthUserStateChange((user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return isAuthenticated ? <Navigate to="/home" /> : children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/profiles" element={<PrivateRoute><Profiles /></PrivateRoute>} />
            <Route path="/book" element={<PrivateRoute><BookService /></PrivateRoute>} />
            <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
