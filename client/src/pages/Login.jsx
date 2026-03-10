import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/feed");
    } catch (err) {
      alert(err.response?.data?.message || "Error logging in");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
      <p className="mt-4 text-gray-600">
        Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
      </p>
    </div>
  );
};

export default Login;