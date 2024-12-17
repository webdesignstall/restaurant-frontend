import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";

const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/catering(.*)',
    '/contact(.*)',
    '/events(.*)',
    '/group-dining(.*)',
    '/menu(.*)',
    '/references(.*)',
    '/truestory(.*)',
    '/whats-new(.*)',
    '/api/webhooks(.*)',
    '/',
])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])


export default clerkMiddleware(async (auth, request) => {
    if (!isPublicRoute(request)) {
        await auth.protect()
    }

    // @ts-ignore
    const role = (await auth()).sessionClaims?.metadata?.role as string

    if (isAdminRoute(request) && role !== 'admin') {
        const url = new URL('/unauthorized', request.url); // Redirect to an unauthorized page if not an admin
        return NextResponse.redirect(url);
    }

    // Allow access to the route if the user is an admin
    if (isAdminRoute(request) && role === 'admin') {
        return NextResponse.next();
    }

})

export const config = {
    matcher: [
        '/api/(.*)',
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};








