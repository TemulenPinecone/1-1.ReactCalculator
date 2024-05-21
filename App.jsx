import { useState } from "react";
import "./styles/global.css";
import Screen from "./components/Screen";
import { numberBtns } from "./utils/constants";

export default function App() {
  return (
    <div className="mainCalc">
      <Screen />
      <div className="buttons">
        <div className="numbers">
          {numberBtns.map((val, index) => {
            return <Button />;
          })}
        </div>
      </div>
    </div>
  );
}
