import React from 'react';

function Cards({ item }) {
  console.log(item)
  
  return (
    <>
    <div className="mt-4 my-3 p-4">
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
    
   <figure>
    <img className="md:h-64 md:w-96 shadow-xl dark:bg-slate-900 dark:text-white"
      src={item.image}
      alt="Books" />
  </figure>

  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline px-2 py-3">INR {item.price}</div>
      <div className="badge badge-outline px-2 py-3 hover:bg-pink-500 hover:text-white cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards;