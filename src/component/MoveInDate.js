import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { RiCalendarEventLine } from "react-icons/ri";
import { HouseContext } from '../context/HouseContext';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Date() {
  const [dateRange, setDateRange] = useState([],[]);
  // const [dateRange, setDateRange] = useContext(HouseContext);
  // const [movein, setmovein] = useContext(HouseContext);
  //  const [movein, setmovein] = useState([]);
  //  console.log(movein)
  const [startDate, endDate] = dateRange;
 
  // console.log(dateRange)

  return (
    <div className="dropdown-btn text-left">
      <RiCalendarEventLine className="dropdown-icon-primary" />
      <div>
        <div className="py-1 text-sm font-medium text-gray-500 ">When</div>
        <DatePicker
          showYearDropdown
          scrollableYearDropdown
          dateFormat="MMMM d"
          placeholderText="Select Move-in Date"
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={update => {
            setDateRange(update);
            // setmovein(update);
          }}
          // onClick={() => setmovein(dateRange)}
        />
      </div>
    </div>
  );
}

export default Date;
