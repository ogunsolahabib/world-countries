import React from "react";
import "../Style.css";
import CountriesPage from "../Pages/CountriesPage";
import CountryInfoPage from "../Pages/CountryInfoPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
class App extends React.Component {
  state = {
    stylePath: "darkmode.css",
    styleMode: "Dark"
  };
  switchTheme() {
    if (this.state.stylePath === "darkmode.css") {
      this.setState({stylePath: "lightmode.css", styleMode: "Light"});
    } else {
      this.setState({stylePath: "darkmode.css", styleMode: "Dark"});
    }
  }
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <CountriesPage
                  switchTheme={this.switchTheme.bind(this)}
                  stylePath={this.state.stylePath}
                  styleMode={this.state.styleMode}
                />
              );
            }}
          />
          <Route
            path="/region/:regionName"
            exact
            render={props => {
              const {regionName} = props.match.params;
              return (
                <CountriesPage
                  regionName={regionName}
                  switchTheme={this.switchTheme.bind(this)}
                  stylePath={this.state.stylePath}
                  styleMode={this.state.styleMode}
                />
              );
            }}
          />

          <Route
            path="/country/:countryName"
            exact
            render={props => {
              const {countryName} = props.match.params;
              return (
                <CountryInfoPage
                  countryName={countryName}
                  switchTheme={this.switchTheme.bind(this)}
                  stylePath={this.state.stylePath}
                  styleMode={this.state.styleMode}
                />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
