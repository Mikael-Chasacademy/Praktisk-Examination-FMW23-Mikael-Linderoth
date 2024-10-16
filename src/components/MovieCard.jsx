import React from "react";

export function MovieCard({ title, posterPath }) {
  return (
    <div className="border rounded-lg shadow-md bg-white p-4 transform hover:scale-105 transition-transform duration-200">
      <img
        className="w-full h-60 object-cover rounded"
        src={
          posterPath
            ? `https://image.tmdb.org/t/p/w500${posterPath}`
            : "./No-Image-Placeholder.png"
        }
        alt={`${title} Poster`}
      />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    </div>
  );
}
