import React from "react";
import { Link } from "react-router-dom";
const Country = props => {
  const formatNumber = x => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  const info = {
    flag: props.info.flag,
    name: props.info.name,
    population: formatNumber(props.info.population),
    region: props.info.region,
    capital: props.info.capital
  };
  return (
    <Link id={info.name} className="country" to={"/country/" + info.name}>
      <div className="ui link cards">
        <div className="card element">
          <div className="image">
            <img src={info.flag} alt={info.name} />
          </div>
          <div className="country-name-container content">
            <span className="ui huge header">{info.name}</span>
          </div>
          <div className="extra content">
            <li>
              <span className="ui header small">Population: </span>
              <span>{info.population}</span>
            </li>
            <li>
              <span className="ui header small">Region: </span>
              <span>{info.region}</span>
            </li>
            <li>
              <span className="ui header small">Capital: </span>
              <span>{info.capital}</span>
            </li>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Country;