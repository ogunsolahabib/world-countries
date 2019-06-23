import React from "react";
import CountriesPage from "../Pages/CountriesPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <CountriesPage />;
            }}
          />
          <Route
            path="/region/:regionName"
            exact
            render={props => {
              const { regionName } = props.match.params;
              return <CountriesPage regionName={regionName} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
