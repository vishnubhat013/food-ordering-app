'use client'
import React from 'react'
import {useEffect, useState } from 'react';
import {getMenuitem,addToCart } from '..//..//../src//app//_action';

export default function MenuItem() {

  const [menuItems, setMenuItems] = useState([]);

       useEffect(()=>{
        getMenuitem().then((res)=>{
          setMenuItems(res);
        })
       },[])

       const handleAddToCart =(c)=>{
        try{
        addToCart(c.image, c.Itemname, c.description, c.baseprice);
        alert('Item added to cart successfully!');
        }catch(error) {
          console.error('Error adding item to cart:', error);
          alert('Error adding item to cart.');
        }
      };

  return (
    
/*/
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white  hover:shadow-md hover:shadow-black/25 transition-all">
    <div className="text-center ">
    <img src="pizza.jpg" className="max-h-auto max-h-24 block mx-auto " alt="menu"></img> 
    </div>
    <h4 className="font-semibold text-xl my-3">pizzas</h4>
    <p className="text-gray-500 text-sm my-2">Extra slice of cheese and toppins</p>
    <button className="bg-primary text-white px-8 py-2 rounded-full">Add to cart</button>
    </div>
/*/
<div className="grid grid-cols-3 gap-4">
{menuItems.length > 0 && menuItems.map(c => (
  
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        {c.image && c.image.startsWith('data:image/') ? (
          <img src={c.image} className="max-h-auto max-h-24 block mx-auto" alt="menu" />
        ) : (
          <img src={`data:image/png;base64,${c.image}`} className="max-h-auto max-h-24 block mx-auto" alt="menu" />
        )}
      </div>
      <h4 className="font-semibold text-xl my-3">{c.Itemname}</h4>
      <p className="text-green-600 text-sm my-2">{c.description}</p>
      <p className=" text-black text-sm my-2"> $ {c.baseprice}</p>
      <button onClick={() => handleAddToCart(c)} className="bg-primary text-white px-8 py-2 rounded-full">Add to cart</button>
    </div>

))}
</div>
  );
}