import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-8">
      {/* Logo and Branding */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg">
          <svg
            className="w-12 h-12 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Bartr 3.0</h1>
        <p className="text-xl text-gray-600 font-medium">
          Need something? Just Bartr it.
        </p>
      </div>

      {/* Main Illustration */}
      <div className="flex-1 flex items-center justify-center mb-8">
        <div className="w-80 h-80 bg-gradient-to-br from-red-50 to-red-100 rounded-3xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
              </svg>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              Connect with your neighbors
            </div>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="w-full max-w-md mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-2 mx-auto">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Help Requests
            </span>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-2 mx-auto">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Work & Services
            </span>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="w-full max-w-md">
        <Link to="/login">
          <Button className="w-full h-14 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90 shadow-lg">
            Get Started
          </Button>
        </Link>
        <p className="text-center text-sm text-gray-500 mt-4">
          Join your hyperlocal community today
        </p>
      </div>
    </div>
  );
}
