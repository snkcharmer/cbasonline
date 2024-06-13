/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/", "/unauthorized"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = ["/admin/login", "/client", "/client/login"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in
 * @type {string}
 */

export const DEFAULT_CLIENT_LOGIN_REDIRECT = "/client/assessment";

export const DEFAULT_ADMIN_LOGIN_REDIRECT = "/admin/grades";

export const adminRoutes = [
  "/admin/grades",
  "/admin/integrate",
  "/admin/dashboard",
  "/admin/question",
];

export const clientRoutes = ["/client/assessment", "/client/grades"];
