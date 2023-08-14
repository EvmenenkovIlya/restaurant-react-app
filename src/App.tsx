import React from "react";
import { Header } from "./components/Header/Header";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Footer } from "./components/Footer/Footer";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="main-container">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
