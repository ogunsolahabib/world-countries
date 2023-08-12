import React from "react";
import BorderCountry from "./BorderCountry";
import Axios from "axios";

class BorderCountriesSection extends React.Component {
  state = { names: [] };
  componentDidMount() {
    if(this.alphas){

      for (let i = 0; i < this.props.alphas.length; i++) {
        Axios.get(
          "https://restcountries.com/v3.1/alpha/" + this.props.alphas[i]
          ).then((response) => {
            if(response.data[0]){
              this.setState({
                names: [...this.state.names, response.data[0].name.common],
              });
            }
          });
        }
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
    if (prevProps.alphas && this.props.alphas && this.props.alphas !== prevProps.alphas ) {
      this.setState({ names: [] });
      for (let i = 0; i < this.props.alphas.length; i++) {
        Axios.get(
          "https://restcountries.com/v3.1/alpha/" + this.props.alphas[i]
        ).then((response) => {
          console.log(response);
          this.setState({
            names: [...this.state.names, response.data.name],
          });
        });
      }
    }
  }
}
export default BorderCountriesSection;
