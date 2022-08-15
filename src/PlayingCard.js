import React, { useState } from "react";
import backOfCard from "./back.png";
import {useCard} from "./hooks";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {

  const [isFacingUp, setIsFacingUp] = useCard(true)

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={setIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
