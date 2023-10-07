'use client';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
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
