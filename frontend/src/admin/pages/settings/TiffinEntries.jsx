import {
  User,
  Phone,
  GraduationCap,
  Clock,
  CheckCircle,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import MobileHeader from "../../components/Back";

export default function TiffinEntries() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      college: "CCS University",
      lunchTime: "1:00 PM",
      received: false
    },
    {
      id: 2,
      name: "Priya Verma",
      phone: "+91 9123456780",
      college: "Meerut College",
      lunchTime: "1:15 PM",
      received: false
    },
    {
      id: 3,
      name: "Amit Kumar",
      phone: "+91 9988776655",
      college: "AKTU",
      lunchTime: "12:45 PM",
      received: true
    }
  ]);

  const markReceived = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, received: true } : s
      )
    );
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* HEADER */}

      {/* <div className="sticky top-0 bg-white border-b px-4 py-3 z-20">
        <h1 className="text-base font-semibold">
          Today's Tiffin Entries
        </h1>
      </div> */}

        <MobileHeader title={'Tiffin Entries'}/>

      <div className="max-w-3xl mx-auto py-4 space-y-4">

        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            markReceived={markReceived}
          />
        ))}

      </div>
    </div>
  );
}


/* STUDENT CARD */

function StudentCard({ student, markReceived }) {

  const callLink = `tel:${student.phone}`;
  const whatsappLink = `https://wa.me/${student.phone.replace(/\D/g, "")}`;

  return (
    <div className="bg-white shadow-sm p-4 space-y-3">

      {/* HEADER */}

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <User size={18} />
        </div>

        <div className="flex-1">

          <p className="font-medium text-sm">
            {student.name}
          </p>

          <p className="text-xs text-gray-500">
            {student.phone}
          </p>

        </div>

      </div>


      {/* DETAILS */}

      <div className="flex flex-col gap-1 text-sm text-gray-600">

        <div className="flex items-center gap-2">
          <GraduationCap size={16} />
          {student.college}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          Lunch Time: {student.lunchTime}
        </div>

      </div>


      {/* CONTACT ACTIONS */}

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
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs bg-green-500 text-white px-3 py-1 rounded-md"
        >
          <MessageCircle size={14} />
          WhatsApp
        </a>

      </div>


      {/* RECEIVE BUTTON */}

      {student.received ? (

        <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
          <CheckCircle size={18} />
          Tiffin Received
        </div>

      ) : (

        <button
          onClick={() => markReceived(student.id)}
          className="bg-black text-white text-sm px-3 py-1 rounded-md"
        >
          Receive Tiffin
        </button>

      )}

    </div>
  );
}