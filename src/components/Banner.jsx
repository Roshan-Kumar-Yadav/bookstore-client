import React from 'react';
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
       <div className="space-y-12">
       <h1 className="text-4xl font-bold">
            Hello! Welcome here to learn something <span className="text-pink-500">new everyday!!!</span>
            </h1>

            <p className="text-xl">
               Learning by books is transforming into an old fashion. Curiosity brings you here to know more about your interests, nature, science and technology and what not? Let's learn and grow together by bringing back book reading trends.
            </p>
       </div>
        </div>
        <div className="order-1 w-full md:w-1/2">
        <img src={banner} className="w-92 h-92" alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner;