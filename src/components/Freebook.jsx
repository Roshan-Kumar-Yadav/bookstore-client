import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../src/list.json";
import Cards from './Cards';

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");

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
     We have divided our books collection into two parts "Free and Paid". These are the freely offered books for today which keeps on changing where everyone can read the books without paying anything from their pockets. For more books you can also check out the the Course. Let's enjoy learning and grow together !!!
     </p>
     </div>

    <div>
    <Slider {...settings}>
     {filterData.map((item)=>(
      <Cards item={ item } key={item.id}/>
     ))}
    </Slider>
    </div>
    </div>
   </>
  );
}

export default Freebook;