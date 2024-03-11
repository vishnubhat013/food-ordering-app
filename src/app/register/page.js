"use client";

import React from 'react'
import {useState} from "react";

export default function page() {
    const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
function handleFormSubmit(ev){
    ev.preventDefault();
    fetch('/api/register',{
        method:'POST',
        body:JSON.stringify({email,password}),
        headers:{'Content-Type':'application/json'},
    });

}
  return (
   <section className="mt-8">
    <h1 className="text-center text-primary text-4xl">
        Register
    </h1>
    <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" value={email} onChange={ev=> setEmail(ev.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={ev=> setPassword(ev.target.value)}/>
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500"> Or login with social media</div>
        <button>Login with google</button>
        </form>
   </section>
  )}