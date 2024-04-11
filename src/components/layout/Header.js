'use client';
import React, { useEffect, useState } from 'react'
import  LINK from "next/link";
import {signIn, signOut} from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { getCurrentUser, getUserRole } from '../../app/_action';

export default function Header() {
   const session = useSession();
    const user = session?.data?.user;
    
    const [role, setRole ] = useState('USER');
    useEffect(() => {
    async function fetchRole(){
      await getUserRole(user.id).then((res) => {
        console.log(res.role);
      })
    }
  },[]);
  
  return (
    
      <header className="flex item-center justify-between">
      <LINK className="text-primary font-semibold text-2xl"  href="">Kitchen Bells</LINK>
      <nav className="flex  items-center gap-8 text-gray-500 font-semibold">
        <LINK href={'/'}>Home</LINK>
        <LINK href={'/menu'}>Menu</LINK>
        <LINK href={'/about'}>About</LINK>
        <LINK href={'/contact'}>Contact</LINK>
      {user ? (
        <>
        <LINK href='/profile'>Profile</LINK>
          {
            role === 'ADMIN' ? (
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


