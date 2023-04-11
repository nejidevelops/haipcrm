import React from 'react'

const Footer = () => {
  return (
    <>
        <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <div>
                    <p className='font-bold text-black'>Have a complaint code?</p>
                    <span class="text-sm text-black sm:text-center">Use it view your feedback progress.</span>
                </div>
            <div class="relative">
            <div class="absolute top-4 left-3"><i class="fa-solid fa-question"></i></div><input type="text" class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Enter your complaint code    " />
            <div class="absolute top-2 right-2"> <button class="h-10 w-20 text-white rounded-lg bg-[#16b1b5] hover:bg-white hover:text-[#16b1b5]">Track</button> </div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
