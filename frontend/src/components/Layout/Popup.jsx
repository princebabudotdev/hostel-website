import React, { useEffect, useState } from "react";

export default function TopNotification({ message, type = "success", duration = 3000 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!visible) return null;

  // Color based on type
  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : type === "warning"
      ? "bg-yellow-500"
      : "bg-blue-500";

  return (
    <div
      className={`
        fixed 
        top-4 
        left-1/2 transform -translate-x-1/2
        sm:top-4 sm:right-4 sm:left-auto sm:translate-x-0
        ${bgColor} 
        text-white 
        px-6 py-3 
        rounded-lg shadow-lg 
        z-50 
        animate-slideDown
        w-[90%] sm:w-auto
        text-center sm:text-left
      `}
    >
      {message}
    </div>
  );
}