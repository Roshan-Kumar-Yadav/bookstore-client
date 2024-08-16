import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
    <div  className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-2xl font-bold md:text-4xl">
        About our <span className="text-pink-500">Book Store !!!</span>
      </h1>
      <p className="mt-12">
      First of all it is a declaration to inform you that this platform has been created by me (Roshan Kumar Yadav) for the certification part of my "Full Stack Development Bootcamp" at "Knowledgehut" organised by a very famous and established online learning platform named "UpGrad". This is my very first "Mern Stack" web application ever since I started my Full Stack Development carrier. The website has been created using MongoDB, ExpressJs, ReactJs and NodeJs. This website is the example of a book store. At first I created a very beautiful home page which appears to be very attractive and appealing. I have added all the basic and necessary options and details to the home page such as login, search bar, about, contact, and course etc. by adding it inside the "Navbar, Banner and Footer" . Explaining the website here may not be a prper way to show about section of my web application but I thought this has some relevance, So I stop here by including that I synced my website's frontend to its backend. At last I would like to mantion that as I have already informed you this is for only certification part of my Full Stack Development but it doesn't mean It will remain so. I will manage it and will try to make it as optimised as I can by the time and may be someday I will release it worldwide. Thank you for visiting !!!
      </p>

      <Link to="/">
      <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300">
        Go to Homepage
      </button>
      </Link>

      </div>
    </div>
    </>
  );
}
