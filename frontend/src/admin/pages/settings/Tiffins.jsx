import {
  UtensilsCrossed,
  Clock,
  DollarSign,
  ToggleLeft,
  Plus,
  Trash2
} from "lucide-react";
import { useState } from "react";
import MobileHeader from "../../components/Back";

export default function MessTiffinSettings() {

  const [messEnabled, setMessEnabled] = useState(true);

  const [price, setPrice] = useState(2500);

  const [menu, setMenu] = useState([
    "Rice",
    "Dal",
    "Chapati",
    "Paneer Sabji"
  ]);

  const [breakfast, setBreakfast] = useState(true);
  const [lunch, setLunch] = useState(true);
  const [dinner, setDinner] = useState(true);

  const addMenuItem = () => {
    setMenu([...menu, ""]);
  };

  const updateMenuItem = (index, value) => {
    const updated = [...menu];
    updated[index] = value;
    setMenu(updated);
  };

  const removeMenuItem = (index) => {
    setMenu(menu.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* HEADER */}

      {/* <div className="sticky top-0 bg-white border-b px-4 py-3 z-20">
        <h1 className="text-base font-semibold">
          
        </h1>
      </div> */}

        <MobileHeader title={'Mess & Tiffin Settings'}/>


      <div className="max-w-3xl mx-auto py-4 space-y-4">

        {/* ENABLE MESS */}

        <Card title="Mess Service">

          <Toggle
            label="Enable Mess Service"
            enabled={messEnabled}
            setEnabled={setMessEnabled}
          />

        </Card>


        {/* TIFFIN PRICE */}

        <Card title="Tiffin Pricing">

          <Input
            icon={DollarSign}
            label="Monthly Tiffin Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

        </Card>


        {/* MEAL TYPES */}

        <Card title="Meal Availability">

          <Toggle label="Breakfast" enabled={breakfast} setEnabled={setBreakfast} />
          <Toggle label="Lunch" enabled={lunch} setEnabled={setLunch} />
          <Toggle label="Dinner" enabled={dinner} setEnabled={setDinner} />

        </Card>


        {/* MESS MENU */}

        <Card title="Mess Menu">

          {menu.map((item, index) => (

            <div key={index} className="flex gap-2">

              <input
                value={item}
                onChange={(e) =>
                  updateMenuItem(index, e.target.value)
                }
                className="flex-1 border border-gray-200 px-3 py-2 text-sm"
              />

              <button
                onClick={() => removeMenuItem(index)}
                className="text-red-600 bg-red-50 px-2 rounded"
              >
                <Trash2 size={16} />
              </button>

            </div>

          ))}

          <button
            onClick={addMenuItem}
            className="flex items-center gap-1 text-xs bg-black text-white px-3 py-1 rounded"
          >
            <Plus size={14} />
            Add Item
          </button>

        </Card>


        {/* SAVE BUTTON */}

        <button className="w-full bg-black text-white py-2 text-sm font-medium">
          Save Mess Settings
        </button>

      </div>
    </div>
  );
}


/* CARD */

function Card({ title, children }) {
  return (
    <div className="bg-white p-4 space-y-3">
      <h2 className="text-sm font-semibold">
        {title}
      </h2>
      {children}
    </div>
  );
}


/* INPUT */

function Input({ icon: Icon, label, value, onChange }) {
  return (
    <div className="flex flex-col">

      <label className="text-xs text-gray-500 mb-1">
        {label}
      </label>

      <div className="flex items-center gap-2 border border-gray-200 px-3 py-2">

        <Icon size={16} className="text-gray-400" />

        <input
          value={value}
          onChange={onChange}
          className="w-full text-sm outline-none bg-transparent"
        />

      </div>

    </div>
  );
}


/* TOGGLE */

function Toggle({ label, enabled, setEnabled }) {

  return (
    <div className="flex justify-between items-center">

      <span className="text-sm">{label}</span>

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