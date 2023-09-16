// app/page.tsx
'use client';

import { useState, Suspense } from 'react';
import SearchBar from '@/components/SearchBar/SearchBar.component';
import PokemonList from '@/components/PokemonList/PokemonList.component';
import PokemonListSkeleton from '@/components/PokemonList/PokemonList.loading';

export default function Home() {
  const [searchWord, setSearchWord] = useState('');
  const handleSearch = (searchWord: string) => {
    setSearchWord(searchWord);
  };

  return (
    <div className="flex flex-col justify-center  p-10 gap-20">
      <SearchBar onSearch={handleSearch} />
        <Suspense fallback={<PokemonListSkeleton />}>
          <PokemonList filter={searchWord} />
        </Suspense>
    </div>
  );
}
