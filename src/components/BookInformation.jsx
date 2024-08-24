import React from 'react';
import { Link } from 'react-router-dom';

function BookInformation() {
  return (
    <>
    <div  className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-2xl font-bold md:text-4xl">
        About our <span className="text-pink-500">Book Store !!!</span>
      </h1>
      <p className="mt-12">
      As you can see, These books are premium and are the best sellers in their origin as well as all over the world. So to protect their copyright I didn't upload its pdf or didn't give any reference link to these books on my "Web Application". This could have led me to the indulgence of the breaching copyright act. That's why I created an extra page only to show that the "Read Now" option works and it doesn't affect the beauty of the website. All the data featured on the cards is coming from the backend and I have stored it locally on my windows machine in MongoDB. I could have given the reference link to the pages or PDF as I have already connected the MongoDB. But I have already informed you that this could lead anyone to the indulgence into breaching copyright act. Thank you for visiting !!!
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

export default BookInformation;