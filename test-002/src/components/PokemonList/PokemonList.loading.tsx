import PokeCardSkeleton from '../PokeCard/PokeCard.loading';

export default function PokemonListSkeleton() {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-10">
      <PokeCardSkeleton />
      <PokeCardSkeleton />
      <PokeCardSkeleton />
      <PokeCardSkeleton />
      <PokeCardSkeleton />
    </div>
  );
}
