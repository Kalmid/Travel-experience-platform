import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import CreateListing from "./pages/CreateListing";
import ListingDetail from "./pages/ListingDetail";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create" element={<CreateListing />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
