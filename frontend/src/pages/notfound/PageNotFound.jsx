import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-[#f6f8fb] 
                    px-0 md:px-6 
                    relative overflow-hidden">

      {/* Premium Background Glow */}
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px]
                      
                      top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px]
                      bg-purple-200/30 blur-[120px] 
                      bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 
                      w-full md:max-w-lg 
                    

                      rounded-none 
                      md:rounded-none
                      p-6 md:p-12 
                      text-center">

        {/* 404 */}
        <h1 className="text-5xl md:text-7xl font-bold 
                       text-black/80
                       tracking-wider">
          404
        </h1>

        <h2 className="text-base md:text-xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-3 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
          Please return to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">

          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-2 
                       py-3 
                      bg-black
                       text-white font-medium 
                       hover:scale-[1.02] 
                       transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex-1 flex items-center justify-center gap-2 
                       py-3 
                       bg-gray-100 text-gray-700 
                       hover:bg-gray-200 
                       transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

        {/* Branding */}
        <p className="text-gray-400 text-xs md:text-sm mt-10">
          Kaveri Living • Premium Hostel Experience
        </p>

      </div>
    </div>
  );
}