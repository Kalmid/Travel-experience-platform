import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await API.get(`/listings/${id}`);
        setListing(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchListing();
  }, [id]);

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 border p-6 rounded">
      <img src={listing.imageUrl} alt={listing.title} className="w-full h-64 object-cover rounded" />
      <h2 className="text-2xl font-bold mt-4">{listing.title}</h2>
      <p className="text-gray-500">{listing.location}</p>
      <p className="mt-2">{listing.description}</p>
      {listing.price && <p className="font-semibold mt-2">Price: ${listing.price}</p>}
      <p className="text-gray-700 mt-1">By {listing.user.name}</p>
      <p className="text-gray-400 text-sm">{dayjs(listing.createdAt).fromNow()}</p>
    </div>
  );
};

export default ListingDetail;