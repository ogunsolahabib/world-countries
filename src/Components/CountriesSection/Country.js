import React from "react";
import {Link} from "react-router-dom";
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
  const resizeName = () => {
    if (info.name.length > 26) {
      return {fontSize: "120%"};
    } else {
      return {fontSize: "140%"};
    }
  };

  return (
    <div className="card">
      <Link
        id={info.name}
        className="country element"
        to={"/country/" + info.name}
      >
        <div className="ui image">
          <img src={info.flag} alt={info.name} />
        </div>
        <div className="country-name-container content">
          <div
            style={info.name.length > 13 ? resizeName() : null}
            className="ui huge header name"
          >
            {info.name}
          </div>
          <div className="extra">
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
      </Link>
    </div>
    /* </Link> */
  );
};
export default Country;
