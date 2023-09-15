
export const getFavorites = (): number[] => {
    if(typeof window === 'undefined') return [];

    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export const isFavorite = (id: number): boolean => {   
    return getFavorites().includes(id);
}

export const toggleFavorite = (id: number) => {
    if(typeof window === 'undefined') return;

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if(favorites.includes(id)){
        favorites = favorites.filter(favorite => favorite !== id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
        favorites.push(id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}
