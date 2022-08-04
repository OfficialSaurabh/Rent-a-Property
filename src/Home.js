import React, { useContext } from "react";
import Houses from "./component/Houses";
import { HouseContext } from "./context/HouseContext";
import { ImSpinner2 } from "react-icons/im";

function Home() {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto my-48  animate-spin text-4xl text-indigo-700" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="my-48 text-center text-3xl text-gray-400">
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className="bg-gray-100 pb-20">
      <div className="container mx-auto w-3/4 justify-center ">
        
        <div className="grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 ">
          {houses.map((house, index) => {
            return <Houses house={house} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
