'use client';
import React from 'react'
import {useSession} from "next-auth/react"
import { redirect } from 'next/navigation';
import Image from 'next/image';
import {useState} from "react";
import LINK from "next/link";



 export default function page() {
    const session =useSession();
    const[userName,setUserName]=useState(session?.data?.user?.name || '')
    const[saved,setSaved]=useState(false);
    const[isSaving,setisSaving]=useState(false);


    const {status}=session;
   //console.log(session);
    const user = useSession()?.data?.user;
   //const userEmail= user?.email;
   const userImage= user?.image;
     

     async function handleProfileUpdate(ev){
      ev.preventDefault();
      setSaved(false);
      setisSaving(true);
       const response = await fetch('/api/profile',{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name:userName}),
      });
      setisSaving(false);
      if(response.ok){
           setSaved(true);
      }
    }



    if(status === 'loading'){
        return 'Loading...'
    }
    if(status === 'unauthenticated'){
        return redirect('/register')
    }
    
  return (
    <section className="mt-8">


    <div className="flex gap-2 tabs">
      <LINK href={'/profile'}></LINK>
      
      <>
        <LINK href={'/categories'}>Categories</LINK>
        <LINK href={'/menu-items'}> Menu-Items</LINK>
        <LINK href={'/users'}>Users</LINK>
      </>

     
    </div>
        <h1 className="text-center font-semibold text-primary text-4xl mb-4">
            Profile
        </h1>
        <div className="max-w-md mx-auto ">
         
       {saved &&  ( <h2 className="text-center bg-green-100 p-4 rounded-lg border-green-300">
           Profile saved!
         </h2>)
       }
         <div className="flex gap-4 items-center"> 
            <div className="bg-gray-300 p-2">
            <Image className="rounded-lg"  src={userImage} width={80} height={125} alt={'avatar'}/>
         </div>
         
         <form className="grow" onSubmit={handleProfileUpdate}>
          <input type="text" placeholder="first and last name"
            value={userName} onChange={ev=>setUserName(ev.target.value)}
          />
          <input type="email" disabled={true}value={session.data.user.email}/>
          <button type="submit">save</button>
         </form>
         </div>
  
        </div>
    </section>
  )
}


