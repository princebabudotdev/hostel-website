import {
  User,
  Phone,
  ShieldCheck,
  LogIn,
  LogOut,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

export default function SecurityPageAdmin() {

  const [entries, setEntries] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      purpose: "College",
      status: "out"
    },
    {
      id: 2,
      name: "Priya Verma",
      phone: "+91 9123456780",
      purpose: "Market",
      status: "in"
    },
    {
      id: 3,
      name: "Amit Kumar",
      phone: "+91 9988776655",
      purpose: "Library",
      status: "out"
    }
  ]);

  const toggleStatus = (id) => {
    setEntries(
      entries.map((e) =>
        e.id === id
          ? { ...e, status: e.status === "in" ? "out" : "in" }
          : e
      )
    );
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* HEADER */}

      <div className="sticky top-0 bg-white border-b px-4 py-3 z-20">
        <h1 className="text-base font-semibold">
          Security Log
        </h1>
      </div>

        <MobileHeader title={'Quaries'}/>

      <div className="max-w-3xl mx-auto py-4 space-y-4">

        {entries.map((entry) => (
          <SecurityCard
            key={entry.id}
            entry={entry}
            toggleStatus={toggleStatus}
          />
        ))}

      </div>
    </div>
  );
}


/* SECURITY CARD */

function SecurityCard({ entry, toggleStatus }) {

  const callLink = `tel:${entry.phone}`;
  const whatsappLink = `https://wa.me/${entry.phone.replace(/\D/g, "")}`;

  return (
    <div className="bg-white shadow-sm p-4 space-y-3">

      {/* STUDENT */}

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <User size={18} />
        </div>

        <div className="flex-1">

          <p className="font-medium text-sm">
            {entry.name}
          </p>

          <p className="text-xs text-gray-500">
            {entry.phone}
          </p>

        </div>

        <StatusBadge status={entry.status} />

      </div>


      {/* PURPOSE */}

      <div className="flex items-center gap-2 text-sm text-gray-600">

        <ShieldCheck size={16} />

        Purpose: {entry.purpose}

      </div>


      {/* ACTIONS */}

      <div className="flex gap-2 flex-wrap">

        <a
          href={callLink}
          className="flex items-center gap-1 text-xs bg-black text-white px-3 py-1 rounded"
        >
          <Phone size={14} />
          Call
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          className="flex items-center gap-1 text-xs bg-green-500 text-white px-3 py-1 rounded"
        >
          <MessageCircle size={14} />
          WhatsApp
        </a>

        <button
          onClick={() => toggleStatus(entry.id)}
          className="flex items-center gap-1 text-xs bg-gray-100 px-3 py-1 rounded"
        >
          {entry.status === "in" ? (
            <>
              <LogOut size={14} />
              Mark OUT
            </>
          ) : (
            <>
              <LogIn size={14} />
              Mark IN
            </>
          )}
        </button>

      </div>

    </div>
  );
}


/* STATUS BADGE */

function StatusBadge({ status }) {

  if (status === "out") {
    return (
      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
        OUT
      </span>
    );
  }

  return (
    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
      IN
    </span>
  );
}