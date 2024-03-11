import React from 'react'
import Image from 'next/image'

 export default function Hero() {
  return (
    <>
    <section className="flex w-full justify-between items-center py-8">
    <div className="py-8 ">
      <h1 className="text-4xl font-semibold py-4 ">Everything is better <br/>in <span className="text-primary">SANMATHI</span></h1>
        <p calssName="my-6 text-gray-500">Sanmathi will make your day complete , a simple yet delicious joy in life</p>
          <div className="flex gap-4 py-8">
              <button className="bg-primary text-white px-8 py-2 rounded-full">Order Now</button>
              <button className="flex gap-4 py-2 text-gray-600 font-semibold">Learn More</button>
           </div>
    </div>
    
    <div className=" relative">
      <Image src={'/img1.jpg'} alt={'Sanmathi'} width={500} height={500} className='w-[20rem] h-[20rem] rounded-full'/>
    </div>
        
    </section>
     
    </>
  )
}


