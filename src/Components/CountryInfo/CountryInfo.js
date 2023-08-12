import React from "react";
import BorderCountriesSection from "./BorderCountriesSection";
class CountryInfo extends React.Component {
  render() {
    const formatNumber = (x) => {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    };
    const info = this.props.country
      ? {
          flag: this.props.country.flags.svg,
          name: this.props.country.name.official,
          nativeName: Object.values(this.props.country.name.nativeName)[0]
            .official,
          population: formatNumber(this.props.country.population),
          region: this.props.country.region,
          subRegion: this.props.country.subRegion,
          capital: this.props.country.capital,
          topLevelDomain: this.props.country.tld && this.props.country.tld[0],
          currencies:
            this.props.country.currencies.ISK &&
            this.props.country.currencies.ISK.name,
          languages: Object.values(this.props.country.languages),
        }
      : {};
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
                      {info.topLevelDomain}
                    </li>
                    <li className="item">
                      <span className="ui small header">Currencies: </span>
                      {info.currencies}
                    </li>
                    <li className="item">
                      <span className="ui small header">Languages: </span>
                      {Array.isArray(info.languages) &&
                        info.languages.map((cur, i) => {
                          return (
                            <span key={i}>
                              {cur} {i < info.languages.length - 1 ? ", " : ""}
                            </span>
                          );
                        })}
                    </li>
                  </div>
                </div>
              </div>
              <div className="ui content">
                <div className="ui stackable grid">
                  <span className="ui header six wide column">
                    Border Countries:
                  </span>
                  <div className="ten wide column">
                    <BorderCountriesSection
                      alphas={this.props.country.borders}
                    />
                  </div>
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
