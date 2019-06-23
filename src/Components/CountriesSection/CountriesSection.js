import React from "react";
import { Link } from "react-router-dom";

import CountriesContainer from "./CountriesContainer";

class CountriesSection extends React.Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <section>
            <div className="ui container">
              <div className="ui stackable grid">
                <div className="ui eight wide column">
                  <div className="ui left icon input element">
                    <i className="search icon" />
                    <input type="text" placeholder="Search for a country..." />
                  </div>
                </div>
                <div className="ui six wide column">
                  <div className="ui compact right floated menu element">
                    <div id="filter" className="ui simple dropdown item">
                      Filter by Region
                      <i className="dropdown icon" />
                      <div className="menu">
                        <Link to="/" className="item">
                          All
                        </Link>
                        <Link to="/region/africa" className="item">
                          Africa
                        </Link>

                        <Link to="/region/americas" className="item">
                          Americas
                        </Link>

                        <Link to="/region/asia" className="item">
                          Asia
                        </Link>

                        <Link to="/region/europe" className="item">
                          Europe
                        </Link>

                        <Link to="/region/oceania" className="item">
                          Oceania
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <CountriesContainer countries={this.props.countries} />
        </div>
      </div>
    );
  }
}
export default CountriesSection;
