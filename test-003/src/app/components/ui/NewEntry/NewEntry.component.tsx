'use client';

import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { EntriesContext } from '../../../../../context/entries';
import { UIContext } from '../../../../../context/ui';

export function NewEntry() {
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const { addEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length > 0) {
      setIsAddingEntry(false);
      setTouched(false);
      addEntry(inputValue);
      setInputValue('');
    }
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            label="Nueva entrada"
            autoFocus
            multiline
            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
            error={inputValue.length <= 0 && touched}
            placeholder="Nueva entrada"
            sx={{ marginBottom: 1, marginTop: 2 }}
            value={inputValue}
            onChange={onTextFieldChanged}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="text"
              onClick={() => {
                setIsAddingEntry(false);
                setTouched(false);
                setInputValue('');
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={() => onSave()}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          fullWidth
          variant="outlined"
          startIcon={<AddCircleOutlinedIcon />}
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
}
