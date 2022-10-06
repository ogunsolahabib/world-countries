import React from "react";
import {Link} from "react-router-dom";

const Header = props => {
  return (
    <div>
      <header id="header" className="ui menu">
        <link
          rel="stylesheet"
          type="text/css"
          href={process.env.PUBLIC_URL + "/" + props.stylePath}
        />
        <div className="ui container">
          <div className="ui left item header">
            <Link to="/">
              <i className="ui globe icon" />
              Where in the world?
            </Link>
          </div>
          <div className="ui right item">
            <button
              className="ui labeled icon button"
              onClick={props.switchTheme}
            >
              <i className="moon icon" />
              <span>{props.styleMode} Mode</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
