'use client';

import { useContext, useMemo, DragEvent } from 'react';
import { List, Paper } from '@mui/material';
import { EntryListCard } from '..';
import { EntryStatus } from '../../../../../interfaces';
import { EntriesContext } from '../../../../../context/entries';
import { UIContext } from '../../../../../context/ui';

import styles from './EntryList.module.css';

type EntryListT = {
  status: EntryStatus;
};

export function EntryList({ status }: EntryListT) {
  const { entries, updateEntry } = useContext(EntriesContext);

  const { isDragging, setDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    const entry = entries.find((e) => e._id === id)!;

    entry.status = status;

    updateEntry(entry);
    setDragging(false);
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? styles.isDraggin : ''}>
      <Paper
        sx={{
          height: 'calc(100vh - 250px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: '3px 5px',
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.5 : 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            transition: 'all 0.3s',
          }}
        >
          {entriesByStatus.map((entry) => (
            <EntryListCard key={entry._id} {...entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
}
