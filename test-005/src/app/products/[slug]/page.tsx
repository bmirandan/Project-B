import { Grid, Typography, Box, Button, Chip } from '@mui/material';
import { initialData } from '../../../../database/products';
import { ProductT } from '../../../../interfaces/products';
import { useMemo } from 'react';
import Slider from '../../../../components/Slider/Slider.component';

export const metadata = {
  title: 'Teslo - shop',
  description: 'Shop the best products of the globe',
};

export default function ProductPageDetail(props: any) {
  const product = useMemo(
    () => initialData.products.find((product) => product.slug === props.params.slug) as ProductT,
    [props.params.slug]
  );
  console.log(product);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={7}></Grid>
      <Grid item xs={12} sm={6} md={5}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h1" component="h1">
            {product.title}
          </Typography>
          <Typography variant="h2" component="h2">
            {`$${product.price}`}
          </Typography>
          <Box>
            <Typography variant="subtitle2"> Cantidad </Typography>
          </Box>
          <Button color="secondary" className="circular-btn">
            Add to cart
          </Button>

          <Chip label="No hay disponibles" color="error" variant="outlined" />

          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2">Description:</Typography>
            <Typography variant="body1">{product.description}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
