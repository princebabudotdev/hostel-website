import {
  Users,
  Bed,
  UtensilsCrossed,
  MessageCircle,
  AlertTriangle,
  Clock,
  PlusCircle,
  Building2
} from "lucide-react";

export default function AdminDashboard() {

  const stats = {
    students: 45,
    rooms: 30,
    availableRooms: 6,
    tiffins: 32,
    queries: 5
  };

  const occupancy = 80;

  const alerts = [
    "2 students unpaid rent",
    "5 pending queries",
    "Room A203 maintenance required"
  ];

  const activities = [
    "Rahul Sharma joined hostel",
    "Priya Verma received tiffin",
    "Amit Kumar submitted query"
  ];

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* HEADER */}

      <div className="sticky top-0 bg-white border-b border-gray-300 px-4 py-3">
        <h1 className="text-base font-semibold flex items-center gap-2">
          <Building2 size={18}/>
          Hostel Dashboard
        </h1>
      </div>

      <div className="max-w-4xl mx-auto py-4 px-1 space-y-6">

        {/* STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          <StatCard icon={Users} label="Students" value={stats.students}/>
          <StatCard icon={Bed} label="Rooms" value={stats.rooms}/>
          <StatCard icon={Bed} label="Available" value={stats.availableRooms}/>
          <StatCard icon={UtensilsCrossed} label="Tiffins" value={stats.tiffins}/>

        </div>


        {/* OCCUPANCY */}

        <div className="bg-white py-4 px-1 space-y-2">

          <h2 className="text-sm font-semibold">
            Room Occupancy
          </h2>

          <div className="w-full bg-gray-200 h-2 rounded">

            <div
              className="bg-black h-2 rounded"
              style={{ width: `${occupancy}%` }}
            />

          </div>

          <p className="text-xs text-gray-500">
            {occupancy}% rooms occupied
          </p>

        </div>


        {/* TODAY TIFFIN */}

        <div className="bg-white py-4 px-1 space-y-2">

          <h2 className="text-sm font-semibold">
            Today's Tiffins
          </h2>

          <p className="text-sm text-gray-600">
            Total: 32
          </p>

          <p className="text-sm text-gray-600">
            Received: 20
          </p>

          <p className="text-sm text-gray-600">
            Pending: 12
          </p>

        </div>


        {/* QUICK ACTIONS */}

        <div className="bg-white py-4 px-1 space-y-3">

          <h2 className="text-sm font-semibold">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-2">

            <ActionBtn label="Add User"/>
            <ActionBtn label="Add Room"/>
            <ActionBtn label="Add Tiffin"/>
            <ActionBtn label="Announcement"/>

          </div>

        </div>


        {/* ALERTS */}

        <div className="bg-white py-4 px-1 space-y-3">

          <h2 className="text-sm font-semibold flex items-center gap-2">
            <AlertTriangle size={16}/>
            Alerts
          </h2>

          {alerts.map((a,i)=>(
            <div key={i} className="text-sm text-gray-700">
              ⚠ {a}
            </div>
          ))}

        </div>


        {/* RECENT ACTIVITY */}

        <div className="bg-white py-4 px-1 space-y-3">

          <h2 className="text-sm font-semibold">
            Recent Activity
          </h2>

          {activities.map((a,i)=>(
            <div key={i} className="flex items-center gap-2 text-sm">
              <Clock size={14}/>
              {a}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}


/* STAT CARD */

function StatCard({ icon:Icon,label,value }){

  return(
    <div className="bg-white py-4 px-1 flex items-center gap-3">

      <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded">
        <Icon size={18}/>
      </div>

      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>

    </div>
  )
}


/* ACTION BUTTON */

function ActionBtn({label}){

  return(
    <button className="flex items-center justify-center gapy-4 px-1 text-sm bg-black text-white py-2 rounded">

      <PlusCircle size={14}/>

      {label}

    </button>
  )
}