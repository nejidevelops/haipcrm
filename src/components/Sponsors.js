import React from "react";
import  acted  from "../assets/sponsors/acted.png";
import action from "../assets/sponsors/action.png"
import actionaid from "../assets/sponsors/actionaid.png"
import adeso from "../assets/sponsors/adeso.png"
import aldef from "../assets/sponsors/aldef.png"
import helpage from "../assets/sponsors/helpage.png"
import lutheran from "../assets/sponsors/lutheran.png"
import pokatusa from "../assets/sponsors/pokatusa.png"
import rights from "../assets/sponsors/rights.png"
import usaid from "../assets/sponsors/usaid.png"
import wajir from "../assets/sponsors/wajir.png"
import world from "../assets/sponsors/world.png"

 

export default function Sponsors() {
  return (
    <div class="flex flex-col items-center gap-4 py-16 text-center bg-[#F9FAFB]">
      <div className="text-xl py-5">Join 40+ companies already growing</div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 w-4/5">
        <img src={acted} alt={acted}  />
        <img src={action} alt={action} />
        <img src={actionaid} alt={actionaid} />
        <img src={adeso} alt={adeso} />
        <img src={aldef} alt={aldef}/>
        <img src={helpage} alt={helpage}/>
        <img src={lutheran}alt={lutheran} />
        <img src={pokatusa} alt={pokatusa}/>
        <img src={rights} alt={rights}/>
        <img src={usaid} alt={usaid}/>
        <img src={wajir} alt={wajir}/>
        <img src={world} alt={world}/>
      </div>
    </div>
  );
}
