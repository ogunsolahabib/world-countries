import React from "react";
import CountriesSection from "../Components/CountriesSection/CountriesSection";

class CountriesPage extends React.Component {
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
                        <div className="item">Africa</div>
                        <div className="item">America</div>
                        <div className="item">Asia</div>
                        <div className="item">Europe</div>
                        <div className="item">Oceania</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <CountriesSection countries={this.props.countries} />
        </div>
      </div>
    );
  }
}
export default CountriesPage;
