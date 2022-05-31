import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { ButtonProps } from './Button.types';

export default function TextButton({
  text,
  handleClick,
}: ButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        onClick={handleClick}
      >{text}</Button>
    </Stack>
  );
};
