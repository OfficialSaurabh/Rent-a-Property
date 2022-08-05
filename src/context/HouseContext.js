import React, { createContext, useState, useEffect } from "react";

//  data
import { housesData } from "../data";

export const HouseContext = createContext();

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
    console.log("date 1",Date.parse(date));
    console.log("date 2",Date.parse(date[1]));
  }, [date]);


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
      return str.split(" ").includes("All") ;
    };
    const isDateDefault = str => {
      return isNaN(str);
    };
    //  1st Price as min and 2nd price as max
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);
    const startDate = Date.parse(date[0]);
    const endDate = Date.parse(date[1]);

    const newHouses = housesData.filter(house => {
      const housePrice = parseInt(house.price);
      const houseDate = Date.parse(house.date);
      console.log("HOUSEDATE", house.id, houseDate);
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        houseDate >= startDate &&
        houseDate <= endDate && !isNaN(houseDate)
      ) {
        return house;
      }
      // all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)   ) {
        return house;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price) ) {
        return house.country === country;
      }
      
      // // property is not default
      // if (!isDefault(property) && isDefault(country) && isDefault(price) && isDateDefault(date) ) {
      //   return house.type === property;
      // }
      // // // date is not default
      // if (!isDateDefault(date) && isDefault(country) && isDefault(property) && isDefault(price) ) {
      //   if (houseDate >= startDate && houseDate <= endDate) {
      //     return house;
      //   }
      // }
      // // price is not default
      // if (!isDefault(price) && isDefault(country) && isDefault(property) && isDateDefault(date)) {
      //   if (housePrice >= minPrice && housePrice <= maxPrice) {
      //     return house;
      //   }
      // }
      // // country and property is not default
      // if (!isDefault(country) && !isDefault(property) && isDefault(price) ) {
      //   return house.country === country && house.type === property;
      // }
      // // country and date is not default
      // if (!isDefault(country) && isDefault(property) && isDefault(price) && !isDateDefault(date)) {
      //   if (houseDate >= startDate && houseDate <= endDate) {
      //     return house.country === country;
      //   }
      // }
      // // country and price is not default
      // if (!isDefault(country) && isDefault(property) && !isDefault(price) ) {
      //   if (housePrice >= minPrice && housePrice <= maxPrice) {
      //     return house.country === country;
      //   }
      // }
      // // property and price is not default
      // if (isDefault(country) && !isDefault(property) && !isDefault(price) ) {
      //   if (housePrice >= minPrice && housePrice <= maxPrice) {
      //     return house.type === property;
      //   }
      // }
      //  // property and date is not default
      //  if (isDefault(country) && !isDefault(property) && isDefault(price) && !isDateDefault(date)) {
      //   if (houseDate >= startDate && houseDate <= endDate) {
      //     return house.type === property;
      //   }
      // }
      //  // price and date is not default
      //  if (isDefault(country) && isDefault(property) && !isDefault(price) && !isDateDefault(date)) {
      //   if (houseDate >= startDate && houseDate <= endDate) {
      //     return house;
      //   }
      // }
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
