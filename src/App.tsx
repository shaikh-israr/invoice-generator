import React from "react";
import InvoicePage from "./components/InvoicePage";
import ButtonAppBar from "./components/ButtonAppBar";
import Footer from "./components/Footer";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <div className="app">
        <InvoicePage />
      </div>
      <hr />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-md-9 offset-md-3">
          <About />
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
