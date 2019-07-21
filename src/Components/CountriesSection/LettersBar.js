import React from "react";
const LettersBar = props => {
  const pos = {position: "fixed"};
  const countryNames = props.countries.map(country => country.name);
  const scroll = letter => {
    let results = countryNames.filter(name => name.startsWith(letter));

    return "#" + results[0];
  };

  const rmv = () => {
    window.location.hash = "";
  };

  return (
    <div className="letterNav" style={pos} onClick={rmv}>
      <div>
        <a href={scroll("A")}>A</a>
      </div>
      <div>
        <a href={scroll("B")}>B</a>
      </div>
      <div>
        <a onClick={rmv} href={scroll("C")}>
          C
        </a>
      </div>
      <div>
        <a href={scroll("D")}>D</a>
      </div>
      <div>
        <a href={scroll("E")}>E</a>
      </div>
      <div>
        <a href={scroll("F")}>F</a>
      </div>
      <div>
        <a href={scroll("G")}>G</a>
      </div>
      <div>
        <a href={scroll("H")}>H</a>
      </div>
      <div>
        <a href={scroll("I")}>I</a>
      </div>
      <div>
        <a href={scroll("J")}>J</a>
      </div>
      <div>
        <a href={scroll("K")}>K</a>
      </div>
      <div>
        <a href={scroll("L")}>L</a>
      </div>
      <div>
        <a href={scroll("M")}>M</a>
      </div>
      <div>
        <a href={scroll("N")}>N</a>
      </div>
      <div>
        <a href={scroll("O")}>O</a>
      </div>
      <div>
        <a href={scroll("P")}>P</a>
      </div>
      <div>
        <a href={scroll("Q")}>Q</a>
      </div>
      <div>
        <a href={scroll("R")}>R</a>
      </div>
      <div>
        <a href={scroll("S")}>S</a>
      </div>
      <div>
        <a href={scroll("T")}>T</a>
      </div>
      <div>
        <a href={scroll("U")}>U</a>
      </div>
      <div>
        <a href={scroll("V")}>V</a>
      </div>
      <div>
        <a href={scroll("W")}>W</a>
      </div>
      <div>
        <a href={scroll("X")}>X</a>
      </div>
      <div>
        <a href={scroll("Y")}>Y</a>
      </div>
      <div>
        <a href={scroll("Z")}>Z</a>
      </div>
    </div>
  );
};
export default LettersBar;
