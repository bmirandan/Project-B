'use client';

import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

export function NewEntry() {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      <Button fullWidth variant="outlined" startIcon={<AddCircleOutlinedIcon />}>
        Agregar Tarea
      </Button>
      <TextField
        fullWidth
        label="Nueva entrada"
        helperText="Ingresa una nueva entrada"
        autoFocus
        multiline
        placeholder="Nueva entrada"
        sx={{ marginBottom: 1, marginTop: 2 }}
      />
      <Box display="flex" justifyContent="space-between">
        <Button variant="text">Cancelar</Button>
        <Button variant="outlined" color="secondary" endIcon={<SaveOutlinedIcon />}>
          Guardar
        </Button>
      </Box>
    </Box>
  );
}
