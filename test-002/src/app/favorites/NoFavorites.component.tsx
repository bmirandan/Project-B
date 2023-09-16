import Image from 'next/image';

type NoFavoritesT = {
  title?: string;
};
export default function NoFavorites({ title }: NoFavoritesT) {
  return (
    <div className="flex flex-col gap-20 items-center">
      <h1 className="col-span-full text-4xl font-medium">{title ?? 'No hay favoritos'}</h1>
      <Image
        width={300}
        height={300}
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        }
        alt="Ditto Image Pokemon"
      />
    </div>
  );
}
