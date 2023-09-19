// app/page.tsx
'use client';

import { useState, Suspense } from 'react';
import SearchBar from '@/components/SearchBar/SearchBar.component';
import PokemonListSkeleton from '@/components/PokemonList/PokemonList.loading';
import { PokemonListLoadMore } from '@/components/PokemonList/PokemonListLoadMore.component';

export default function Home() {
  const [searchWord, setSearchWord] = useState('');
  const handleSearch = (searchWord: string) => {
    setSearchWord(searchWord);
  };

  return (
    <div className="flex flex-col justify-center p-10 gap-20">
      <SearchBar onSearch={handleSearch} />
        <Suspense fallback={<PokemonListSkeleton />}>
          <PokemonListLoadMore filter={searchWord} />
        </Suspense>
    </div>
  );
}
