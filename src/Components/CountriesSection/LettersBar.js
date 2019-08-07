import React from "react";
class LettersBar extends React.Component {
  state = { style: {} };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        document.querySelector(".letterNav").classList.add("scrolled");
      } else {
        document.querySelector(".letterNav").classList.remove("scrolled");
      }
    });
  }
  componentWillUnmount() {
    const unscroll = () => {};
    window.removeEventListener("scroll", unscroll);
  }
  scrollTo(letter) {
    let results = this.props.countries
      .map(country => country.name)
      .filter(name => name.startsWith(letter));
    return "#" + results[0];
  }
  render() {
    return (
      <div className="letterNav" style={this.state.style}>
        <div>
          <a href={this.scrollTo("A")}>A</a>
        </div>
        <div>
          <a href={this.scrollTo("B")}>B</a>
        </div>
        <div>
          <a href={this.scrollTo("C")}>C</a>
        </div>
        <div>
          <a href={this.scrollTo("D")}>D</a>
        </div>
        <div>
          <a href={this.scrollTo("E")}>E</a>
        </div>
        <div>
          <a href={this.scrollTo("F")}>F</a>
        </div>
        <div>
          <a href={this.scrollTo("G")}>G</a>
        </div>
        <div>
          <a href={this.scrollTo("H")}>H</a>
        </div>
        <div>
          <a href={this.scrollTo("I")}>I</a>
        </div>
        <div>
          <a href={this.scrollTo("J")}>J</a>
        </div>
        <div>
          <a href={this.scrollTo("K")}>K</a>
        </div>
        <div>
          <a href={this.scrollTo("L")}>L</a>
        </div>
        <div>
          <a href={this.scrollTo("M")}>M</a>
        </div>
        <div>
          <a href={this.scrollTo("N")}>N</a>
        </div>
        <div>
          <a href={this.scrollTo("O")}>O</a>
        </div>
        <div>
          <a href={this.scrollTo("P")}>P</a>
        </div>
        <div>
          <a href={this.scrollTo("Q")}>Q</a>
        </div>
        <div>
          <a href={this.scrollTo("R")}>R</a>
        </div>
        <div>
          <a href={this.scrollTo("S")}>S</a>
        </div>
        <div>
          <a href={this.scrollTo("T")}>T</a>
        </div>
        <div>
          <a href={this.scrollTo("U")}>U</a>
        </div>
        <div>
          <a href={this.scrollTo("V")}>V</a>
        </div>
        <div>
          <a href={this.scrollTo("W")}>W</a>
        </div>
        <div>
          <a href={this.scrollTo("X")}>X</a>
        </div>
        <div>
          <a href={this.scrollTo("Y")}>Y</a>
        </div>
        <div>
          <a href={this.scrollTo("Z")}>Z</a>
        </div>
      </div>
    );
  }
}
export default LettersBar;
