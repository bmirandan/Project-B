import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import ShopLayout from '../../../../components/ShopLayout/ShopLayout.component';

export const metadata = {
  title: 'Address',
  description: 'Confirm your address and proceed to payment',
  keywords: 'Address',
};

export default function AddressPage() {
  return (
    <ShopLayout>
      <>
        <Typography variant="h1" component="h1">
          Address
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="LastName" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Address" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Apartment" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Area Code" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="City" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Select variant="filled" label="Country" value={1}>
                <MenuItem value={1}>United States</MenuItem>
                <MenuItem value={2}>Canada</MenuItem>
                <MenuItem value={3}>Mexico</MenuItem>
                <MenuItem value={4}>Chile</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" variant="filled" fullWidth />
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
          <Button color="secondary" className="circular-btn" size="large">
            Check Order
          </Button>
        </Box>
      </>
    </ShopLayout>
  );
}
