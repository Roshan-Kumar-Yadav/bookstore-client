import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from './Cards';

function Freebook() {

  const [book, setBook] = useState([])
  useEffect(() =>{
    const getBook = async() =>{
        try {
         const res = await axios.get(`https://bookstore-api-vercel.vercel.app/book`);
         
        const data = res.data.filter((data) => data.category === "Free");
         console.log(data);
         setBook(data);
        } catch (error) {
          console.log(error)
        }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
     <div>
     <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
     <p>
     We have divided our books collection into two parts "Free and User". These are the freely offered books for today which keeps on changing where everyone can read the books without becoming a User. For more exclusive and trending content you can check out the Course section by Signing Up or Loggin In. Let's enjoy learning and grow together !!!
     </p>
     </div>

    <div>
    <Slider {...settings}>
     {book.map((item)=>(
      <Cards item={ item } key={item.id}/>
     ))}
    </Slider>
    </div>
    </div>
   </>
  );
}

export default Freebook;