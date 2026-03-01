import React from "react";

const menu = [
  {
    day: "Monday",
    breakfast: "Aalu Paratha + Tea",
    lunch: "Mix Veg + Chana Dal + Rice + Roti + Chutney + Salad",
    snacks: "Bread Pakoda + Tea",
    dinner: "Soya Chaap + Aalu Jeera + Rice + Roti + Chutney + Salad",
  },
  {
    day: "Tuesday",
    breakfast: "Milk + Jalebi",
    lunch: "Seasonal Sabji + Dal + Rice + Roti + Chutney + Salad",
    snacks: "Fruit Chaat",
    dinner: "Aalu Dum + Dal + Rice + Roti + Custard + Chutney + Salad",
  },
  {
    day: "Wednesday",
    breakfast: "Chhole Puri + Tea",
    lunch: "Rajma + Paneer + Jeera Rice + Roti + Chutney + Salad",
    snacks: "Fried Chana + Tea",
    dinner: "Dum + Dal + Mix Veg + Rice + Roti + Chutney + Salad",
  },
  {
    day: "Thursday",
    breakfast: "Milk + Bread + Banana",
    lunch: "Aalu Dum + Dal + Rice + Roti + Chutney + Salad",
    snacks: "Chowmein + Tea",
    dinner: "Matar Paneer + Dal + Rice + Roti + Salad",
  },
  {
    day: "Friday",
    breakfast: "Aalu Sabji + Paratha + Tea",
    lunch: "Rice + Roti + Chutney + Salad",
    snacks: "Samosa + Tea",
    dinner: "Seasonal Sabji + Dal + Gulab Jamun + Chutney + Salad",
  },
  {
    day: "Saturday",
    breakfast: "Mix Paratha + Tea",
    lunch: "Veg Biryani + Raita + Salad + Chutney",
    snacks: "Sandwich + Tea",
    dinner: "Sev Bhaji + Aalu Do Pyaza + Rice + Roti + Chutney + Salad",
  },
  {
    day: "Sunday",
    breakfast: "Grilled Sandwich + Tea",
    lunch: "Chole Bhature + Raita + Jeera Rice + Chutney + Salad",
    snacks: "French Fries + Cold Coffee",
    dinner: "Kadhai Paneer / Egg Curry + Rice + Roti",
  },
];

export default function MessMenu() {
  return (
    <section className="p-4 md:p-0 md:p-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Weekly Mess Menu
      </h2>

      <div className="flex flex-col gap-4">
        {menu.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 border-l-4 border-indigo-600"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.day}</h3>

            <div className="space-y-1">
              <p>
                <span className="font-bold text-indigo-600">Breakfast:</span>{" "}
                {item.breakfast}
              </p>
              <p>
                <span className="font-bold text-indigo-600">Lunch:</span>{" "}
                {item.lunch}
              </p>
              <p>
                <span className="font-bold text-indigo-600">Snacks:</span>{" "}
                {item.snacks}
              </p>
              <p>
                <span className="font-bold text-indigo-600">Dinner:</span>{" "}
                {item.dinner}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}