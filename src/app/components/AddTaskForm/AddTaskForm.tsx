"use client"
import React, { useState } from 'react'

const AddTaskForm = () => {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to API)
        console.log({ title, description });
    };


    return (

        <div>


            <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row pl-5'>
                <div className='text-white grow'>
                    <div className=''>
                        <form className="max-w-md justify-start">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-[#BCCCD3B2] dark:text-white">Your email</label>
                                <input type="email" id="email" className="block w-full text-white border rounded-lg bg-transparent focus:bg-transparent focus:ring-0 focus:border-gray-300" placeholder="name@flowbite.com" required />
                            </div>



                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-[#BCCCD3B2] dark:text-white">Scope (Optional)</label>
                                <input type="text" id="scope" className="block w-full text-white border rounded-lg bg-transparent focus:bg-transparent focus:ring-0 focus:border-gray-300" placeholder="Scope" required />
                            </div>

                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-[#BCCCD3B2] dark:text-white">Description (Optional)</label>
                                <input type="text" id="description" className="block w-full text-white border rounded-lg bg-transparent focus:bg-transparent focus:ring-0 focus:border-gray-300" placeholder="Description" required />
                            </div>

                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-[#BCCCD3B2] dark:text-white">Type (Optional)</label>

                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" px-5 py-2.5 text-center inline-flex items-center justify-between block w-full text-[#BCCCD3B2] border rounded-lg bg-transparent border-[0.5px] border-gray-300 focus:bg-transparent focus:ring-0 focus:border-gray-300" type="button">Project Type <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                                </button>
                                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-[#BCCCD3B2] dark:text-white">Location</label>

                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" px-5 py-2.5 text-center inline-flex justify-between  items-center block w-full text-[#BCCCD3B2] border rounded-lg bg-transparent border-[0.5px] border-gray-300 focus:bg-transparent focus:ring-0 focus:border-gray-300" type="button">Project Type <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                                </button>
                                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className='flex flex-row-reverse gap-5'>
                                <button type="submit" className="text-white bg-transparent border rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-transparent focus:bg-transparent focus:ring-5 focus:border-gray-300">Cancel</button>
                                <button type="submit" className="text-black bg-white hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default AddTaskForm