import React from "react";
import Headers from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white px-4 ">
      <Headers />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
