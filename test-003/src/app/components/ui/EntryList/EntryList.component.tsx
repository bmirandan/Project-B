'use client';

import { List, Paper } from '@mui/material';
import { EntryListCard } from '..';
import { EntryStatus } from '../../../../../interfaces';
import { EntriesContext } from '../../../../../context/entries';
import { useContext, useMemo } from 'react';

type EntryListT = {
  status: EntryStatus;
};

export function EntryList({ status }: EntryListT) {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 250px',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: '3px 5px',
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryListCard key={entry._id} {...entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
}
