interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}
export default function NavBar(
  { pokemonList }: NavBarProps,
  { setPokemonIndex }: NavBarProps,
) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => setPokemonIndex(index)}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}
