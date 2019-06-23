import React from "react";
import CountriesSection from "../Components/CountriesSection/CountriesSection";
import Loader from "../Components/Loader";

import Axios from "axios";

class CountriesPage extends React.Component {
  state = {
    stylePath: "darkmode.css",
    styleMode: "Dark",
    countries: [],
    isLoading: true
  };
  switchTheme() {
    if (this.state.stylePath === "darkmode.css") {
      this.setState({ stylePath: "lightmode.css", styleMode: "Light" });
    } else {
      this.setState({ stylePath: "darkmode.css", styleMode: "Dark" });
    }
  }
  componentDidMount() {
    Axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      this.setState({ countries: response.data, isLoading: false });
      console.log(this.state.countries);
    });
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href={"/" + this.state.stylePath}
        />
        <header className="ui menu" id="header">
          <div className="ui container">
            <div className="ui left item header">Where in the world?</div>
            <div className="ui right item ">
              <button
                className="ui labeled icon button element"
                onClick={this.switchTheme.bind(this)}
              >
                <i className="moon icon" />
                <span>{this.state.styleMode} Mode</span>
              </button>
            </div>
          </div>
        </header>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <CountriesSection
            countries={this.state.countries}
            style={this.state.stylePath}
          />
        )}
      </div>
    );
  }
  componentDidUpdate(prevProps) {
    if (this.props.regionName && this.props.regionName !== prevProps) {
      Axios.get(
        "https://restcountries.eu/rest/v2/region/" + this.props.regionName
      ).then(response => {
        this.setState({ countries: response.data, isLoading: false });
        console.log(this.state.countries);
      });
    }
  }
}

CountriesPage.defaultProps = {
  region: ""
};
export default CountriesPage;
