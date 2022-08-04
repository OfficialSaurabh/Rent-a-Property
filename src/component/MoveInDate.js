import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { RiCalendarEventLine } from "react-icons/ri";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Date() {
  const [Date, setDate] = useState(null);
  
  return (
    <div className="dropdown-btn text-left">
      <RiCalendarEventLine className="dropdown-icon-primary" />
      <div>
        <div className="py-1 text-sm font-medium text-gray-500 ">When</div>
        <DatePicker
          selected={Date}
          onChange={date => setDate(date)}
          showYearDropdown
          scrollableYearDropdown
          dateFormat="MMMM d, yyyy"
          placeholderText="Select Move-in Date"
        />
        
      </div>
    </div>
  );
}

export default Date;
