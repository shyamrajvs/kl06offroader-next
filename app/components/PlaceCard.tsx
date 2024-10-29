// components/PlaceCard.tsx
import React, { FC } from 'react';

// Define types
type Video = string;

interface Place {
  name: string;
  description: string;
  video: Video; // Changed from an array to a single video string
}

interface PlaceCardProps extends Place {}

// PlaceCard Component
const PlaceCard: FC<PlaceCardProps> = ({ name, description, video }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-w-16 aspect-h-10 rounded-md overflow-hidden mb-4">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 mb-2">
          {name}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
