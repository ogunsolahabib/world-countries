import React from "react";
import CountriesSection from "../Components/CountriesSection/CountriesSection";
import Loader from "../Components/Loader";

import Axios from "axios";
import Header from "../Components/Header";

class CountriesPage extends React.Component {
  state = {
    stylePath: this.props.stylePath,
    styleMode: this.props.styleMode,
    countries: [],

    isLoading: true
  };
  checkLoad() {
    if (this.state.isLoading) {
      return <Loader />;
    } else if (this.state.countries) {
      return <CountriesSection countries={this.state.countries} />;
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
        <Header
          switchTheme={this.props.switchTheme}
          stylePath={this.props.stylePath}
          styleMode={this.props.styleMode}
        />
        {this.checkLoad()}
      </div>
    );
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.regionName &&
      this.props.regionName !== prevProps.regionName
    ) {
      this.setState({ isLoading: true });
      Axios.get(
        "https://restcountries.eu/rest/v2/region/" + this.props.regionName
      ).then(response => {
        this.setState({ countries: response.data, isLoading: false });
        console.log(this.state.countries);
      });
    } else if (!this.props.regionName && prevProps.regionName) {
      this.setState({ isLoading: true });
      Axios.get("https://restcountries.eu/rest/v2/all").then(response => {
        this.setState({ countries: response.data, isLoading: false });
        console.log(this.state.countries);
      });
    }
  }
}
CountriesPage.defaultProps = { regionName: null };
export default CountriesPage;
