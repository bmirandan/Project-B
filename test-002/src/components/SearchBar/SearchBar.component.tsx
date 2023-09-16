'use client';
import { useEffect, useState } from 'react';

import { Input } from '@nextui-org/react';
import { SearchIcon } from '../../assets/search.icon';

type SearchBarT = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarT) {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(searchText);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchText, onSearch]);

  return (
    <Input
      value={searchText}
      onValueChange={setSearchText}
      label="Search"
      isClearable
      radius="lg"
      classNames={{
        label: 'text-white/90',
        input: ['bg-transparent', 'text-white/90', 'placeholder:text-white/60'],
        innerWrapper: 'bg-transparent',
        inputWrapper: [
          'shadow-xl',
          'bg-default-200/50',
          'dark:bg-default/60',
          'backdrop-blur-xl',
          'backdrop-saturate-200',
          'hover:bg-default-200/70',
          'dark:hover:bg-default/70',
          'group-data-[focused=true]:bg-default-200/50',
          'dark:group-data-[focused=true]:bg-sky-900/60',
          '!cursor-text',
        ],
      }}
      placeholder="Type to search..."
      startContent={
        <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
      }
    />
  );
}
