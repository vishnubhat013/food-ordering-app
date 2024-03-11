'use client';
import { SessionProvider } from "next-auth/react";

export default function ({children }){
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}