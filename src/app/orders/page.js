'use client'
import React from 'react'
import {placedOrderDisplay} from '../_action'
import {useEffect,useState} from 'react';


export default function page() {

    const [placedOrderitem,setplacedOrderitem] = useState([]);

    useEffect(()=>{
      placedOrderDisplay().then((res)=>{
        setplacedOrderitem(res);
      })
     },[])

  return (
    <section>
    <div className="mt-16">
    <h1 className="text-center text-primary font-bold text-2xl">Orders</h1>
    <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
      {placedOrderitem.length>0 && placedOrderitem.map(c=>(
  
  <div className='flex flex-col w-fit  mt-4 p-4 rounded-xl text-center bg-slate-100 '>
  <div>
    {c.userId}
  </div>
  <div>
  <h4 className="font-semibold text-xl my-3">{c.Itemname} </h4>
  </div>
  </div>
))}
    </div>
    </div>
    </section>

  )
}
