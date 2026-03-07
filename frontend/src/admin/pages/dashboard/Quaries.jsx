import {
  MessageSquare,
  Phone,
  User,
  GraduationCap,
  MessageCircle
} from "lucide-react";
import MobileHeader from "../../components/Back";

export default function QueriesPage() {

  const queries = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 9528110949",
      college: "CCS University",
      message: "Is a single room available for next month?"
    },
    {
      id: 2,
      name: "Priya Verma",
      phone: "+91 9123456780",
      college: "Meerut College",
      message: "What is the monthly rent including mess?"
    },
    {
      id: 3,
      name: "Amit Kumar",
      phone: "+91 9988776655",
      college: "AKTU",
      message: "Do you provide WiFi and laundry facilities?"
    }
  ];

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* HEADER */}

     <MobileHeader title={'Quaries'}/>

      <div className="max-w-3xl mx-auto py-4 px-0 space-y-4">

        {queries.map((q) => (
          <QueryCard key={q.id} query={q} />
        ))}

      </div>
    </div>
  );
}

/* QUERY CARD */

function QueryCard({ query }) {

  const whatsappLink = `https://wa.me/${query.phone.replace(/\D/g, "")}`;
  const callLink = `tel:${query.phone}`;

  return (
    <div className="bg-white p-4  shadow-sm space-y-3">

      {/* STUDENT */}

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <User size={18} />
        </div>

        <div>
          <p className="font-medium text-sm">
            {query.name}
          </p>
          <p className="text-xs text-gray-500">
            {query.phone}
          </p>
        </div>

      </div>

      {/* COLLEGE */}

      <div className="flex items-center gap-2 text-sm text-gray-600">

        <GraduationCap size={16} />

        {query.college}

      </div>

      {/* MESSAGE */}

      <div className="flex gap-2 text-sm">

        <MessageSquare size={16} className="text-gray-400 mt-1" />

        <p className="text-gray-700">
          {query.message}
        </p>

      </div>

      {/* ACTIONS */}

      <div className="flex gap-3 pt-2">

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm bg-green-500 text-white px-3 py-1 rounded-md"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

        <a
          href={callLink}
          className="flex items-center gap-2 text-sm bg-black text-white px-3 py-1 rounded-md"
        >
          <Phone size={16} />
          Call
        </a>

      </div>

    </div>
  );
}