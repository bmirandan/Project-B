'use client';

import { useRouter } from 'next/navigation';
import { Chip, Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import ShopLayout from '../../../../components/ShopLayout/ShopLayout.component';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Order', width: 100 },
  { field: 'fullName', headerName: 'Full name', width: 300 },
  {
    field: 'paid',
    headerName: 'Payment status',
    description: 'Show payment status',
    width: 300,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Payed" variant="outlined" />
      ) : (
        <Chip color="error" label="Pending" variant="outlined" />
      );
    },
  },
];

const rows = [
  { id: 1, paid: false, fullName: 'Snow' },
  { id: 2, paid: true, fullName: 'Sky qal' },
  { id: 3, paid: false, fullName: 'Snow rey' },
  { id: 4, paid: true, fullName: 'Snow Bel' },
  { id: 5, paid: false, fullName: 'Snow' },
  { id: 6, paid: false, fullName: 'Snow' },
  { id: 7, paid: false, fullName: 'Snow' },
  { id: 8, paid: false, fullName: 'Snow' },
  { id: 9, paid: false, fullName: 'Snow' },
  { id: 10, paid: false, fullName: 'Snow' },
  { id: 11, paid: false, fullName: 'Snow' },
];
export default function HistoryPage() {
  const router = useRouter();

  return (
    <ShopLayout>
      <>
        <Typography variant="h1" component="h1">
          Past orders
        </Typography>

        <Grid container>
          <Grid item xs={12} sx={{ height: 'auto', width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5, page: 0 },
                },
              }}
              pageSizeOptions={[5, 10, 20]}
              onCellClick={(params, event) => {
                router.push('/orders/' + params.id);
              }}
            />
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  );
}
