// components/OffroadRide/OffroadRide.tsx
import React from 'react';
import { Compass, Mountain, Sunrise, Users, Clock, Ban, Check } from 'lucide-react';
import type { AdventureHighlight, PackageDetail, InclusionExclusion } from './types';

const OffroadRide: React.FC = () => {
  const adventureHighlights: AdventureHighlight[] = [
    {
      title: "Extreme Terrain Challenge",
      items: [
        "Rock crawling & steep ascents",
        "River crossings (seasonal)",
        "Mud trails & forest tracks"
      ]
    },
    {
      title: "Scenic Adventures",
      items: [
        "Hidden waterfall access",
        "Exclusive viewpoint stops",
        "Adventure photography spots"
      ]
    }
  ];

  const packageDetails: PackageDetail[] = [
    {
      icon: <Clock className="w-5 h-5 mr-2" />,
      title: "Duration & Capacity",
      items: [
        "Maximum 6 adventurers per Jeep",
        "Full day of pure adventure"
      ],
      price: "₹5500 per expedition"
    },
    {
      icon: <Sunrise className="w-5 h-5 mr-2" />,
      title: "Special Features",
      items: [
        "Sunrise/Sunset expedition options",
        "Professional off-road guides",
        "Safety briefing & equipment"
      ]
    }
  ];

  const inclusionsExclusions: InclusionExclusion[] = [
    {
      icon: <Check className="w-5 h-5 mr-2" />,
      title: "Included",
      items: [
        "4x4 Jeep with experienced driver",
        "Adventure safety gear",
        "Energy snacks & water",
        "Photo opportunities"
      ],
      type: 'included'
    },
    {
      icon: <Ban className="w-5 h-5 mr-2" />,
      title: "Not Included",
      items: [
        "Personal insurance",
        "Pick-up/drop-off",
        "Personal expenses"
      ],
      type: 'excluded'
    }
  ];

  const renderHighlightItem = (text: string) => (
    <li key={text} className="flex items-center">
      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
      {text}
    </li>
  );

  const renderInclusionExclusionItem = (text: string, type: 'included' | 'excluded') => (
    <li key={text} className="flex items-center">
      <span className={`w-2 h-2 ${type === 'included' ? 'bg-green-500' : 'bg-red-500'} rounded-full mr-2`}></span>
      {text}
    </li>
  );

  return (
    <div className="bg-slate-100 p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="bg-green-700 text-white p-6 rounded-xl mb-8">
        <div className="flex items-center mb-4">
          <Compass className="w-8 h-8 mr-3" />
          <h1 className="text-4xl font-bold">Extreme Off-Road Adventure</h1>
        </div>
        <p className="text-lg">
          Conquer Munnar&apos;s untamed terrain in our custom-built 4x4 Jeeps! Experience an adrenaline-pumping journey through rugged landscapes, challenging trails, and breathtaking viewpoints that few get to witness. This isn&apos;t just a tour - it&apos;s an off-road expedition into the wild heart of Munnar.
        </p>
      </div>

      {/* Adventure Highlights */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
        <div className="flex items-center mb-4">
          <Mountain className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-green-600">Adventure Highlights</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {adventureHighlights.map((highlight) => (
            <div key={highlight.title} className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
              <ul className="space-y-2">
                {highlight.items.map(renderHighlightItem)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Package Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {packageDetails.map((detail) => (
          <div key={detail.title} className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
              {detail.icon}
              {detail.title}
            </h3>
            <ul className="space-y-3">
              {detail.items.map((item) => (
                <li key={item} className="flex items-center">
                  {item === detail.items[0] && detail.title === "Duration & Capacity" && (
                    <Users className="w-4 h-4 mr-2 text-green-600" />
                  )}
                  {item}
                </li>
              ))}
              {detail.price && (
                <li className="font-bold text-lg">{detail.price}</li>
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* Inclusions/Exclusions */}
      <div className="grid md:grid-cols-2 gap-6">
        {inclusionsExclusions.map((section) => (
          <div key={section.title} className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
              {section.icon}
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => renderInclusionExclusionItem(item, section.type))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact & Location */}
      <div className="bg-green-700 text-white p-6 rounded-xl mt-6">
        <h3 className="text-xl font-bold mb-4">Book Your Adventure</h3>
        <div className="space-y-2">
          <p>Location: Anachal, Munnar</p>
          <p>Contact: +91 6238343996</p>
          <p className="text-sm mt-4">
            *24-hour cancellation policy applies for full refund
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffroadRide;
