import PokeCardSkeleton from '../PokeCard/PokeCard.loading';

export default function PokemonListSkeleton() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
      <PokeCardSkeleton />
      <PokeCardSkeleton />
      <PokeCardSkeleton />
      <PokeCardSkeleton />
    </div>
  );
}
