import React from 'react';

const ContactInfo = () => {
  return (
    <>      
    <div class="grid gap-4 bg-[#F9FAFB] px-5 py-[120px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 align-center justify-center">
        <div class="rounded-lg">
            <div class="flex flex-col items-center pb-10">
                <div class="w-12 h-12 rounded-full bg-[#CBEEEF] flex items-center justify-center">
                    <i class="fa fa-envelope w-8 h-8 rounded-full flex items-center justify-center text-[#16B1B5]" aria-hidden="true"></i>
                </div>
                <h5 class="mt-4 text-xl font-medium text-black">Email</h5>
                <p className='font-normal mb-4 text-[#667085]'>Our friendly team is here to help.</p>
                <span class="text-sm text-[#667085] font-bold">info@haipcrm.com</span>
            </div>
        </div>
        <div class="rounded-lg">
            <div class="flex flex-col items-center pb-10">
                <div class="w-12 h-12 rounded-full bg-[#CBEEEF] flex items-center justify-center">
                    <i class="fa fa-map-marker w-8 h-8 rounded-full flex items-center justify-center text-[#16B1B5]" aria-hidden="true"></i>
                </div>
                <h5 class="mt-4 text-xl font-medium text-black">SMS</h5>
                <p className='font-normal mb-4 text-[#667085]'>24/7 services</p>
                <span class="text-sm text-[#667085] font-bold">By Toll-Free SMS</span>
            </div>
        </div>
        <div class="rounded-lg">
            <div class="flex flex-col items-center pb-10">
                <div class="w-12 h-12 rounded-full bg-[#CBEEEF] flex items-center justify-center">
                    <i class="fa fa-phone w-8 h-8 rounded-full flex items-center justify-center text-[#16B1B5]" aria-hidden="true"></i>
                </div>
                <h5 class="mt-4 text-xl font-medium text-black">Phone</h5>
                <p className='font-normal mb-4 text-[#667085]'>Mon-Fri from 8am to 5pm.</p>
                <span class="text-sm text-[#667085] font-bold">Tel: +254 (0) 20 2730324/5, 2727763/5</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactInfo
