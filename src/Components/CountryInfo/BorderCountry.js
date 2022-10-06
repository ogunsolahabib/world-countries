import React from "react";
import { Link } from "react-router-dom";
const BorderCountry = props => {
  return (
    <Link
      to={"/country/" + props.countryName}
      className="ui button element border"
    >
      {props.countryName}
    </Link>
  );
};
export default BorderCountry;
