import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
