import React from "react";
import mail from "../assets/icons/f2.svg";
import strike from "../assets/icons/f1.svg";
import graph from "../assets/icons/f3.svg";

export default function Features() {
  return (
    <div className="flex flex-col items-center gap-2 py-8 text-center bg-[#F9FAFB]">
      <span className="text-[#16b1b5] text-xl">Features</span>
      <h2 className="font-bold text-lg text-black">REPORTS AND DOWNLOADS</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 w-4/5 text-[20px]">
        <div className="flex  flex-col items-center mt-5">
          <img className="pb-3" src={mail} alt="Mail" />
          <h1 className=" text-black">Budget and needs</h1>
          <p className="mt-1">Project Budget and Project Needs</p>
        </div>
        <div className="flex  flex-col items-center mt-5 ">
          <img className="pb-3" src={strike} alt="Strike" />
          <h1 className=" text-black">Concept and paper(s)</h1>
          <p className="mt-1">
            Uwajibikaji Pamoja Concept Paper NDMA County Stakeholders Mappping
          </p>
        </div>
        <div className="flex flex-col items-center mt-5">
          <img className="pb-3" src={graph} alt="Graph" />
          <h1 className=" text-black ">Reports and charts</h1>
          <p className="mt-1">View Real-time Reports and Charts</p>
        </div>
      </div>
    </div>
  );
}
