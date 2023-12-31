'use client';

import { useEffect, useState } from 'react';
import { Avatar, Card, CardBody, Image, Button, Progress, CardFooter } from '@nextui-org/react';
import { IPokemon, Stat } from '../../types/pokemon';
import { isFavorite, toggleFavorite } from '@/libs/localFavorites';
import { HeartIcon } from '../../assets/heart.icon';

import { PokemonTable } from './PokemonTable.component';
import { capitalize } from '@/libs/formater';

export function PokemonDetail(pokemon: IPokemon) {
  const [liked, setLiked] = useState(isFavorite(pokemon.id));
  const [mainSprite, setMainSprite] = useState(pokemon.sprites.front_default);

  const handleLike = () => {
    setLiked((v) => !v);
    toggleFavorite(pokemon.id);
  };

  useEffect(() => {
    setLiked(isFavorite(pokemon.id));
  }, [pokemon]);

  return (
    <Card
      isBlurred
      className="border-none bg-background/30 dark:bg-default-00/50 max-w-[900px]  bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20"
      shadow="sm"
    >
      <CardBody className="overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
          <Image
            alt="Album cover"
            className="object-cover bg-gradient-to-r from-violet-500/40 to-fuchsia-500/40"
            height={200}
            shadow="md"
            src={mainSprite}
            width={300}
          />

          <div className="flex self-center">
            <div className="flex flex-col col-span-6 md:col-span-8 gap-10">
              <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-medium self-center"> {capitalize(pokemon.name)}</h1>
                <Button
                  isIconOnly
                  className="w-fit text-default-900/60 data-[hover]:bg-foreground/10 justify-self-end self-center"
                  radius="full"
                  variant="light"
                  onPress={() => handleLike()}
                >
                  <HeartIcon
                    className={liked ? '[&>path]:stroke-transparent' : ''}
                    fill={liked ? 'currentColor' : 'none'}
                  />
                </Button>
              </div>
              <div className="flex flex-col gap-5">
                <h3>Variants</h3>
                <div className="grid grid-cols-4 gap-5 items-center ml-5">
                  {pokemon.sprites.front_default && (
                    <Avatar
                      src={pokemon.sprites.front_default}
                      className="bg-indigo-700 w-20 h-20 text-large"
                      size="lg"
                      onClick={() => setMainSprite(pokemon.sprites.front_default)}
                    />
                  )}
                  {pokemon.sprites.front_female && (
                    <Avatar
                      src={pokemon.sprites.front_female}
                      className="bg-indigo-700 w-20 h-20 text-large"
                      size="lg"
                      onClick={() => setMainSprite(pokemon.sprites.front_female)}
                    />
                  )}
                  {pokemon.sprites.front_shiny && (
                    <Avatar
                      src={pokemon.sprites.front_shiny}
                      className="bg-indigo-700 w-20 h-20 text-large"
                      size="lg"
                      onClick={() => setMainSprite(pokemon.sprites.front_shiny)}
                    />
                  )}
                  {pokemon.sprites.front_shiny_female && (
                    <Avatar
                      ImgComponent={Image}
                      src={pokemon.sprites.front_shiny_female}
                      className="bg-indigo-700 w-20 h-20 text-large"
                      size="lg"
                      onClick={() => setMainSprite(pokemon.sprites.front_shiny_female)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 mb-10">
          <PokemonTable stats={pokemon.stats} />
        </div>
      </CardBody>
    </Card>
  );
}
