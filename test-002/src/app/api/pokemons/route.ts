import { NextResponse } from 'next/server'
import { PokemonResponseT } from '@/types/listPokemon';
import { matchPokeId } from '@/libs/matcher';

export async function GET() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { results, count } = await res.json();

  const pokemons = results.map((poke: PokemonResponseT, index: number) => {
    const idPokemon = matchPokeId(poke.url, index + 1);

    return {
      id: idPokemon,
      ...poke,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokemon}.png`,
    };
  });
 
  return NextResponse.json({ pokemons, count })
}