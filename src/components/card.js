import * as React from "react";
import { card, text, dateText } from "../styles/workshops.module.css";
import { Link } from "gatsby";

const Card = ({ cardData }) => {
  console.log(cardData);
  return (
    <article className={card}>
      <Link to={`/${cardData.slug}`}>{cardData.image}</Link>
      <div className={text}>
        <h3>
          <Link to={`/${cardData.slug}`}>{cardData.title}</Link>
        </h3>
        <h4>
          <span className={dateText}>{cardData.date ?? "TBD"}</span>
        </h4>
        <p>{cardData.description}</p>
      </div>
    </article>
  );
};

export default Card;
