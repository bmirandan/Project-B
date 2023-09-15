import Image from 'next/image';

export default function NoFavorites() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="col-span-full text-4xl font-medium">No hay favoritos</h1>
      <Image
        width={300}
        height={300}
        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
        alt="Ditto Image Pokemon"
      />
    </div>
  );
}
