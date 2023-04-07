import React from "react";
import { sponsors } from "../assets/data/company.js"; //
// import image from "../assets/sponsors/Frame 2 (1).png"

export default function Sponsors() {
  const images = sponsors.map((sponsor, index) => {
    return <img key={index} src={sponsor} alt={`Sponsor ${index + 1}`} />;
  });

  return (
    <div class="flex flex-col items-center gap-4 py-16 text-center bg-[#F9FAFB]">
      <div>Join 40+ companies already growing</div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 w-4/5">
        {images}
      </div>
    </div>
  );
}
