"use client"
import React, { useState } from 'react'

const AddTaskForm = () => {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(title)
    };


    return (

        <div >


            <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row pl-5'>
                <div className='text-white grow'>
                    <div className=''>
                        <form className="max-w-md justify-start" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-[#BCCCD3B2] dark:text-white">Title</label>
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text" id="email" className="block w-full text-white border rounded-lg bg-transparent focus:bg-transparent focus:ring-0 focus:border-gray-300" placeholder="Title ..." required />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-[#BCCCD3B2] dark:text-white">Description (Optional)</label>
                                <input
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    type="text" id="description" className="block w-full text-white border rounded-lg bg-transparent focus:bg-transparent focus:ring-0 focus:border-gray-300" placeholder="Description .." />
                            </div>



                            <div className='flex flex-row-reverse gap-5'>
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