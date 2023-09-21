import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { IEntry } from '../../../../../interfaces';

type EntryListCardT = IEntry;

export function EntryListCard({ description, createdAt }: EntryListCardT) {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}> {description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant="body2"> {createdAt}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
