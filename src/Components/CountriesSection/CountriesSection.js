import React from "react";
import Country from "./Country";
const CountriesSection = props => {
  return (
    <div>
      <section id="countries-section">
        <div className="ui link cards">
          {props.countries.map((country, i) => {
            return <Country info={country} key={i} />;
          })}
          {/* <Country /> */}
        </div>
      </section>
    </div>
  );
};
export default CountriesSection;
