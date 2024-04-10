import React from 'react'
import LINK from "next/link"

function page() {
  return (
    <section>
    <div>
    <h1 className="text-center font-semibold text-primary text-4xl mb-4 mt-24">
            Dashboard
    </h1>
    
    <div className="flex text-center gap-8 text-grey- font-semibold text-xl mt-4">
        <LINK href={'/categories'}>Categories</LINK>
        <LINK href={'/menu-items'}> Menu-Items</LINK>
        <LINK href={'/orders'}>Orders</LINK>
        </div>
        </div>
    </section>
  )
}

export default page
