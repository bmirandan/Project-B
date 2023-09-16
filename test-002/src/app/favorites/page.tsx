'use client';

import { useEffect } from 'react';
import NoFavorites from './NoFavorites.component';
import { getFavorites } from '@/libs/localFavorites';
import PokemonFavorites from './PokemonFavorites.component';

export default function HomePage() {
  const pokemons = getFavorites();

  useEffect(() => {}, [pokemons]);

  return (
    <div className=" w-screen h-screen p-5 ">
      {pokemons.length > 0 ? <PokemonFavorites pokemonIds={pokemons} /> : <NoFavorites />}
    </div>
  );
}
