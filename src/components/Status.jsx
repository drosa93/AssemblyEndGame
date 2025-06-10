import React from "react";
import {languages} from "../languages"
import { getFarewellText } from "../utils";

export default function Status(props) {



  let status;

  if (props.gameIsWon) {
    status = (
      <section
        className="status"
        style={{
          backgroundColor: "#10A95B",
        }}
      >
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
    );
  } else if (props.gameIsLost) {
    status = (
      <section
        className="status"
        style={{
          backgroundColor: "#BA2A2A",
        }}
      >
        <h2>Game Over</h2>
        <p>You lose! Better start learning Assembly 😭</p>
      </section>
    );
  } else if (props.isLastGuessIncorrect && !props.GameIsLost) {
    status = (
      <section
        className="status"
        style={{
          backgroundColor: "#7A5EA7",
        }}
      >
        <p>{getFarewellText(languages[props.wrongGuessCount - 1].name)}</p>
      </section>
    );
  } else {
    <section className="status"></section>;
  }

  return <>{status}</>;
}
