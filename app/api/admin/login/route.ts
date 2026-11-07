import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, createAdminSession, isAdminPasswordValid } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const password = String(form.get("password") || "");

  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.redirect(new URL("/admin?setup=1", request.url), 303);
  }

  if (!isAdminPasswordValid(password)) {
    return NextResponse.redirect(new URL("/admin?error=1", request.url), 303);
  }

  const session = createAdminSession();
  const response = NextResponse.redirect(new URL("/admin", request.url), 303);
  response.cookies.set(ADMIN_COOKIE, session.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(session.expiresAt),
  });
  return response;
}
