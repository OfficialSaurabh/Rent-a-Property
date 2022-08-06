import React, { createContext, useState, useEffect } from "react";

//  data
import { housesData } from "../data";

export const HouseContext = createContext();

function validCondition(isDefault, first, second, filterData, condition) {
  if (!isDefault(filterData)) {
    return condition(first, second);
  } else {
    return true;
  }
}
function validCondition2(
  isDefault,
  first,
  second,
  third,
  filterData,
  condition
) {
  if (!isDefault(filterData)) {
    console.log(condition(first, second, third));
    return condition(first, second, third);
  } else {
    return true;
  }
}

function validDateCondition(isDefault, first, second, third, condition) {
  if (!isDefault(first, second)) {
    return condition(first, second, third);
  } else {
    return true;
  }
}

function filterCountry(country, houseCountry) {
  return country === houseCountry;
}

function filterProperty(first, second) {
  return first === second;
}

function filterPrice(maxPrice, minPrice, price) {
  return price >= minPrice && price <= maxPrice;
}

function filterDate(startDate, endDate, date) {
  return date >= startDate && date <= endDate && !isNaN(date);
}

const HouseContextProvider = ({ children }) => {
  //get all data from data.js
  const [houses, setHouses] = useState(housesData);

  const [country, setCountry] = useState(" All Location ");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("All Type");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState(" All Range");
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState([], []);

 

  useEffect(() => {
    const allCountries = houses.map(house => {
      return house.country;
    });

    const uniqueCountries = ["Location All", ...new Set(allCountries)];

    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map(house => {
      return house.type;
    });

    const uniqueProperties = ["All Type", ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    const isDefault = str => {
      return str.split(" ").includes("All");
    };
    const isDateDefault = (startDate, endDate) => {
      return isNaN(startDate) || isNaN(endDate);
    };
    //  1st Price as min and 2nd price as max
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);
    const startDate = Date.parse(date[0]);
    const endDate = Date.parse(date[1]);

    const newHouses = housesData.filter(house => {
      const housePrice = parseInt(house.price);
      const houseDate = Date.parse(house.date);
      // console.log("HOUSEDATE", house.id, houseDate);
      if (
        validCondition(
          isDefault,
          house.country,
          country,
          country,
          filterCountry
        ) &&
        validCondition2(
          isDefault,
          maxPrice,
          minPrice,
          housePrice,
          price,
          filterPrice
        ) &&
        validDateCondition(
          isDateDefault,
          startDate,
          endDate,
          houseDate,
          filterDate
        ) &&
        validCondition(
          isDefault,
          house.type,
          property,
          property,
          filterProperty
        )
      ) {
        return house;
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
        date,
        setDate,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
