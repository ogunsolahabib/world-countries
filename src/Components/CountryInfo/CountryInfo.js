import React from "react";
import BorderCountry from "./BorderCountry";
import Axios from "axios";
class CountryInfo extends React.Component {
  // console.log(props.country);
  state = { borderCountries: [] };
  componentDidMount() {
    console.log(this.props.country.borders);
    let bcs = [];
    for (let i = 0; i < this.props.country.borders.length; i++) {
      Axios.get(
        "https://restcountries.eu/rest/v2/alpha/" +
          this.props.country.borders[i]
      ).then(response => {
        bcs.push(response.data.name);
        console.log(bcs);
        this.setState({ borderCountries: bcs });
      });
    }

    // console.log(bcs);
  }

  render() {
    const info = {
      flag: this.props.country.flag,
      name: this.props.country.name,
      nativeName: this.props.country.nativeName,
      population: this.props.country.population,
      region: this.props.country.region,
      subRegion: this.props.country.subRegion,
      capital: this.props.country.capital,
      topLevelDomain: this.props.country.topLevelDomain[0],
      currencies: this.props.country.currencies[0].name,
      languages: this.props.country.languages,
      borderCountries: this.state.borderCountries
    };
    return (
      <div>
        <section id="country-info">
          <div className="ui container stackable grid ">
            <div className="eight wide column">
              <div className="ui image">
                <img src={info.flag} alt={info.name} />
              </div>
            </div>
            <div className="eight wide column">
              <div className="content">
                <div className="ui huge header">{info.name}</div>
              </div>
              <div className="ui stackable grid">
                <div className="eight wide column">
                  <div className="ui content">
                    <li className="item">
                      <span className="ui small header">Native Name: </span>
                      {info.nativeName}
                    </li>
                    <li className="item">
                      <span className="ui small header">Population: </span>
                      {info.population}
                    </li>
                    <li className="item">
                      <span className="ui small header">Region: </span>
                      {info.region}
                    </li>
                    <li className="item">
                      <span className="ui small header">Sub Region: </span>
                      {info.subRegion}
                    </li>
                    <li className="item">
                      <span className="ui small header">Capital: </span>
                      {info.capital}
                    </li>
                  </div>
                </div>
                <div className="eight wide column">
                  <div className="ui content">
                    <li className="item">
                      <span className="ui small header">
                        Top Level Domain:{" "}
                      </span>
                      {info.topLevelDomian}
                    </li>
                    <li className="item">
                      <span className="ui small header">Currencies: </span>
                      {info.currencies}
                    </li>
                    <li className="item">
                      <span className="ui small header">Languages: </span>
                      {info.languages.map((cur, i) => {
                        return (
                          <span key={i}>
                            {cur.name}{" "}
                            {i < info.languages.length - 1 ? ", " : ""}
                          </span>
                        );
                      })}
                    </li>
                  </div>
                </div>
              </div>
              <div className="ui stackable grid">
                <span className="ui header six wide column">
                  Border Countries:
                </span>
                <div className="ten wide column">
                  {info.borderCountries.map((cur, i) => {
                    return <BorderCountry countryName={cur} key={i} />;
                  })}
                  {/* <BorderCountry />
                <BorderCountry />
                <BorderCountry /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default CountryInfo;
