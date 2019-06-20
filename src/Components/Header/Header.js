import React from "react";
const Header = props => {
  return (
    <header className="ui menu" id="header">
      <div className="ui container">
        <div className="ui left item header">Where in the world?</div>
        <div className="ui right item ">
          <div className="ui labeled icon button element">
            <i className="moon icon" />
            <span>Light Mode</span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
