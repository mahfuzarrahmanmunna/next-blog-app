import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Headers = () => {
    const buttonClasses =
        'group flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black rounded-lg shadow-[-7px_7px_0px_#000000] hover:shadow-[-4px_4px_0px_#000000] cursor-pointer transition-all duration-300';

    return (
        <header className="py-5 px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <Image
                    src={assets.logo}
                    alt="Company Logo"
                    width={180}
                    height={60}
                    priority
                    className="w-[130px] sm:w-auto"
                />
                <button
                    className={buttonClasses}
                    aria-label="Get started with our services"
                >
                    Get started
                    <Image
                        src={assets.arrow}
                        alt="Arrow icon"
                        width={20}
                        height={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </button>
            </div>

            <div className="text-center my-8">
                <h2 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h2>
                <p className="text-gray-600 max-w-[740px] mx-auto mt-10 text-xs sm:text-base">
                    Explore our curated collection of expert insights, thought-provoking articles, and the latest industry trends
                </p>
                <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
                    <input type="email" placeholder='Enter your email' className='pl-4 outline-none' name="" id="" />
                    <button type='submit' className='border-l cursor-pointer py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
                </form>
            </div>
        </header>
    );
};

export default Headers;
