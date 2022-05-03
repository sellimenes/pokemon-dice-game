import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "../Pokecard/Pokecard";

export default class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="pokedex-winner">Winning Hand!</h1>;
    } else {
      title = <h1 className="pokedex-loser">Losing Hand!</h1>;
    }
    return (
      <div className="pokedex">
        {title}
        <h4>Total Power: {this.props.exp}</h4>
        <div className="pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              power={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
