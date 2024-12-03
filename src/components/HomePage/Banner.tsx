"use client"
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from 'react';
const Banner = () => {
    const [text, setText] = useState('Clicks'); 

    useEffect(() => {
        const interval = setInterval(() => {
            setText((prev) => {
              if (prev === 'Clicks') return 'UI/UX';
              if (prev === 'UI/UX') return 'Video';
              return 'Clicks';
            });
          }, 2000); 
  
      return () => clearInterval(interval);
    }, []);
    return (
        <section className="max-w-[1440px] w-[95%] md:w-11/12 lg:w-10/12 py-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-between md:py-32 mx-auto">
            <div className="space-y-5 max-w-md">
                <p className="text-sm">1000+ PROJECT COMPLETED </p>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold overflow-hidden">
      Increase{' '}
      <span className="relative inline-block text-primary animate-bottom-to-up">
        {text}
      </span>{' '}
      with engaging Video Sales Letter
    </h1>
                 <button className="btn sm:px-10 bg-primary hover:bg-primary text-white border-none rounded-full">Get in touch
                 <FaArrowRight />
                </button>
            </div>
            <div className="max-w-xs relative space-y-5">
                <p><span className="text-primary">Third Whistle</span> crafts compelling Video Sales Letters that help startups and Fortune 500 companies connect, engage, and convert audiences with ease.</p>
                <div className="flex gap-5">
                     <div>
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                <Image width={50} height={50} src="/assets/Frame 11.png" alt="user"/>
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                <Image width={50} height={50} src="/assets/Frame 15.png" alt="user"/>
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                <Image width={50} height={50} src="/assets/Frame 12.png" alt="user"/>
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                <Image width={50} height={50} src="/assets/Frame 14.png" alt="user"/>
                                </div>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-primary  text-white text-3xl w-12">
                                <span>+</span>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="sm:text-lg font-bold">
                    <FaStar className="text-primary inline-block" /> (4.1 K) 
                    <br/>
                    715+ Clients
                </div>
                </div>
                <Image className="absolute w-full  r-0 b-0" width={350} height={150} src="/assets/Frame 427321640.png" alt="user"/>
            </div>
        </section>
    );
};

export default Banner;