import React from "react";
import NavBar from "./component/NavBar"; 
import Foot from "./component/Footer";
import Home from "./Home";
import Search from "./component/Search";
function App() {
  return (
    <div className=" ">
      <NavBar/>
      <Search/>
      <Home/>
      <Foot/>
    </div>
  );
}

export default App;
