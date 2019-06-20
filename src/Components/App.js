import React from "react";
import CountriesPage from "../Pages/CountriesPage";
import Axios from "axios";

class App extends React.Component {
  state = { stylePath: "darkmode.css", styleMode: "Dark", countries: [] };
  switchTheme() {
    if (this.state.stylePath === "darkmode.css") {
      this.setState({ stylePath: "lightmode.css", styleMode: "Light" });
    } else {
      this.setState({ stylePath: "darkmode.css", styleMode: "Dark" });
    }
  }
  componentDidMount() {
    Axios.get(
      "https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital"
    ).then(response => {
      this.setState({ countries: response.data });
      console.log(this.state.countries);
    });
  }
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
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
        <CountriesPage countries={this.state.countries} />
      </div>
    );
  }
}
export default App;
