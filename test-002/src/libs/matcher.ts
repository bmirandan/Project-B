export const matchPokeId = (url: string, index: number) => {
    return Number((url.match(/\/(\d+)\/$/) ??[,index])[1]);
}