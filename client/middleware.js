import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("auth-token");
  const isAdmin = req.cookies.get("role") === "admin";

  if (req.nextUrl.pathname.startsWith("/dashboard/admin") && !isAdmin) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/dashboard/student") && !token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  return NextResponse.next();
}
