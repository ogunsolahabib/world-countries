import React from "react";
class LettersBar extends React.Component {
  scrollUp() {
    window.scrollTo(0, 0);
    document.querySelector("#search-field").focus();
  }
  scrollToLetter(letter) {
    let results = this.props.countries
      .map((country) => country.name.official)
      .filter((name) => name.startsWith(letter));
    return "#" + results[0];
  }
  componentDidMount() {
    window.addEventListener("scroll", (e) => {
      if (document.querySelector(".letterNav") && window.pageYOffset > 100) {
        document.querySelector(".letterNav").classList.add("scrolled");
      } else if (document.querySelector(".letterNav")) {
        document.querySelector(".letterNav").classList.remove("scrolled");
      }
      e.preventDefault();
    });
  }
  componentWillUnmount() {
    if (!window.location.pathname === "/") {
      const unscroll = () => {};
      window.removeEventListener("scroll", unscroll);
    }
  }
  render() {
    return (
      <div className="letterNav">
        <div>
          <button className="ui icon button" onClick={this.scrollUp.bind(this)}>
            <i className="search icon" style={{ fontSize: "10px" }} />
          </button>
        </div>
        <div>
          <a href={this.scrollToLetter("A")}>A</a>
        </div>
        <div>
          <a href={this.scrollToLetter("B")}>B</a>
        </div>
        <div>
          <a href={this.scrollToLetter("C")}>C</a>
        </div>
        <div>
          <a href={this.scrollToLetter("D")}>D</a>
        </div>
        <div>
          <a href={this.scrollToLetter("E")}>E</a>
        </div>
        <div>
          <a href={this.scrollToLetter("F")}>F</a>
        </div>
        <div>
          <a href={this.scrollToLetter("G")}>G</a>
        </div>
        <div>
          <a href={this.scrollToLetter("H")}>H</a>
        </div>
        <div>
          <a href={this.scrollToLetter("I")}>I</a>
        </div>
        <div>
          <a href={this.scrollToLetter("J")}>J</a>
        </div>
        <div>
          <a href={this.scrollToLetter("K")}>K</a>
        </div>
        <div>
          <a href={this.scrollToLetter("L")}>L</a>
        </div>
        <div>
          <a href={this.scrollToLetter("M")}>M</a>
        </div>
        <div>
          <a href={this.scrollToLetter("N")}>N</a>
        </div>
        <div>
          <a href={this.scrollToLetter("O")}>O</a>
        </div>
        <div>
          <a href={this.scrollToLetter("P")}>P</a>
        </div>
        <div>
          <a href={this.scrollToLetter("Q")}>Q</a>
        </div>
        <div>
          <a href={this.scrollToLetter("R")}>R</a>
        </div>
        <div>
          <a href={this.scrollToLetter("S")}>S</a>
        </div>
        <div>
          <a href={this.scrollToLetter("T")}>T</a>
        </div>
        <div>
          <a href={this.scrollToLetter("U")}>U</a>
        </div>
        <div>
          <a href={this.scrollToLetter("V")}>V</a>
        </div>
        <div>
          <a href={this.scrollToLetter("W")}>W</a>
        </div>
        <div>
          <a href={this.scrollToLetter("X")}>X</a>
        </div>
        <div>
          <a href={this.scrollToLetter("Y")}>Y</a>
        </div>
        <div>
          <a href={this.scrollToLetter("Z")}>Z</a>
        </div>
      </div>
    );
  }
}
export default LettersBar;
