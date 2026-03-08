import {
  User,
  Phone,
  MessageCircle,
  GraduationCap,
  Mail,
  MessageSquare,
  Check,
  Clock,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { useEffect, useState } from "react";
import MobileHeader from "../../components/Back";
import Loader from "../../components/Loader";
import ScrollToTop from "../../components/ScrollTop";
import { useToast } from "../../../context/ToastContext";
import Index from "../../apis/Index";

export default function QueriesPage() {
  const [queries, setQueries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loader, setLoader] = useState(true);

  const { showToast } = useToast();

  const getQueries = async () => {
    setLoader(true);

    try {
      const res = await Index.getQueries(page);

      setQueries(res?.data?.data || []);
      setTotalPages(res?.data?.pagination?.totalPages || 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getQueries();
  }, [page]);

  if (loader) return <Loader />;

  return (
    <>
      <ScrollToTop />

      <div className="bg-[#f4f6f9] min-h-screen">
        <MobileHeader title="Admission Queries" />

        <div className="max-w-3xl mx-auto py-4 space-y-4">
          {queries.length === 0 && (
            <div className="text-center text-gray-500 py-10">
              No queries found
            </div>
          )}

          {queries.map((query) => (
            <QueryCard key={query._id} query={query} />
          ))}

          {/* PAGINATION */}

          <div className="flex justify-center items-center gap-3 pt-6">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 text-sm bg-white border rounded disabled:opacity-40"
            >
              Previous
            </button>

            <span className="text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 text-sm bg-black text-white rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* QUERY CARD */

function QueryCard({ query }) {
  const [note, setNote] = useState(query?.note || "");
  const [contacted, setContacted] = useState(query?.status === "contacted");

  const whatsappLink = `https://wa.me/${query?.phone?.replace(/\D/g, "") || ""}`;
  const callLink = `tel:${query?.phone}`;

  const saveNote = () => {
    console.log("Save note", note);

    // call API here
  };

  const markContacted = () => {
    setContacted(true);

    // call API
  };

  return (
    <div className="bg-white shadow-sm p-4 space-y-3">
      {/* HEADER */}

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <User size={18} />
        </div>

        <div className="flex-1">
          <p className="font-medium text-sm">{query?.fullname}</p>

          <p className="text-xs text-gray-500">{query?.phone}</p>
        </div>

        <StatusBadge contacted={contacted} />
      </div>

      {/* DETAILS */}

      <div className="flex flex-col gap-1 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <GraduationCap size={16} />
          {query?.collegeName || "N/A"}
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} />
          {query?.email || "N/A"}
        </div>
      </div>

      {/* MESSAGE */}

      <div className="flex gap-2 text-sm text-gray-700">
        <MessageSquare size={16} className="mt-1 text-gray-400" />

        <p>{query?.message || "No message"}</p>
      </div>

      {/* CONTACT */}

      <div className="flex gap-2">
        <a
          href={callLink}
          className="flex items-center gap-1 text-xs bg-black text-white px-3 py-1 rounded-md"
        >
          <Phone size={14} />
          Call
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          className="flex items-center gap-1 text-xs bg-green-500 text-white px-3 py-1 rounded-md"
        >
          <MessageCircle size={14} />
          WhatsApp
        </a>

        {!contacted && (
          <button
            onClick={markContacted}
            className="flex items-center gap-1 text-xs bg-blue-600 text-white px-3 py-1 rounded-md"
          >
            Contacted
          </button>
        )}
      </div>

      {/* ADMIN NOTE */}
      <div className="flex items-center gap-1 text-[14px] font-semibold text-gray-800">
        <Clock size={12} />
        {formatDistanceToNow(new Date(query?.createdAt), { addSuffix: true })}
      </div>

      <div className="flex gap-2 pt-2">
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Admin note..."
          className="flex-1 text-xs border px-2 py-1 rounded focus:outline-none"
        />

        <button
          onClick={saveNote}
          className="flex items-center gap-1 text-xs bg-green-600 text-white px-3 py-1 rounded-md"
        >
          <Check size={14} />
          Done
        </button>
      </div>
    </div>
  );
}

/* STATUS BADGE */

function StatusBadge({ contacted }) {
  if (contacted)
    return (
      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
        Contacted
      </span>
    );

  return (
    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
      New
    </span>
  );
}
