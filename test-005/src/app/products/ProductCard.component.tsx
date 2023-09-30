'use client';

import { Card, Grid, CardActionArea, CardMedia, Typography, Box, Fade, Link } from '@mui/material';
import { ProductT } from '../../../interfaces/products';
import { useMemo, useState } from 'react';
import NextLink from 'next/link';

type ProductCardT = {
  product: ProductT;
};

export default function ProductCard({ product }: ProductCardT) {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(
    () => (isHovered ? `/products/${product.images[1]}` : `/products/${product.images[0]}`),
    [isHovered]
  );
  return (
    <Grid item key={product.slug} xs={6} sm={4} md={4}>
      <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <NextLink href={`/products/${product.slug}`} passHref prefetch={false} legacyBehavior>
          <Link>
            <CardActionArea>
              {!isHovered ? (
                <CardMedia component="img" image={productImage} alt={product.title} />
              ) : (
                <Fade in={isHovered} {...(isHovered ? { timeout: 500 } : {})}>
                  <CardMedia component="img" image={productImage} alt={product.title} />
                </Fade>
              )}
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}> {product.title}</Typography>
        <Typography fontWeight={500}> {`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
}
