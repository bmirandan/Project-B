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
      className="border-none bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-indigo-900 hover:to-violet-600 relative"
    >
      <CardHeader className="justify-start">{`#${id}`}</CardHeader>
      <Image
        alt={`Pokemon image: ${name}`}
        className="object-cover"
        height={100}
        src={image}
        width={200}
      />
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{capitalize(name)}</p>
      </CardFooter>
    </Card>
  );
}
