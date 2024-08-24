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
         We have provided our official Twitter, Facebook, Email and support number by which you can contact us regarding your question so that we can revert back and help you accordingly and willingly.
         </p>

         <br />
         <div className="py-4">
          <h1 className="text-pink-800">Our Official Email</h1>
          <h1>bookstore.official@gmail.com
          <br />
            bookstore.support@gmail.com
          </h1>
          </div>
          
          <div className="py-4">
          <h1 className="text-pink-800">Our Official Contact No.</h1>
          <h1>93XXXXXX54
            <br />
            76XXXXXX83
          </h1>
         </div>

         <div className="flex justify-center">
         <a href='https://x.com/ImRaina?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>

         <a href='https://www.facebook.com/roshankr.yadav.100?mibextid=ZbWKwL'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
      </div>

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

export default Jobs;