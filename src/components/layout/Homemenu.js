import React from 'react'
import Image from 'next/image'
import MenuItems from '../menu/MenuItems'
export default function Homemenu() {
  return (
    <section className="">
    {/*<div className="absoulte left-0 right-0 w-full justify-start">
    <div className="h-48  w-48 absolute -left-12 text-left">
      <Image src={'/img4.avif'} layout={'fill'} objectFit={'contain'} alt={'sanmathi'}/>
    </div>
    <div className="h-48 w-48 absolute -top-12 -right-12">
      <Image src={'/img5.webp'} layout={'fill'} objectFit={'contain'} alt={'sanmathi'}/>
    </div>
    </div> */}
    <div className="text-center">
      <h3 className="uppercase text-gray-500 dont-semibold leading-4">check out</h3>
      <h2 className="text-primary font-bold text-4xl italic mb-4">Menu</h2>
    </div>
    <div className="grid grid-cols-3 gap-4">
   <MenuItems/>
   <MenuItems/>
   <MenuItems/>
   <MenuItems/>
   <MenuItems/>
   <MenuItems/>
   </div>
   
    </section>
  )
}


