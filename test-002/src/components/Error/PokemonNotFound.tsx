'use client'; // Error components must be Client Components

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import NoFavorites from '@/app/favorites/NoFavorites.component';

export default function PokemonNotFound() {
  const router = useRouter();

  return (
    <div>
      <NoFavorites title="Pokemon not found">
        <Button color="primary" onClick={() => router.push('/')}>
          Go Catch ’Em All!
        </Button>
      </NoFavorites>
    </div>
  );
}
