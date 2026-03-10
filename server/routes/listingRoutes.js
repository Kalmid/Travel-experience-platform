const express = require("express");
const router = express.Router();

const {
  createListing, getAllListings, getListingById,
} = require("../controllers/listingController");

const protect = require("../middleware/authMiddleware");

// Create listing (protected)
router.post("/", protect, createListing);

// Get all listings
router.get("/", getAllListings);

// Get single listing by id
router.get("/:id", getListingById);

module.exports = router;