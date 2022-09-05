import React from "react";
import NavBar from "./Components/nav/NavBar";
import "./app.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Row1 from "./Components/RowPost/Row1";
function App() {
  return (
    <div className="main">
      <NavBar />
      <Banner />
      <RowPost />
      <Row1 />
    </div>
  );
}

export default App;
