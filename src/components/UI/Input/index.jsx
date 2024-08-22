import { TextField } from '@mui/material';
import React from 'react';

export const InputField = ({
  input,
  multiline,
  rows,
  isRequired = false,
  isFullWidth = false,
  helperText,
  id,
  label,
  meta: { touched, error },
}) => {
  return (
    <TextField
      {...input}
      error={touched && error && isRequired}
      required={isRequired}
      fullWidth={isFullWidth}
      id={id}
      label={label}
      helperText={touched && error && (error || helperText)}
      rows={rows}
      multiline={multiline}
    />
  );
};
