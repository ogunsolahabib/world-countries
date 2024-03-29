import React from "react";
import BorderCountriesSection from "./BorderCountriesSection";
import Map from "./Map";
class CountryInfo extends React.Component {
  // console.log(props.country);

  render() {
    const formatNumber = x => {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    };
    const info = {
      flag: this.props.country.flags.png,
      name: this.props.country.name.common,
      nativeName: Object.values(this.props.country.name.nativeName)[0].common,
      population: formatNumber(this.props.country.population),
      region: this.props.country.region,
      subRegion: this.props.country.subregion,
      capital: this.props.country.capital,
      topLevelDomain: this.props.country.tld[0],
      currencies: this.props.country.currencies?  Object.values(this.props.country.currencies)[0].name:'',
      languages: Object.values(this.props.country.languages),
      lat: this.props.country.latlng[0],
      lng: this.props.country.latlng[1]
    };
    return (
      <div>
        <section id="country-info">
          <div className="ui container stackable grid">
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
                      {info.languages.map((cur, i) => {
                        return (
                          <span key={i}>
                            {cur}{" "}
                            {i < info.languages.length - 1 ? ", " : ""}
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
            <div
              className="sixteen wide column"
              style={{height: "80vh", marginBottom: "20vh"}}
            >
              <Map lat={info.lat} lng={info.lng} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default CountryInfo;
