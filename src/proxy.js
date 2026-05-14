import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const { pathname } = new URL(request.url);

    if (session && (pathname === '/login' || pathname === '/register')) {
        return NextResponse.redirect(new URL('/my-profile', request.url));
    }
    if (!session && (pathname.startsWith('/my-profile/') || pathname.startsWith('/animals/'))) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();


}

export const config = {
    matcher: ['/my-profile/:path*', '/animals/:id', '/login', '/register'],
}