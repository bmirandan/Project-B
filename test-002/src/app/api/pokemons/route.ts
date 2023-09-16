import { NextResponse } from 'next/server'
 
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
  
export async function GET() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { results } = await res.json();

  const pokemons = results.map((poke: pokemonResponse, index: number) => {
    const idPokemon = index + 1;
    return {
      id: idPokemon,
      ...poke,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`,
    };
  });
 
  return NextResponse.json({ pokemons })
}