'use client';
import React from 'react'
import  LINK from "next/link";
import {signIn, signOut} from 'next-auth/react';
import { useSession } from 'next-auth/react';
export default function Header() {
  const user = useSession()?.data?.user;
 // const userName = useSession()?.data?.user?.name || useSession()?.data?.user?.email;
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
        <LINK href='/cart'>Cart</LINK>
        <LINK href='/dashboard'>Dashboard</LINK>
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


