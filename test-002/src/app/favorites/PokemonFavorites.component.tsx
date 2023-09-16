'use client';

import { useRouter } from 'next/navigation';
import { Image, Card, CardBody, CardFooter } from '@nextui-org/react';

type PokemonFavoritesT = {
  pokemonIds: number[];
};

export default function PokemonFavorites({ pokemonIds }: PokemonFavoritesT) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl">Favorite List</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 p-10 rounded-md gap-10">
        {pokemonIds.map((id) => (
          <Card
            shadow="sm"
            key={`card${id}`}
            isPressable
            onPress={() => router.push(`/pokemon/${id}`)}
            className="flex bg-gradient-to-b from-violet-900 to-fuchsia-900 p-5 rounded-md	"
          >
            <CardBody className="flex flex-col p-0 justify-center">
              <div className="flex flex-row justify-center">
                <Image
                  isZoomed
                  className=""
                  key={`poke-${id}`}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  alt="Pokemon Image"
                />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
