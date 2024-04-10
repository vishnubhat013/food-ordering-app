'use client'
import React from 'react'
import { getOrders,copyOrdersToPlacedOrders,deletecartOrders } from '../_action'
import {useState,useEffect}  from 'react';
//import { useSession } from 'next-auth/react';

export default function page() {
  const [Orders,setOrders] = useState([]);

  useEffect(()=>{
    getOrders().then((res)=>{
      setOrders(res);
    })
   },[])

   const handelplacedorders=()=>{
    try{
      copyOrdersToPlacedOrders();
      alert('Item order placed');
      deletecartOrders();
      alert('kart cleared');
    }catch(error){
      alert("error in placing order,")
      console.log(error);
    }

   };
   
   //const userId = useSession()?.data?.user?.email;

  return (
    <section className="mt-8">
    <div className="text-center text-primary text-4xl font-bold mt-16 mb-8">
     Cart
    </div>
    {Orders.length===0 }
    <div>
      <h1 className="text-center mt-16 text-black-300 font-bold text-2xl">
    Add items to the cart
    </h1>
    <button className="text-primary ">Buy
     Now</button>
    </div>
    <div className="items-center px-24" >
    <div>
      {Orders.length>0 && Orders.map(c=>(
  
      <div className='grid grid-cols-3 mt-4 px-8 bg-slate-100 '>
      <div className="w-24">
        {c.image && c.image.startsWith('data:image/') ? (
          <img src={c.image} className="max-h-auto max-h-24 block mx-auto" alt="menu" />
        ) : (
          <img src={`data:image/png;base64,₹0{c.image}`} className="max-h-auto max-h-24 block mx-auto" alt="menu" />
        )}
      </div>
      <div>
      <h4 className="font-semibold text-xl my-3">{c.Itemname}   ₹ {c.baseprice} </h4>
      </div>
      <div className="px-2">
      <button className="p-2">Remove</button>
      </div>
      </div>
  ))}
    </div>
    <button onClick={handelplacedorders} className="bg-primary text-white mt-8 ">Place Order</button>
    </div>
    </section>
  )
}


