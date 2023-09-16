import axios from 'axios';
import { PokemonDetail } from '../../../components/PokemonDetail';

export const dynamicParams = false;

export async function generateStaticParams() {
  const pokemons = [...Array(151)].map((_, index) => ({ id: `${index + 1}` }));

  return pokemons;
}

async function getPokemon({ params: { id } }: PokemonPageT) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return data;
}

type PokemonPageT = {
  params: {
    id: string;
  };
};

export default async function PokemonPage({ params: { id } }: PokemonPageT) {
  const pokemon = await getPokemon({ params: { id } });
  return (
    <div className="flex justify-center h-screen">
      <PokemonDetail {...pokemon} />
    </div>
  );
}
