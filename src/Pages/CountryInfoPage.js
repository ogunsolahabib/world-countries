import React from "react";
const CountryInfoPage = props => {
  return (
    <div>
      <div className="ui container content">
        <section id="back-btn">
          <div className="ui labeled icon button element">
            <i className="long arrow left alternate large icon" />
            Back
          </div>
        </section>
        <section id="country-info">
          <div className="ui container stackable grid ">
            <div className="eight wide column">
              <div className="ui image">
                <img
                  src="https://via.placeholder.com/500x300"
                  alt="placeholder"
                />
              </div>
            </div>
            <div className="eight wide column">
              <div className="content">
                <div className="ui huge header">Belgium</div>
              </div>
              <div className="ui stackable grid">
                <div className="eight wide column">
                  <div className="ui content">
                    <li className="item">
                      <span className="ui small header">Native Name: </span>
                      Belgie
                    </li>
                    <li className="item">
                      <span className="ui small header">Population: </span>
                      11,319,511
                    </li>
                    <li className="item">
                      <span className="ui small header">Region: </span>Europe
                    </li>
                    <li className="item">
                      <span className="ui small header">Sub Region: </span>
                      Western Europe
                    </li>
                    <li className="item">
                      <span className="ui small header">Capital: </span>
                      Brussels
                    </li>
                  </div>
                </div>
                <div className="eight wide column">
                  <div className="ui content">
                    <li className="item">
                      <span className="ui small header">
                        Top Level Domain:{" "}
                      </span>
                      .de
                    </li>
                    <li className="item">
                      <span className="ui small header">Currencies: </span>
                      Euro
                    </li>
                    <li className="item">
                      <span className="ui small header">Languages: </span>
                      Dutch, French, German
                    </li>
                  </div>
                </div>
              </div>
              <div className="ui stackable grid">
                <span className="ui header six wide column">
                  Border Countries:{" "}
                </span>
                <div className="ten wide column">
                  {" "}
                  <button className="ui button element">France</button>
                  <button className="ui button element">Germany</button>
                  <button className="ui button element">Neitherlands</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default CountryInfoPage;
