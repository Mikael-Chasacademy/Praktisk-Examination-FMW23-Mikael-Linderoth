import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <main>
      <Navbar />
      {/*--Routing--*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
