import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";
import "./ApartmentCard.scss";

function ApartmentCard(props) {
  return (
  <Link to="/flat">
  <div className="apartment">
    <img src={props.imaeUrl} alt="" />
    <div className="apartment__subtitle">{props.title}</div>
    </div>
    </Link>
    );
}

export default ApartmentCard;