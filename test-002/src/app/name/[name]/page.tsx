import { PokemonDetail } from '../../../components/PokemonDetail';

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await res.json();
  const pokemons = data.results.map(({ name }: { name: unknown }) => name);

  return pokemons;
}

async function getPokemon({ params: { name } }: PokemonPageT) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await res.json();

  return pokemon;
}

type PokemonPageT = {
  params: {
    name: string;
  };
};

export default async function PokemonPageName({ params: { name } }: PokemonPageT) {
  const pokemon = await getPokemon({ params: { name } });
  return (
    <div className="flex justify-center h-screen">
      <PokemonDetail {...pokemon} />
    </div>
  );
}
