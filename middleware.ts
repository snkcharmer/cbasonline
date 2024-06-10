import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_CLIENT_LOGIN_REDIRECT,
  DEFAULT_ADMIN_LOGIN_REDIRECT,
  clientRoutes,
  adminRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  // console.log(req.auth?.user.image);
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);
  const isClientRoute = clientRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  let role: string = "";

  const roles = req.auth?.user.email?.split(":");
  if (roles != undefined) {
    role = roles[1];
  }
  const isClientLoggedIn = role == "qwejnmhcjnrXaseqw" ? true : false;
  const isAdminLoggedIn = role == "lkazmxcnqweSasjqw" ? true : false;

  // console.log(role);
  if (isPublicRoute) {
    return;
  }

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    console.log(role);
    if (isClientLoggedIn) {
      return Response.redirect(new URL(DEFAULT_CLIENT_LOGIN_REDIRECT, nextUrl));
    }

    if (isAdminLoggedIn) {
      return Response.redirect(new URL(DEFAULT_ADMIN_LOGIN_REDIRECT, nextUrl));
    }

    return;
  }

  // If logged in as Admin
  if (isAdminLoggedIn) {
    if (isAdminRoute) {
      return;
    } else {
      return Response.redirect(new URL("/unauthorized", nextUrl));
    }
  }

  // If logged in as Client
  if (isClientLoggedIn) {
    if (isClientRoute) {
      return;
    } else {
      return Response.redirect(new URL("/unauthorized", nextUrl));
    }
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/unauthorized", nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
