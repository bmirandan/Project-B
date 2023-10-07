import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import CartList from './CartList.component';
import OrderSummary from './OrderSummary.component';
import ShopLayout from '../../../components/ShopLayout/ShopLayout.component';

export const metadata = {
  title: 'Cart - 3',
  description: 'Cart form shop',
};

export default function CartPage() {
  return (
    <ShopLayout>
      <>
        <Typography variant="h1" component="h1" sx={{ mb: 5 }}>
          Cart
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <CartList editable />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card className="summary-card" variant="outlined">
              <CardContent>
                <Typography variant="h2">Order</Typography>
                <Divider sx={{ my: 1 }} />
                <OrderSummary />
                <Box sx={{ mt: 3 }}>
                  <Button color="secondary" className="circular-btn" fullWidth>
                    Checkout
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  );
}
