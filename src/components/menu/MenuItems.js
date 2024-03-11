import React from 'react'

export default function MenuItem() {
  return (
    

    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white  hover:shadow-md hover:shadow-black/25 transition-all">
    <div className="text-center ">
    <img src="pizza.jpg" className="max-h-auto max-h-24 block mx-auto " alt="menu"></img> 
    </div>
    <h4 className="font-semibold text-xl my-3">pizzas</h4>
    <p className="text-gray-500 text-sm my-2">Extra slice of cheese and toppins</p>
    <button className="bg-primary text-white px-8 py-2 rounded-full">Add to cart</button>
    </div>

    
  )
}


