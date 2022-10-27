import React from "react";
import Router from "./Routers/Router";
import "./App.css";
import GlobalStyled from "./global/globalStyled";

function App() {
  return (
    <>
      <GlobalStyled />
      <Router />
    </>
  );
}

export default App;
