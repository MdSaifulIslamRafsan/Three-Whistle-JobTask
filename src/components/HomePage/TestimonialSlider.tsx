"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Testimonial {
  image: string;
  name: string;
  title: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/assets/Frame 427321624.png",
    name: "James F. Anderson",
    title: "Head of Idea",
    quote:
      "“It’s amazing How much easier it has been to meet new people and create instant non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors.”",
  },
  {
    image: "/assets/Frame 427321624.png",
    name: "Sarah Johnson",
    title: "Creative Director",
    quote:
      "“It’s amazing How much easier it has been to meet new people and create instant non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors.”",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-[1440px] w-[95%] md:w-11/12 lg:w-10/12 mx-auto relative">
      <div className="space-y-2 pt-20 pb-10">
        <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold">
          What
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          our clients say
        </h1>
      </div>
      {/* Swiper Component */}
     <Swiper
  navigation={{
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  }}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  modules={[Navigation, Pagination]}
  className="w-full relative" 
  loop
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide
      key={index}
      className="flex flex-col lg:flex-row gap-20 items-center"
    >
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <Image
          width={400}
          height={400}
          src={testimonial.image}
          alt={testimonial.name}
          className="mb-4 w-full h-full lg:h-[400px] lg:w-[400px]"
        />
        <div>
          <FaQuoteLeft className="text-6xl text-gray-400 mb-4" />
          <p className="mt-4 font-bold text-white">{testimonial.quote}</p>
          <div className="mt-4">
            <p className="font-bold text-white">{testimonial.name}</p>
            <p className="text-gray-400 text-sm">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mt-5 lg:mt-0">
        <div className="lg:absolute bottom-[90px] transform  right-14 z-40">
        <div className="swiper-button-prev-custom text-white bg-primary inline-block p-3 rounded-full shadow-lg cursor-pointer">
          <AiOutlineLeft className="text-2xl" />
        </div>
      </div>
      <div className="lg:absolute bottom-[90px]  transform right-0 z-40">
        <div className="swiper-button-next-custom text-white bg-primary inline-block p-3 rounded-full shadow-lg cursor-pointer">
          <AiOutlineRight className="text-2xl" />
        </div>
      </div>
        </div>
    </div>
  );
};

export default TestimonialSlider;
