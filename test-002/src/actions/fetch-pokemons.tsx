"use server";
import { PokemonT, PokemonResponseT } from '../types/listPokemon';
import { matchPokeId } from '@/libs/matcher';

export async function fetchPokemons(page: number) {
    const perPage = 151;
    const offset = perPage * page;

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);
        const { results } = await res.json();

        const pokemons = results.map((poke: PokemonResponseT, index: number) => {
            const idPokemon = matchPokeId(poke.url, index + 1);
            return {
                id: idPokemon,
                ...poke,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokemon}.png`,
            };
        });
        return (pokemons);
    } catch (error) {
        return null;
    }
}