import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MobileHeader({ title }) {
  const navigate = useNavigate();

  return (
    <div className=" sticky top-0 z-40 left-0 bg-white border-b border-gray-300 flex items-center gap-3 px-3 py-3">
      <button
        onClick={() => navigate(-1)}
        className="p-1 rounded hover:bg-gray-100"
      >
        <ArrowLeft size={20} />
       
      </button>

      <h1 className="text-sm font-semibold">{title}</h1>
    </div>
  );
}
