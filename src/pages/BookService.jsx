import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookService() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    serviceType: "House Manager",
    date: "",
    time: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://home-hero-server.vercel.app/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      
      console.log("Response Status:", response.status);
      console.log("Response OK:", response.ok);
  
      const data = await response.json();
     
      console.log("Response Data:", data);
  
      if (!response.ok) {
        throw new Error(data.message || "Network response was not ok");
      }
  
      
      if (data.success || response.status === 200 || response.status === 201) {
        alert("Booking submitted successfully!");
        setFormData({
          name: "",
          serviceType: "House Manager",
          date: "",
          time: "",
          notes: "",
        });
        // Optionally navigate or trigger a refresh of bookings
        // navigate("/bookings"); // Uncomment if you want to redirect
      } else {
        alert(data.message || "There was an issue with the booking. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert(`An error occurred while submitting your booking: ${error.message}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book a Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
                 className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Service Type</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange}
                  className="w-full border rounded px-3 py-2">
            <option>House Manager</option>
            <option>Babysitter</option>
            <option>Urgent Assistant</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required
                 className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required
                 className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange}
                    className="w-full border rounded px-3 py-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Book Now
        </button>
      </form>
    </div>
  );
}