import { Card, CardHeader, Grid } from '@mui/material';
import { EntryList, NewEntry } from './components/ui';

export default function HomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title="Pendientes" />
          {/** Nueva entrada */}
          {/** Listado entrada dragables*/}
          <NewEntry />
          <EntryList status="pending" />
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title="En progreso" />
          <EntryList status="inProgress" />
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title="Completadas" />
          <EntryList status="finished" />
        </Card>
      </Grid>
    </Grid>
  );
}
