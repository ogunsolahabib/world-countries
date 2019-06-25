import React from "react";

const Header = props => {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href={"/" + props.stylePath} />
      <header className="ui menu" id="header">
        <div className="ui container">
          <div className="ui left item header">Where in the world?</div>
          <div className="ui right item ">
            <button
              className="ui labeled icon button element"
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
