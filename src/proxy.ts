import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { headers } from "next/headers";
import { auth } from './lib/auth';
export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers() 
    })
    // console.log(session)
    const user = session?.user
    if (!user){
        return NextResponse.redirect(new URL('/signin', request.url))
    }
   
}


export const config = {
    matcher: ['/create-event']
}