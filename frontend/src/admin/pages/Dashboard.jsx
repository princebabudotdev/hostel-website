import {
  Users,
  Bed,
  UtensilsCrossed,
  MessageCircle,
  AlertTriangle,
  Clock,
  Building2,
  Wallet,
  PlusCircle,
  Activity
} from "lucide-react";

export default function AdminDashboard() {

  const stats = [
    { label: "Students", value: 45, icon: Users, color: "bg-blue-500" },
    { label: "Total Rooms", value: 30, icon: Bed, color: "bg-purple-500" },
    { label: "Available Rooms", value: 6, icon: Bed, color: "bg-green-500" },
    { label: "Active Tiffins", value: 32, icon: UtensilsCrossed, color: "bg-orange-500" },
  ];

  const alerts = [
    "2 students unpaid rent",
    "5 pending queries",
    "Room A203 maintenance required"
  ];

  const activities = [
    "Rahul Sharma joined hostel",
    "Priya Verma received tiffin",
    "Amit Kumar submitted query",
    "Room B102 assigned to Akash"
  ];

  const occupancy = 80;

  return (
    <div className="bg-[#f6f8fb] min-h-screen">

      {/* HEADER */}

      <div className="sticky top-0 bg-white border-b px-5 py-4 flex items-center justify-between">

        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <Building2 size={20}/>
          Hostel Dashboard
        </h1>

        <button className="flex items-center gap-2 text-sm bg-black text-white px-3 py-2 rounded-lg">
          <PlusCircle size={16}/>
          Quick Action
        </button>

      </div>



      <div className="max-w-6xl mx-auto p-5 space-y-6">

        {/* STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {stats.map((s,i)=>(
            <StatCard key={i} {...s}/>
          ))}

        </div>



        {/* OCCUPANCY + REVENUE */}

        <div className="grid md:grid-cols-2 gap-5">

          <Card title="Room Occupancy">

            <div className="space-y-3">

              <div className="w-full bg-gray-200 h-2 rounded-full">

                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{width:`${occupancy}%`}}
                />

              </div>

              <p className="text-sm text-gray-500">
                {occupancy}% of rooms occupied
              </p>

            </div>

          </Card>



          <Card title="Monthly Revenue">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                <Wallet size={18}/>
              </div>

              <div>
                <p className="text-lg font-semibold">₹1,45,000</p>
                <p className="text-xs text-gray-500">Fees collected this month</p>
              </div>

            </div>

          </Card>

        </div>



        {/* TIFFIN + QUERIES */}

        <div className="grid md:grid-cols-2 gap-5">

          <Card title="Today's Tiffin">

            <div className="space-y-2 text-sm">

              <Row label="Total" value="32"/>

              <Row label="Received" value="20" green/>

              <Row label="Pending" value="12" red/>

            </div>

          </Card>



          <Card title="Student Queries">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                <MessageCircle size={18}/>
              </div>

              <div>
                <p className="text-lg font-semibold">5</p>
                <p className="text-xs text-gray-500">Pending queries</p>
              </div>

            </div>

          </Card>

        </div>



        {/* ALERTS */}

        <Card title="Alerts">

          {alerts.map((a,i)=>(
            <div
              key={i}
              className="flex items-center gap-2 text-sm bg-red-50 text-red-600 px-3 py-2 rounded-lg mb-2"
            >
              <AlertTriangle size={14}/>
              {a}
            </div>
          ))}

        </Card>



        {/* RECENT ACTIVITY */}

        <Card title="Recent Activity">

          {activities.map((a,i)=>(
            <div
              key={i}
              className="flex items-center gap-3 text-sm py-2 border-b last:border-none"
            >

              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <Clock size={14}/>
              </div>

              {a}

            </div>
          ))}

        </Card>



        {/* QUICK ACTIONS */}

        <Card title="Quick Actions">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

            <ActionBtn label="Add Student"/>
            <ActionBtn label="Assign Room"/>
            <ActionBtn label="Add Tiffin"/>
            <ActionBtn label="Announcement"/>

          </div>

        </Card>

      </div>

    </div>
  );
}



/* STAT CARD */

function StatCard({icon:Icon,label,value,color}){

  return(

    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3">

      <div className={`w-10 h-10 ${color} text-white rounded-lg flex items-center justify-center`}>
        <Icon size={18}/>
      </div>

      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>

    </div>

  )
}



/* CARD */

function Card({title,children}){

  return(

    <div className="bg-white rounded-xl shadow-sm p-5 space-y-3">

      <h2 className="text-sm font-semibold">{title}</h2>

      {children}

    </div>

  )

}



/* ROW */

function Row({label,value,green,red}){

  return(

    <div className="flex justify-between">

      <span className="text-gray-500">{label}</span>

      <span className={`font-medium ${green ? "text-green-600":""} ${red ? "text-red-500":""}`}>
        {value}
      </span>

    </div>

  )

}



/* ACTION BUTTON */

function ActionBtn({label}){

  return(

    <button className="flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg text-sm hover:opacity-90">

      <PlusCircle size={14}/>

      {label}

    </button>

  )

}