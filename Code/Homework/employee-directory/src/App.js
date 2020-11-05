import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import Navbar from "./components/navbar/Navbar";
import PeopleCard from "./components/PeopleCard/PeopleCard";

function App() {
  return (
    <div>
      <Navbar />
      <PeopleCard />
      <PeopleCard />
    </div>
  );
}

export default App;
