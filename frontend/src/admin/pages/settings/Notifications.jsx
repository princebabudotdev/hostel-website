import {
  Bell,
  Mail,
  MessageCircle,
  UserPlus,
  ShieldAlert,
  Utensils
} from "lucide-react";
import { useState } from "react";
import MobileHeader from "../../components/Back";

export default function NotificationsSettings() {

  const [appNotify, setAppNotify] = useState(true);
  const [newUserNotify, setNewUserNotify] = useState(true);
  const [queryNotify, setQueryNotify] = useState(true);
  const [tiffinNotify, setTiffinNotify] = useState(true);
  const [securityNotify, setSecurityNotify] = useState(false);
  const [emailNotify, setEmailNotify] = useState(false);
  const [whatsappNotify, setWhatsappNotify] = useState(true);

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* HEADER */}

      {/* <div className="sticky top-0 bg-white border-b px-4 py-3 z-20">
        <h1 className="text-base font-semibold">
         
        </h1>
      </div> */}

        <MobileHeader title={'Notification Settings'}/>

      <div className="max-w-3xl mx-auto py-4 space-y-4">

        {/* APP NOTIFICATIONS */}

        <Card title="App Notifications">

          <Toggle
            icon={Bell}
            label="Enable Notifications"
            enabled={appNotify}
            setEnabled={setAppNotify}
          />

        </Card>


        {/* ADMIN ALERTS */}

        <Card title="Admin Alerts">

          <Toggle
            icon={UserPlus}
            label="New User Registration"
            enabled={newUserNotify}
            setEnabled={setNewUserNotify}
          />

          <Toggle
            icon={MessageCircle}
            label="New Queries"
            enabled={queryNotify}
            setEnabled={setQueryNotify}
          />

          <Toggle
            icon={Utensils}
            label="Tiffin Updates"
            enabled={tiffinNotify}
            setEnabled={setTiffinNotify}
          />

          <Toggle
            icon={ShieldAlert}
            label="Security Alerts"
            enabled={securityNotify}
            setEnabled={setSecurityNotify}
          />

        </Card>


        {/* EXTERNAL NOTIFICATIONS */}

        <Card title="External Notifications">

          <Toggle
            icon={Mail}
            label="Email Notifications"
            enabled={emailNotify}
            setEnabled={setEmailNotify}
          />

          <Toggle
            icon={MessageCircle}
            label="WhatsApp Notifications"
            enabled={whatsappNotify}
            setEnabled={setWhatsappNotify}
          />

        </Card>


        {/* SAVE */}

        <button className="w-full bg-black text-white py-2 text-sm font-medium">
          Save Notification Settings
        </button>

      </div>

    </div>
  );
}


/* CARD */

function Card({ title, children }) {
  return (
    <div className="bg-white p-4 space-y-3">
      <h2 className="text-sm font-semibold">{title}</h2>
      {children}
    </div>
  );
}


/* TOGGLE */

function Toggle({ icon: Icon, label, enabled, setEnabled }) {

  return (
    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">
        <Icon size={18} className="text-gray-400" />
        <span className="text-sm">{label}</span>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-11 h-6 rounded-full flex items-center px-1 transition
        ${enabled ? "bg-black justify-end" : "bg-gray-300 justify-start"}`}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow"></div>
      </button>

    </div>
  );
}