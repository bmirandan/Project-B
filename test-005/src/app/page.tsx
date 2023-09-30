import Typography from '@mui/material/Typography';
import { Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import { initialData } from '../../database/products';

export default function HomePage() {
  return (
    <>
      <Typography variant="h1">Tienda</Typography>
      <Typography variant="h2">Todos los productos</Typography>

      <Grid container spacing={4}>
        {initialData.products.map((product) => (
          <Grid item key={product.slug} xs={6} sm={4} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={`/products/${product.images[0]}`} alt={product.title} />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
