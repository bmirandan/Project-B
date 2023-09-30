export type ValidSizesT = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type ValidTypesT = 'shirts' | 'pants' | 'hoodies' | 'hats';

export type ProductT = {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizesT[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypesT;
  gender: 'men' | 'women' | 'kid' | 'unisex';
};
