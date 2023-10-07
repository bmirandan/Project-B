'use client';

import { Grid, Typography, Link, CardActionArea, CardMedia, Box, Button } from '@mui/material';
import { initialData } from '../../../database/products';
import NextLink from 'next/link';
import ItemCounter from '../../../components/ItemCounter/ItemCounter.component';

const productsInCart = initialData.products.slice(0, 3);

type CarListT = {
  editable?: boolean;
};
export default function CartList({ editable = false }: CarListT) {
  return (
    <>
      {productsInCart.map((product) => (
        <Grid container key={product.slug} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <NextLink href={`/products/${product.slug}`} legacyBehavior>
              <Link>
                <CardActionArea>
                  <CardMedia image={`/products/${product.images[0]}`} component="img" sx={{ borderRadius: '5px' }} />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Size: <strong>M</strong>
              </Typography>
              {editable ? <ItemCounter /> : <Typography variant="body1">Quantity: 3</Typography>}
            </Box>
          </Grid>
          <Grid item xs={2} display="flex" alignItems="center" flexDirection="column">
            <Typography variant="subtitle1"> {`$${product.price}`}</Typography>
            {editable && (
              <Button variant="text" color="secondary">
                Remove
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
}
