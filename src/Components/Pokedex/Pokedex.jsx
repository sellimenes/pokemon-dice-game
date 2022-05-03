import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "../Pokecard/Pokecard";

export default class Pokedex extends Component {
  render() {
    return (
      <div>
        <Pokecard />
      </div>
    );
  }
}
