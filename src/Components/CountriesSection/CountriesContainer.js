import React from "react";
import Country from "./Country";
import LettersBar from "./LettersBar";
class CountriesContainer extends React.Component {
  checkEmpty() {
    if (this.props.countries.length > 0) {
      return (
        <div className="ui grid">
          <div className="fourteen wide column">
            <div className="ui stackable cards">
              {this.props.countries.map((country, i) => {
                return <Country info={country} key={i} />;
              })}
            </div>
          </div>
          <div className="two wide column">
            <LettersBar countries={this.props.countries} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui huge header no-results">No Countries Found</div>
      );
    }
  }
  render() {
    return <section id="countries-container">{this.checkEmpty()}</section>;
  }
}
export default CountriesContainer;
