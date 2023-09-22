'use client';

import { DragEvent, useContext } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { IEntry } from '../../../../../interfaces';
import { UIContext } from '../../../../../context/ui';

type EntryListCardT = IEntry;

export function EntryListCard({ _id, description, createdAt }: EntryListCardT) {
  const { setDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', _id);
    setDragging(true);
  };

  const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
    setDragging(false);
  };

  return (
    <Card sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
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
