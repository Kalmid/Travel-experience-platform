import React, { useEffect, useState } from "react";
import API from "../services/api";
import ListingCard from "../components/ListingCard";

const Feed = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await API.get("/listings");
        setListings(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchListings();
  }, []);

  return (
    <div className="p-6">

      <h2 className="text-3xl font-bold mb-6">
        Explore Travel Experiences
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>

    </div>
  );
};

export default Feed;