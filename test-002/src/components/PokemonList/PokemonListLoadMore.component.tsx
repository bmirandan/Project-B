"use client";

import { useEffect, useRef, useState } from 'react';
import { PokemonT } from '../../types/listPokemon';
import { delay, useInView } from 'framer-motion';
import { fetchPokemons } from '@/actions/fetch-pokemons';
import PokemonList from './PokemonList.component';
import PokemonListSkeleton from './PokemonList.loading';

type PokemonListLoadMoreT = {
    filter: string;
}

export function PokemonListLoadMore({ filter }: PokemonListLoadMoreT) {
    const [pokemons, setPokemons] = useState<PokemonT[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pagesLoaded, setPagesLoaded] = useState(0);
    const [maxFetch, setMaxFetch] = useState(0);

    const ref = useRef(null)
    const isInView = useInView(ref)

    const loadMorePokemons = async () => {
        await delay(async () => {
            const nextPage = pagesLoaded + 1;
            const newPokemons = await fetchPokemons(nextPage) ?? [];
            setPokemons((prevPokemons: PokemonT[]) => [...prevPokemons, ...newPokemons]);
            setPagesLoaded(nextPage);
            setIsLoading(false);
        }, 2000
        );
    }

    useEffect(() => {
        if (isInView && !isLoading && maxFetch !== pokemons.length && filter === '') {
            setIsLoading(true);
            loadMorePokemons();
        }
    }, [isInView]);

    useEffect(() => {
        const getPokemons = async () => {
            setIsLoading(true);

            const response = await fetch('/api/pokemons');
            const { pokemons, count } = await response.json();

            setIsLoading(false);
            setMaxFetch(count);
            setPokemons(pokemons);
        };
        getPokemons();
    }, []);

    useEffect(() => {
        const getPokemons = async () => {

            setIsLoading(true);
            
            
            const response = (filter === '') ? await fetch('/api/pokemons') : await fetch('/api/allPokemon');
            const { pokemons } = await response.json();
            const pokeList = pokemons.filter(({ name }: PokemonT) => name.includes(filter))
            
            setPagesLoaded(0);
            setPokemons(pokeList);
            setIsLoading(false);

        };
        getPokemons();
    }, [filter]);

    return <>
        <PokemonList pokemons={pokemons} isLoading={isLoading} />
        {isLoading && <PokemonListSkeleton />}
        < div ref={ref}></div>
    </>
}