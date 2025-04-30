import { useState } from "react";
import React from "react";

export default function BookService() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/bookings", formData)
      .then(res => {
        alert("Booking submitted successfully!");
        setFormData({ ...formData, name: "", notes: "" });
      })
      .catch(err => console.error(err));
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