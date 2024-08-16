import React from 'react'
import { Link } from 'react-router-dom';

function Jobs() {
  return (
    <>
    <div  className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-2xl font-bold md:text-4xl">
        We are <span className="text-pink-500">Hiring !!!</span>
      </h1>
      <p className="mt-12">
         We are hiring the "full Stack Developers" to maintain our "Book Store" web application as well as good "Content Writers". We have two vacancies for full stack developers. Before applying for the full stack developer's role one must have the good knowledge of HTML5, CSS3, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB, Linux, Git and Github. We have five vacant posts for content writers. Before applying for content writer's role one must have the Masters Degree in any field and must be fluent in Hindi as well as in English. Candidates who have persued their Degree are considered. Freshers and experienced both are eligble for both the profile. If you consider yourself suitable for any post let us know by contacting us and if you consider any of your known suitable for the given any post share it with them. Competition is rising rapidly, So be quick !!! Once in a lifetime opportunity awaits you. Thank you for visiting !!!
      </p>

      <Link to="/">
      <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300">
        Go to Homepage
      </button>
      </Link>

      <Link to="/contact">
      <button className="mt-6 ml-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300">
        Contact Us
      </button>
      </Link>

      </div>
    </div>
    </>
  );
}

export default Jobs;