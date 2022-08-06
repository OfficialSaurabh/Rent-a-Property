import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { RiCalendarEventLine } from "react-icons/ri";
import { HouseContext } from '../context/HouseContext';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Date() {
  const {setDate, date} = useContext(HouseContext)
  // const [dateRange, setDateRange] = useContext(HouseContext);
  // const [movein, setmovein] = useContext(HouseContext);
  //  const [movein, setmovein] = useState([]);
  //  console.log(movein)
  const [startDate, endDate] = date;
 
  // console.log(startDate, endDate)

  return (
    <div className="dropdown-btn text-left xl:z-20 lg:z-20">
      <RiCalendarEventLine className="text-2xl text-purple-700 sm:mr-5 mr-1 " />
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
            setDate(update);
            // setmovein(update);
          }}
          // onClick={() => setmovein(dateRange)}
        />
      </div>
    </div>
  );
}

export default Date;
