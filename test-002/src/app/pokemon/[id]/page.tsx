import axios from 'axios';
import { PokemonDetail } from '../../../components/PokemonDetail';
import { PokemonResponseT } from '@/types/listPokemon';
import { matchPokeId } from '@/libs/matcher';

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  console.log('hehe');
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { count } = await res.json();

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count - 500}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { results } = await response.json();

  const pokemons = results.map(({ url }: PokemonResponseT, index: number) => ({
    id: matchPokeId(url, index + 1).toString(),
  }));

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
    <div className="flex justify-center ">
      <PokemonDetail {...pokemon} />
    </div>
  );
}
