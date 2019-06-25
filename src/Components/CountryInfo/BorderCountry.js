import React from "react";
import { Link } from "react-router-dom";
const BorderCountry = props => {
  return (
    <Link to={"/country/" + props.countryName}>
      <button className="ui button element">{props.countryName}</button>
    </Link>
  );
};
export default BorderCountry;
