'use client';

import { ChangeEvent, useContext, useMemo, useState } from 'react';
import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  IconButton,
} from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { EntryStatus, IEntry } from '../../../../interfaces';
import { EntriesContext } from '../../../../context/entries';
import { getFormatFromDate } from '../../../../libs';

const validStatus: EntryStatus[] = ['pending', 'inProgress', 'finished'];

type NewType = {
  originalEntry: IEntry;
};

type NewEntryT = NewType;

export default function NewEntry({ originalEntry }: NewEntryT) {
  const [inputValue, setInputValue] = useState(originalEntry.description);
  const [status, setStatus] = useState<EntryStatus>(originalEntry.status);
  const [touched, setTouched] = useState(false);

  const { updateEntry } = useContext(EntriesContext);

  const isNotValid = useMemo<boolean>(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    const newEntry: IEntry = {
      ...originalEntry,
      description: inputValue,
      status,
    };
    updateEntry(newEntry);
  };

  return (
    <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardHeader
            title={`${inputValue}`}
            subheader={`Creada: ${getFormatFromDate(originalEntry.createdAt)}`}
          />
          <CardContent>
            <TextField
              sx={{ marginTop: 2, marginBottom: 1 }}
              fullWidth
              placeholder="Nueva entrada"
              autoFocus
              multiline
              label="Nueva entrada"
              value={inputValue}
              helperText={isNotValid && 'Ingrese un valor'}
              error={isNotValid}
              onBlur={() => setTouched(true)}
              onChange={onTextFieldChanged}
            />
            <FormControl>
              <FormLabel>Estado:</FormLabel>
              <RadioGroup row value={status} onChange={onStatusChanged}>
                {validStatus.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={capitalize(option)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </CardContent>

          <CardActions>
            <Button
              startIcon={<SaveOutlinedIcon />}
              variant="outlined"
              fullWidth
              onClick={onSave}
              disabled={inputValue.length <= 0}
            >
              Save
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
        }}
      >
        <DeleteOutlineIcon />
      </IconButton>
    </Grid>
  );
}
