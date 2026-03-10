import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const CreateListing = () => {
  const [form, setForm] = useState({ title: "", location: "", imageUrl: "", description: "", price: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/listings", { ...form, price: form.price ? Number(form.price) : undefined });
      alert("Listing created successfully");
      navigate("/feed");
    } catch (err) {
      alert(err.response?.data?.message || "Error creating listing");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">Create Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
};

export default CreateListing;