import * as React from "react";
import { cards } from "../styles/workshops.module.css";
import Card from "./card";

const CardList = ({ cardData }) => {
  const cardsJSX = cardData.map((cardData) => {
    return <Card key={cardData.id} cardData={cardData} />;
  });

  return <section className={cards}>{cardsJSX}</section>;
};

export default CardList;
