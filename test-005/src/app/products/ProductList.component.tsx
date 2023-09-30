import { Grid } from '@mui/material';
import { ProductT } from '../../../interfaces/products';
import ProductCard from './ProductCard.component';

type ProductListT = {
  products: ProductT[];
};

export default function ProductList({ products }: ProductListT) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </Grid>
  );
}
