import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | CNG Tech Ltd.",
  description: "Tailored CNG solutions to meet your specific requirements.",
  icons: ["/favicon.png"],
};
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-900 transition-all">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}
