import { NextResponse } from "next/server";

export function middleware() {
    // retrieve the current response
    const res = NextResponse.next()

    // add the CORS headers to the response
    res.headers.append('Access-Control-Allow-Origin', '*');

    return res;
}

// specify the path regex to apply the middleware to
export const config = {
    matcher: '/api/upload',
}