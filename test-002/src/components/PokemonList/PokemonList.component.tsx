import { PokeCard } from '../PokeCard';
import PokemonListEmpty from './PokemonList.empty';
import { PokemonT } from '@/types/listPokemon';

type PokemonListT = {
  pokemons: PokemonT[];
  isLoading: boolean;
};

export default function PokemonList({ pokemons, isLoading }: PokemonListT) {
  return pokemons.length > 0 ? (
    <>
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center">
        {pokemons.map((pokemon) => (
          <PokeCard key={`poke-${pokemon.id}`} {...pokemon} />
        ))}
      </div>
    </>
  ) : !isLoading && <PokemonListEmpty />
}
