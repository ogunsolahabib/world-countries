import React from "react";
import Country from "./Country";
class CountriesContainer extends React.Component {
  render() {
    return (
      <div>
        <section id="countries-container">
          <div className="ui link cards">
            {this.props.countries.map((country, i) => {
              return <Country info={country} key={i} />;
            })}
            {/* <Country /> */}
          </div>
        </section>
      </div>
    );
  }
}
export default CountriesContainer;
