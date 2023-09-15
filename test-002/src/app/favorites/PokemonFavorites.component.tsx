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

      <div className="grid grid-cols-4 p-10 rounded-md gap-10">
        {pokemonIds.map((id) => (
          <Card
            shadow="sm"
            key={`card${id}`}
            isPressable
            onPress={() => router.push(`/pokemon/${id}`)}
            className="bg-gradient-to-b from-violet-900 to-fuchsia-900 p-5 rounded-md"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                key={`poke-${id}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt="Pokemon Image"
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
