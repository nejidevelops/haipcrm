import React from "react";
import  one  from "../assets/sponsors/Frame 2.png";
import two from "../assets/sponsors/Frame 2 (1).png"
import three from "../assets/sponsors/Frame 2 (2).png"
import four from "../assets/sponsors/Frame 3.png"
import five from "../assets/sponsors/Frame 3 (1).png"
import six from "../assets/sponsors/Frame 3 (2).png"
import seven from "../assets/sponsors/Frame 4.png"
import eight from "../assets/sponsors/Frame 4 (1).png"
import nine from "../assets/sponsors/Frame 4 (2).png"
import ten from "../assets/sponsors/Frame 5.png"
import eleven from "../assets/sponsors/Frame 5 (1).png"
import twelve from "../assets/sponsors/Frame 5 (2).png"

 

export default function Sponsors() {
  return (
    <div class="flex flex-col items-center gap-4 py-16 text-center bg-[#F9FAFB]">
      <div className="text-xl py-5">Join 40+ companies already growing</div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 w-4/5">
        <img src={one} alt={one}  />
        <img src={two} alt={two} />
        <img src={three} alt={three} />
        <img src={four} alt={four} />
        <img src={five} alt={five}/>
        <img src={six} alt={six}/>
        <img src={seven}alt={seven} />
        <img src={eight} alt={eight}/>
        <img src={nine} alt={nine}/>
        <img src={ten} alt={ten}/>
        <img src={eleven} alt={eleven}/>
        <img src={twelve} alt={twelve}/>
      </div>
    </div>
  );
}
