import React from "react";
import BorderCountry from "./BorderCountry";
import Axios from "axios";

class BorderCountriesSection extends React.Component {
  state = { names: [] };
  componentDidMount() {
    for (let i = 0; i < this.props.alphas.length; i++) {
      Axios.get(
        "https://restcountries.eu/rest/v2/alpha/" + this.props.alphas[i]
      ).then(response => {
        console.log(response);
        this.setState({
          names: [...this.state.names, response.data.name]
        });
      });
    }
    console.log(this.state.names);
  }
  render() {
    return (
      <span>
        {this.state.names.map((cur, i) => {
          return <BorderCountry countryName={cur} key={i} />;
        })}
      </span>
    );
  }
  componentDidUpdate(prevProps) {
    if (prevProps.alphas && this.props.alphas !== prevProps.alphas) {
      this.setState({ names: [] });
      for (let i = 0; i < this.props.alphas.length; i++) {
        Axios.get(
          "https://restcountries.eu/rest/v2/alpha/" + this.props.alphas[i]
        ).then(response => {
          console.log(response);
          this.setState({
            names: [...this.state.names, response.data.name]
          });
        });
      }
    }
  }
}
export default BorderCountriesSection;
