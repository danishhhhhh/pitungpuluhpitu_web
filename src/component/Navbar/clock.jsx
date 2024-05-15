import React, { useEffect, useState } from "react";
import { FaRecordVinyl } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: 'numeric',
    hour12: true,
  };

  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const getGreeting = () => {
    const hours = time.getHours();
    if (hours >= 6 && hours < 12) {
      return "Good Morning";
    } else if (hours >= 12 && hours <= 18) {
      return "Good Afternoon";
    } else {
      return "Good Night";
    }
  };
  const getIcon = () => {
    const hours = time.getHours();
    if (hours >= 6 && hours < 18) {
      return   <FaSun className="text-yellow ml-2 mt-1 inline-flex items-center justify-center" />;
    }  else {
      return   <FaMoon className="text-navy ml-2 mt-1 inline-flex items-center justify-center" />;
    }
  };


  return (
    <div className="flex items-center justify-center bg-gray-800 text-navy">
      <div className="w-64">
        <h1 className="text-l font-bold font-poppins mb-2 flex justify-end">
          {getGreeting()} {getIcon()}
        
        

        </h1>

        <p className="text-l font-poppins flex justify-end">
          {time.toLocaleDateString("id-ID", dateOptions)}{" "}
          <FaRecordVinyl className="w-2 text-yellow mx-2 mt-0.5" />
          {time.toLocaleTimeString("id-ID", options)}
        </p>
      </div>
    </div>
  );
};

export default Clock;
