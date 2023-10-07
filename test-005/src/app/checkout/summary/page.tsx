'use client';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import CartList from '../../cart/CartList.component';
import OrderSummary from '../../cart/OrderSummary.component';
import NextLink from 'next/link';
import ShopLayout from '../../../../components/ShopLayout/ShopLayout.component';

export default function SummaryPage() {
  return (
    <ShopLayout>
      <>
        <Typography variant="h1" component="h1" sx={{ mb: 5 }}>
          Order summary
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={7}>
            <CartList />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card className="summary-card" variant="outlined">
              <CardContent>
                <Typography variant="h2">Summary (3 products)</Typography>
                <Divider sx={{ my: 1 }} />
                <Box display="flex" justifyContent="space-between" alignContent="center">
                  <Typography variant="subtitle1">Delivery address</Typography>

                  <NextLink href="/checkout/address" legacyBehavior passHref>
                    <Link variant="overline" underline="always">
                      Editar
                    </Link>
                  </NextLink>
                </Box>

                <Typography variant="body1">Benjamin Miranda</Typography>
                <Typography variant="body1">323 Algub lugar</Typography>
                <Typography variant="body1">Stittsville, HYA 234</Typography>
                <Typography variant="body1">Canada</Typography>
                <Typography variant="body1">+21312312</Typography>

                <Divider sx={{ my: 1 }} />
                <Box display="flex" justifyContent="end">
                  <NextLink href="/cart" legacyBehavior passHref>
                    <Link variant="overline" underline="always">
                      Editar
                    </Link>
                  </NextLink>
                </Box>
                <OrderSummary />
                <Box sx={{ mt: 3 }}>
                  <Button color="secondary" className="circular-btn" fullWidth>
                    Confirm order
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
