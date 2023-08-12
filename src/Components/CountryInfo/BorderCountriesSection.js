import React from "react";
import BorderCountry from "./BorderCountry";
import Axios from "axios";

class BorderCountriesSection extends React.Component {
  state = { names: [] };
  componentDidMount() {
    for (let i = 0; i < (this.props.alphas || []).length; i++) {
      Axios.get(
        "https://restcountries.com/v3.1/alpha/" + this.props.alphas[i]
      ).then((response) => {
        response.data &&
          this.setState({
            names: [...this.state.names, response.data[0].name.official],
          });
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.names.map((cur, i) => {
          return <BorderCountry countryName={cur} key={i} />;
        })}
      </div>
    );
  }
  componentDidUpdate(prevProps) {
    if (prevProps.alphas && this.props.alphas !== prevProps.alphas) {
      this.setState({ names: [] });
      for (let i = 0; i < this.props.alphas.length; i++) {
        Axios.get(
          "https://restcountries.com/v3.1/alpha/" + this.props.alphas[i]
        ).then((response) => {
          this.setState({
            names: [...this.state.names, response.data.name],
          });
        });
      }
    }
  }
}
export default BorderCountriesSection;
