const Listing = require("../models/listingModel");
const User = require("../models/userModel");


// Create a listing
const createListing = async (req, res) => {
  try {
    const { title, location, imageUrl, description, price } = req.body;

    if (!title || !location || !imageUrl || !description) {
      return res.status(400).json({ message: "All the fields are required" });
    }

    const listing = await Listing.create({
      title,
      location,
      imageUrl,
      description,
      price,
      user: req.user, 
    });

    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all listings
const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find()
      .populate("user", "name") // show creator name
      .sort({ createdAt: -1 }); // newest first

    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single listing
const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate("user", "name");

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createListing, getAllListings, getListingById,
};
