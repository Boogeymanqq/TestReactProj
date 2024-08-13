import { Grid, TextField } from '@mui/material'
import React from 'react'

export const InputField = ({input,error, multiline, rows, xs,isRequired = false, isFullWidth = false, helperText, m = 0, id, label }) => {
  return (
						<TextField
            {...input}
            error={error}
						    required={isRequired}
						    fullWidth={isFullWidth}
			          id={id}
			          label={label}
                helperText={helperText}
                rows={rows}
                multiline={multiline}
			        />
  )
}
