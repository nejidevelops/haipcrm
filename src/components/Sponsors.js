import React from "react";
// import { sponsors } from "../assets/data/company.js"; //
// import image from "../assets/sponsors/Frame 2 (1).png"

const images = [
  {
    id: 1,
    src: ("../assets/sponsors/acted.png"),
    alt: "Sponsor 1"
  },
  {
    id: 2,
    src: ("../assets/sponsors/action.png"),
    alt: "Sponsor 2"
  },
  {
    id: 3,
    src: ("../assets/sponsors/actionaid.png"),
    alt: "Sponsor 3"
  },
  {
    id: 4,
    src: ("../assets/sponsors/adeso.png"),
    alt: "Sponsor 4"
  },
  {
    id: 5,
    src: ("../assets/sponsors/aldef.png"),
    alt: "Sponsor 1"
  },
  {
    id: 6,
    src: ("../assets/sponsors/helpage.png"),
    alt: "Sponsor 2"
  },
  {
    id: 7,
    src: ("../assets/sponsors/lutheran.png"),
    alt: "Sponsor 3"
  },
  {
    id: 8,
    src: ("../assets/sponsors/pokatusa.png"),
    alt: "Sponsor 4"
  },
  {
    id: 9,
    src: ("../assets/sponsors/rights.png"),
    alt: "Sponsor 1"
  },
  {
    id: 10,
    src: ("../assets/sponsors/usaid.png"),
    alt: "Sponsor 2"
  },
  {
    id: 11,
    src: ("../assets/sponsors/wajir.png"),
    alt: "Sponsor 3"
  },
  {
    id: 12,
    src: ("../assets/sponsors/world.png"),
    alt: "Sponsor 4"
  }
];

export default function Sponsors() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center bg-[#F9FAFB]">
      <div>Join 40+ companies already growing</div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 w-4/5">
        {images.map((image) => {
          return(
            <img key={image.id} src={image.src} alt={image.alt} />
          )
        })}
      </div>
    </div>
  );
}
