import React from 'react'
import county from '../assets/images/county.png';
import marsabit from '../assets/images/marsabit.png';
import turkana from '../assets/images/turkana.png';
import uasin from '../assets/images/uasin-gishu.png';
import wajir from '../assets/images/wajir.png';

const Integrations = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-8 text-center bg-[#F9FAFB]">
      <span className="text-[#16b1b5] text-lg">Integrations</span>
      <h2 className="font-bold text-3xl text-black">Get more value from us</h2>
      <p className="text-[#667085] text-xl">Counties covered</p>
      <div class="grid my-12 gap-8 px-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <img src={county} alt=' ' />
        <img src={uasin} alt=' ' />
        <img src={wajir} alt=' ' />
        <img src={turkana} alt=' ' />
        <img src={marsabit} alt=' ' />
      </div>
      <button class="bg-[#0DD1D6] hover:bg-white text-white font-normal hover:text-[#0DD1D6] py-3 px-5 rounded">
        Get Involved
      </button>
    </div>
  )
}

export default Integrations
