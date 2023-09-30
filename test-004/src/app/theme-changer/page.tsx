'use client';

import { Card, CardContent, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { ChangeEvent, useContext } from 'react';
import { UIContext } from '../../../context/ui';

export default function ThemeChangerPage() {
  const { setTheme, themeValue } = useContext(UIContext);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value as 'light' | 'dark' | 'custom');
  };

  return (
    <Card>
      <CardContent>
        <FormControl>
          <FormLabel>Tema</FormLabel>
          <RadioGroup value={themeValue} onChange={onThemeChange}>
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            <FormControlLabel value="custom" control={<Radio />} label="Custom" />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}
