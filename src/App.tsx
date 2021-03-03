import React from "react";
import InvoicePage from "./components/InvoicePage";
import ButtonAppBar from "./components/ButtonAppBar";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <ButtonAppBar />
      <div className="app">
        <InvoicePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
