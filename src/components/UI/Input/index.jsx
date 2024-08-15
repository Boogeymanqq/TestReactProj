import { Grid, TextField } from '@mui/material'
import React from 'react'

export const InputField = ({input, multiline, rows, xs,isRequired = false, isFullWidth = false, helperText, m = 0, id, label, meta: {dirty, touched, error
}}) => {
  // console.log('meta', dirty, touched)
  // meta: {touched, error}
  // console.log('error', meta)
  return (
						<TextField
            {...input}
            error={touched && !dirty && isRequired}
						    required={isRequired}
						    fullWidth={isFullWidth}
			          id={id}
			          label={label}
                helperText={touched && !dirty && helperText}
                rows={rows}
                multiline={multiline}
			        />
  )
}
