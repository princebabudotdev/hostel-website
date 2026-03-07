import {
  Building,
  MapPin,
  Phone,
  Mail,
  Bed,
  DollarSign,
  Wifi,
  Home,
  Edit
} from "lucide-react";

import { NavLink } from "react-router-dom";
import MobileHeader from "../../components/Back";

export default function HostelProfile() {

  // Fake data (replace with API later)

  const hostel = {
    name: "Kaveri Living Hostel",
    description: "Comfortable hostel for students with modern facilities.",
    address: "Meerut, Uttar Pradesh",
    phone: "+91 9876543210",
    email: "kaveriliving@gmail.com",

    monthlyRent: 4500,
    securityDeposit: 2000,

    totalRooms: 40,
    availableRooms: 8,

    facilities: ["WiFi", "Laundry", "Parking", "24/7 Water"],
    amenities: ["Study Table", "AC Rooms", "Mess Facility"],
    rules: ["No loud music after 10PM", "Visitors allowed till 8PM"],

    images: [
      "https://images.unsplash.com/photo-1560448075-bb485b067938",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    ],
  };

  return (
    <div className="bg-[#f4f6f9]  pb-24 md:pb-6">

      {/* HEADER */}

      {/* <div className="sticky top-0 bg-white/80 backdrop-blur-md px-4 py-3 z-20">
        <h1 className="text-base font-semibold">Hostel Profile</h1>
      </div> */}

        <MobileHeader title={'Hostel Profile'}/>


      <div className="max-w-3xl mx-auto py-6 space-y-6">

        {/* HOSTEL CARD */}

        <div className="bg-white shadow-sm p-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-xl bg-black text-white flex items-center justify-center text-lg font-semibold">
              <Building />
            </div>

            <div>
              <h2 className="font-semibold">{hostel.name}</h2>
              <p className="text-xs text-gray-500">{hostel.description}</p>
            </div>

          </div>

          <NavLink
            to="/admin/settings/edit-hostel"
            className="flex items-center gap-1 text-sm text-black hover:underline"
          >
            <Edit size={16} />
            Edit
          </NavLink>

        </div>

        {/* LOCATION */}

        <Section title="Location & Contact">

          <InfoItem icon={MapPin} label="Address" value={hostel.address} />

          <InfoItem icon={Phone} label="Phone" value={hostel.phone} />

          <InfoItem icon={Mail} label="Email" value={hostel.email} />

        </Section>

        {/* PRICING */}

        <Section title="Pricing">

          <InfoItem
            icon={DollarSign}
            label="Monthly Rent"
            value={`₹${hostel.monthlyRent}`}
          />

          <InfoItem
            icon={DollarSign}
            label="Security Deposit"
            value={`₹${hostel.securityDeposit}`}
          />

        </Section>

        {/* ROOM INFO */}

        <Section title="Rooms">

          <InfoItem
            icon={Bed}
            label="Total Rooms"
            value={hostel.totalRooms}
          />

          <InfoItem
            icon={Home}
            label="Available Rooms"
            value={hostel.availableRooms}
          />

        </Section>

        {/* FACILITIES */}

        <Section title="Facilities">

          {hostel.facilities.map((f, i) => (
            <InfoItem key={i} icon={Wifi} label={`Facility ${i + 1}`} value={f} />
          ))}

        </Section>

        {/* AMENITIES */}

        <Section title="Amenities">

          {hostel.amenities.map((a, i) => (
            <InfoItem key={i} icon={Home} label={`Amenity ${i + 1}`} value={a} />
          ))}

        </Section>

        {/* RULES */}

        <Section title="Rules">

          {hostel.rules.map((r, i) => (
            <InfoItem key={i} icon={Home} label={`Rule ${i + 1}`} value={r} />
          ))}

        </Section>

        {/* IMAGES */}

        <Section title="Hostel Images">

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

            {hostel.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="hostel"
                className="rounded-lg object-cover h-28 w-full"
              />
            ))}

          </div>

        </Section>

      </div>

    </div>
  );
}

/* SECTION */

function Section({ title, children }) {
  return (
    <div className="bg-white shadow-sm p-5 space-y-4">
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      {children}
    </div>
  );
}

/* INFO ITEM */

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={18} className="text-gray-400" />
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium">{value || "N/A"}</p>
      </div>
    </div>
  );
}