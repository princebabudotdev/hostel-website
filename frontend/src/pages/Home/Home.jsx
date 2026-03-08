import {
  Bed,
  UtensilsCrossed,
  Wifi,
  ShieldCheck,
  Phone,
  MessageCircle,
  Building2,
  Users,
  MapPin
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function HostelHome() {

  const features = [
    {
      icon: Bed,
      title: "Comfortable Rooms",
      desc: "Single, double and triple sharing rooms with modern facilities."
    },
    {
      icon: UtensilsCrossed,
      title: "Daily Tiffin / Mess",
      desc: "Healthy breakfast, lunch and dinner available for all students."
    },
    {
      icon: Wifi,
      title: "High Speed WiFi",
      desc: "Unlimited internet access for study and entertainment."
    },
    {
      icon: ShieldCheck,
      title: "24/7 Security",
      desc: "Safe hostel environment with CCTV and security staff."
    },
    {
      icon: Users,
      title: "Student Community",
      desc: "Friendly environment with students from different colleges."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      desc: "Hostel located near major colleges and transport."
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">

      {/* HERO SECTION */}

      <section className="max-w-6xl mx-auto px-4 py-14">

        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT */}

          <div className="flex-1 space-y-5">

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">

              Welcome to <span className="text-indigo-600">Kaveri Living Hostel</span>

            </h1>

            <p className="text-gray-600 text-base">

              Comfortable hostel living with modern facilities for students.
              Safe environment, healthy food and everything you need for a
              peaceful stay.

            </p>

            <div className="flex gap-3">

              <NavLink
                to="/register"
                className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm"
              >
                Join Hostel
              </NavLink>

              <NavLink
                to="/login"
                className="border px-5 py-2 rounded-md text-sm"
              >
                Login
              </NavLink>

            </div>

          </div>


          {/* RIGHT CARD */}

          <div className="bg-white shadow-sm p-6 w-full max-w-sm space-y-4">

            <div className="flex items-center gap-2 font-semibold">
              <Building2 size={18}/>
              Hostel Highlights
            </div>

            <div className="text-sm text-gray-600 space-y-2">

              <p>✔ Fully Furnished Rooms</p>
              <p>✔ Daily Mess / Tiffin</p>
              <p>✔ 24/7 Security</p>
              <p>✔ High Speed WiFi</p>
              <p>✔ Study Friendly Environment</p>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-4 pb-14">

        <h2 className="text-xl font-semibold text-center mb-8">
          Hostel Facilities
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {features.map((f,i)=>{

            const Icon = f.icon;

            return(

              <div
                key={i}
                className="bg-white shadow-sm p-5 space-y-3"
              >

                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Icon size={18}/>
                </div>

                <h3 className="font-medium">
                  {f.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {f.desc}
                </p>

              </div>

            )

          })}

        </div>

      </section>


      {/* ROOMS */}

      <section className="max-w-6xl mx-auto px-4 pb-16">

        <h2 className="text-xl font-semibold text-center mb-8">
          Room Types
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <RoomCard type="Single Room" price="₹72,000 / year"/>
          <RoomCard type="Double Sharing" price="₹54,000 / year"/>
          <RoomCard type="Triple Sharing" price="₹42,000 / year"/>

        </div>

      </section>


      {/* QUERY BUTTON */}

      <NavLink
        to="/query"
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg"
      >
        <MessageCircle size={22}/>
      </NavLink>

    </div>
  );
}


/* ROOM CARD */

function RoomCard({type,price}){

  return(

    <div className="bg-white shadow-sm p-6 text-center space-y-2">

      <Bed className="mx-auto text-indigo-600"/>

      <h3 className="font-medium">
        {type}
      </h3>

      <p className="text-sm text-gray-600">
        {price}
      </p>

    </div>

  )

}