import NoFavorites from '@/app/favorites/NoFavorites.component';

export default function PokemonListEmpty() {
  return (
    <div className="flex justify-center">
      <NoFavorites title="Pokemon not found" />
    </div>
  );
}
