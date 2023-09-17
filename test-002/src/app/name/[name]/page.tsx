import axios from 'axios';
import { PokemonDetail } from '../../../components/PokemonDetail';

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1010');

  const pokemons = data.results.map(({ name }: { name: unknown }) => ({ name }));

  return pokemons;
}

async function getPokemon({ params: { name } }: PokemonPageT) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return data;
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
