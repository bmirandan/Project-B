// app/page.tsx
import { PokeCard } from '../components/PokeCard';

type pokemonResponse = {
  name: string;
  url: string;
};

type pokemon = {
  id: string;
  name: string;
  url: string;
  image: string;
};

async function getPokemons() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  const { results } = await res.json();

  const pokemons = results.map((poke: pokemonResponse, index: number) => {
    const idPokemon = index + 1;
    return {
      id: idPokemon,
      ...poke,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`,
    };
  });

  return pokemons;
}

export default async function Home() {
  const pokemons = await getPokemons();
  return (
    <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 p-10">
      {pokemons.map((pokemon: pokemon) => (
        <PokeCard key={`poke-${pokemon.id}`} {...pokemon} />
      ))}
    </div>
  );
}
