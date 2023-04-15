import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'

const ContactUs = () => {
  return (
    <>
        <div className="flex flex-col items-center gap-2 py-8 text-center bg-[#F9FAFB]">
            <span className="text-[#16b1b5] text-lg">Contact us</span>
            <h2 className="font-bold text-3xl text-black">Get in touch</h2>
            <p className="text-[#667085] text-xl">Submit Your Complaint Using The Form Below <br />We'd love to hear from you.</p>
            <form class="w-full max-w-lg mt-[80px]">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="grid-first-name">
                        First Name
                      </label>
                      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First name" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="grid-last-name">
                        Last Name
                      </label>
                      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last name" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="grid-email">
                        Email
                      </label>
                      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="you@company.com" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="grid-last-name">
                        Phone number
                      </label>
                      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone-number" type="text" placeholder={`KE 254 700-000-000`} />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="grid-last-name">
                        Feedback
                    </label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full px-3">
                        <label class="md:w-2/3 block text-gray-500 text-left">
                            <input class="mr-2 leading-tight" type="checkbox" />
                            <span class="text-sm">
                                You agree to our friendly <a href=' ' className='underline'>privacy policy</a>
                            </span>
                        </label>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full px-3">
                    <button class="bg-[#16b1b5] text-white hover:bg-white hover:text-[#16b1b5] font-semibold  py-2 px-4 rounded w-full">
                        Submit complaint
                    </button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default ContactUs
