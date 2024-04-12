'use client'
import React from 'react'
import { getOrders,copyOrdersToPlacedOrders,deletecartOrders, removeItemFromCart } from '../_action'
import {useState,useEffect}  from 'react';
import { Orders } from '@prisma/client';
//import { useSession } from 'next-auth/react';

export default function page() {
  const [Orders,setOrders] = useState<Orders[]>([]);

  useEffect(()=>{
    getOrders().then((res)=>{
      setOrders(res);
    })
   },[])

   const handelplacedorders=async ()=>{
    try{
      await copyOrdersToPlacedOrders();
      alert('Item order placed');
      await deletecartOrders();
      await getOrders().then((res)=>{
        setOrders(res);
      })
      alert('Cart cleared');
    }catch(error){
      alert("error in placing order")
      console.log(error);
    }

   };
   
   //const userId = useSession()?.data?.user?.email;

  return (
    <section className="mt-8">
    <div className="text-center text-primary text-4xl font-bold mt-16 mb-8">
     Cart
    </div>
    {Orders.length === 0 && (

    <div className='w-full justify-center items-center flex'>
    <button className="text-primary w-fit ">Buy
     Now</button>
    </div>
    )}
    <div className="items-center px-24" >
    <div>
      {Orders.length>0 && Orders.map((c :Orders)=>(
        
      <div className='grid grid-cols-3 mt-4 px-8 bg-slate-100 py-4 rounded-lg items-center'>
      <div className="w-24">
          <img src={c.image } className="max-h-auto max-h-24 block mx-auto" alt="menu" />
      </div>
      <div>
      <h4 className="font-semibold text-xl my-3">{c.Itemname}   ₹ {c.baseprice} </h4>
      </div>
      <div className="px-2">
      <button className="p-2" onClick={async () => {
        try{
          await removeItemFromCart(c.id);
          await getOrders().then((res)=>{
            setOrders(res);
          })
        alert('Item removed from cart');
        }catch(e){
          alert('Error in removing item');
          console.log(e);
        }
      }}>Remove</button>
      </div>
      </div>
  ))}
    </div>
   {
          Orders.length > 0 && (
    <button onClick={handelplacedorders} className="bg-primary text-white mt-8 ">Place Order</button>
          )
        }
      </div>
    </section>
  )
}


