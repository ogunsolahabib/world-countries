import React from "react";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";

import CountryInfo from "../Components/CountryInfo/CountryInfo";
import Axios from "axios";
class CountryInfoPage extends React.Component {
  state = { isLoading: true, country: null, borders: [] };
  checkLoad() {
    if (this.state.isLoading) {
      return <Loader />;
    } else {
      return (
        <CountryInfo
          country={this.state.country}
          countryName={this.props.countryName}
        />
      );
    }
  }
  componentDidMount() {
    Axios.get(
      "https://restcountries.eu/rest/v2/name/" +
        this.props.countryName +
        "?fullText=true"
    ).then(response => {
      if (response) {
        this.setState({ isLoading: false, country: response.data[0] });
        console.log(this.state.country);
        for (let i = 0; i < this.state.country.borders; i++) {
          Axios.get("https://restcountries.eu/rest/v2/alpha/" + i).then(
            response => {
              this.setState({ borders: response.data });
              console.log(this.state.borders);
            }
          );
        }
      }
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
        <div className="ui container content">
          <Link to="/" className="ui labeled icon button back-btn">
            <i className="long arrow left alternate large icon" />
            Back
          </Link>
          {this.checkLoad()}
        </div>
      </div>
    );
  }
  componentDidUpdate(prevProps) {
    if (this.props.countryName !== prevProps.countryName) {
      Axios.get(
        "https://restcountries.eu/rest/v2/name/" +
          this.props.countryName +
          "?fullText=true"
      ).then(response => {
        if (response) {
          this.setState({ isLoading: false, country: response.data[0] });
          console.log(this.state.country);
          for (let i = 0; i < this.state.country.borders; i++) {
            Axios.get("https://restcountries.eu/rest/v2/alpha/" + i).then(
              response => {
                this.setState({ borders: response.data });
              }
            );
          }
        }
      });
    }
  }
}
export default CountryInfoPage;
