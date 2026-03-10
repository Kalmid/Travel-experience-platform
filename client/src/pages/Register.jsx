import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
      <p className="mt-4 text-gray-600">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
};

export default Register;