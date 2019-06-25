import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader";

import CountriesContainer from "./CountriesContainer";
import Axios from "axios";

class CountriesSection extends React.Component {
  state = {
    isLoading: false,
    value: "",
    typing: false,
    typingTimeout: 0,
    countries: []
  };

  searchCountry(value) {
    if (value !== "") {
      console.log(value);
      Axios.get("https://restcountries.eu/rest/v2/name/" + value).then(
        response => {
          this.setState({ isLoading: false, countries: response.data });
          console.log(response);
        }
      );
    }
  }
  changeName = event => {
    const self = this;

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    self.setState({
      value: event.target.value,
      typing: false,
      typingTimeout: setTimeout(function() {
        self.searchCountry(self.state.value);
      }, 1000)
    });
  };
  checkLoad() {
    if (this.state.isLoading) {
      return <Loader />;
    } else {
      return (
        <CountriesContainer
          countries={
            this.state.countries.length === 0
              ? this.props.countries
              : this.state.countries
          }
        />
      );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== "" && this.state.value !== prevState.value) {
      this.setState({ isLoading: true });
      this.searchCountry(this.state.value);
    }
  }
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
                    <input
                      value={this.state.value}
                      onChange={this.changeName.bind(this)}
                      type="text"
                      placeholder="Search for a country..."
                    />
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

          {this.checkLoad()}
        </div>
      </div>
    );
  }
}
export default CountriesSection;
