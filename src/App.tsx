import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const clickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const clickReturn = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <main>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div>
        {pokemonIndex < pokemonList.length - 1 ? (
          <button type="button" onClick={clickNext}>
            Suivant
          </button>
        ) : (
          "il y a bien un précédent"
        )}
      </div>
      <div>
        {pokemonIndex > 0 ? (
          <button type="button" onClick={clickReturn}>
            Précédent
          </button>
        ) : (
          "il y a bien un suivant"
        )}
      </div>
    </main>
  );
}

export default App;
