import {NextResponse, type NextRequest} from "next/server"

export async function middleware(request:NextRequest) {
  const token = request.cookies.get('token')?.value;
  const authenticated = token ? true : false;

  if(!authenticated && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if(authenticated && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  } 

  if(authenticated && request.nextUrl.pathname.startsWith('/login/resetar-senha')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  } 
}
