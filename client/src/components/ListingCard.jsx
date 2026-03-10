import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition">

      <img
        src={listing.imageUrl}
        alt={listing.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-4">

        <h3 className="text-xl font-semibold">
          {listing.title}
        </h3>

        <p className="text-gray-500">
           {listing.location}
        </p>

        <p className="text-gray-600 mt-2">
          {listing.description.substring(0, 80)}...
        </p>
        
        <p className="text-green-600 font-bold mt-1">
          ${listing.price}
        </p>

        <p className="text-sm text-gray-400 mt-2">
          Posted {dayjs(listing.createdAt).fromNow()}
        </p>

        <Link
          to={`/listing/${listing._id}`}
          className="text-blue-600 font-semibold mt-3 inline-block"
        >
          View Details →
        </Link>

      </div>
    </div>
  );
};

export default ListingCard;