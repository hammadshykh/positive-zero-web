// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
 return (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black text-center px-6">
   <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
   <p className="text-lg text-gray-300 mb-8">
    The page you were looking for doesn’t exist.
   </p>
   <Link
    href="/"
    className="px-6 py-3 bg-primary hover:bg-primary-medium text-white rounded-full transition"
   >
    Go Back Home
   </Link>
  </div>
 );
}
