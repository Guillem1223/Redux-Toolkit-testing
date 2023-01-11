import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./component/Counter/Counter";
import Reader from "./component/Reader/Reader";

function App() {
  return (
    <div className="App">
      <Counter />
      <Reader />
    </div>
  );
}

export default App;
