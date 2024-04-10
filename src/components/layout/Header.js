'use client';
import React, { useEffect, useState } from 'react'
import  LINK from "next/link";
import {signIn, signOut} from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { getCurrentUser } from '../../app/_action';

export default function Header() {
   const [user, setUser] = useState(null);
   const session = useSession();
   useEffect(() => {
    if(session?.data?.user?.id){
      getCurrentUser(session?.data?.user?.id).then((res) => {
        setUser(res);
      });
    }
   },[]);

  //const userName = session?.data?.user?.name || session?.data?.user?.email;
  //console.log(user)
 //console.log(userName)
  return (
    
      <header className="flex item-center justify-between">
      <LINK className="text-primary font-semibold text-2xl"  href="">Kitchen Bells</LINK>
      <nav className="flex  items-center gap-8 text-gray-500 font-semibold">
        <LINK href={'/'}>Home</LINK>
        <LINK href={'/menu'}>Menu</LINK>
        <LINK href={'/about'}>About</LINK>
        <LINK href={''}>Contact</LINK>
        
      </nav>
      <nav className="flex  items-center gap-8 text-gray-500 font-semibold">
      {user ? (
        <>
        <LINK href='/profile'>Profile</LINK>
          {
            user?.role === 'ADMIN' ? (
              
          <LINK href='/dashboard'>Dashboard</LINK>
            ): (
              <LINK href='/cart'>Cart</LINK>
            )
          }
        <button onClick={() => {
        signOut()
      }}>
        Logout
      </button>
        </>
      ): (
        <button onClick={() => {
        signIn('google');
      }}>
        LogIn
      </button>
      )}
      </nav>
    </header>
  
  )
}


