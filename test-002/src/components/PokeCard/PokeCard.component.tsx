'use client';
import { capitalize } from '../../libs/formater';

import { Card, CardHeader, CardFooter, Image, Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

type PokeCardT = {
  id: string;
  name: string;
  url: string;
  image: string;
};

export function PokeCard({ id, name, url, image }: PokeCardT) {
  const router = useRouter();

  return (
    <Card
      onPress={() => {
        router.push(`/pokemon/${id}`);
      }}
      isHoverable
      isFooterBlurred
      isPressable
      radius="lg"
      className="w-[auto] max-w-[300px] h-[300px] items-center border-none bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-indigo-900 hover:to-violet-600"
    >
      <CardHeader className="">{`#${id}`}</CardHeader>
      <div className="flex flex-col justify-center h-[200px]">
        <Image
          className="h-[100%] w-[100%] max-w-[200px] object-contain p-5"
          alt={`Pokemon image: ${name}`}
          src={image}
          isZoomed={true}
        />
      </div>
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{capitalize(name)}</p>
      </CardFooter>
    </Card>
  );
}
