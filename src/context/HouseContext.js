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
  const [date, setdate] = useState([]);
  

  useEffect(() => {
    const allDate = houses.map(house => {
      return house.date;
    });

    setdate(allDate);
    console.log(allDate);
  }, []);

 
    // const startDate = Date.parse(date[0]);
    // const endDate = Date.parse(date[1]);

    // console.log(startDate);
    // console.log(endDate)
    

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
    //  1st Price as min and 2nd price as max
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    

    const newHouses = housesData.filter(house => {
      const housePrice = parseInt(house.price);
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
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

      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
