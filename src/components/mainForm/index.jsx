import React, { useEffect, useMemo, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { setSuccessMessage } from '../../redux/emailSlice/slice';
import { Grid, Button, Link, Box } from '@mui/material';
import { InputField } from '../UI/Input';
import { ModalComponent } from '../ModalComponent';
import {
  maxLengthCreator,
  minLength,
  required,
  validateEmail,
} from '../../utils/formValidate';
import { TypographyStyledText } from '../UI/TypographyStyledText';

export let MainForm = ({ handleSubmit, reset, ...props }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.emailSlice);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        reset();
        setOpen(false);
        dispatch(setSuccessMessage(''));
      }, 2000);
    }
  }, [success]);

  const maxLength = useMemo(() => maxLengthCreator(40), []);
  return (
    <Box sx={{ width: '100%' }} paddingY={5}>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <TypographyStyledText fontWeight={'bold'} paddingY={2} textAlign={'start'}>
              Enter your first name
            </TypographyStyledText>
            <Field
              validate={[required, maxLength, minLength]}
              type='text'
              name='firstName'
              component={InputField}
              label='First name'
              helperText='Please specify your first name'
              isRequired
              isFullWidth
              id='outlined-required'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TypographyStyledText fontWeight={'bold'} paddingY={2} textAlign={'start'}>
              Enter your email
            </TypographyStyledText>
            <Field
              validate={[required, validateEmail, maxLength, minLength]}
              type='email'
              name='Email'
              component={InputField}
              label='Email'
              helperText='Email is required.'
              isRequired
              isFullWidth
              id='outlined-required'
            />
          </Grid>

          <Grid item xs={12}>
            <TypographyStyledText fontWeight={'bold'} paddingY={2} textAlign={'start'}>
              Bio
            </TypographyStyledText>
            <Field
              type='text'
              name='Bio'
              isFullWidth
              id='outlined-required'
              component={InputField}
              label='Bio'
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TypographyStyledText fontWeight={'bold'} paddingY={2} textAlign={'start'}>
              Country
            </TypographyStyledText>
            <Field
              validate={[required, maxLength, minLength]}
              type='text'
              name='Country'
              component={InputField}
              isRequired
              isFullWidth
              id='outlined-required'
              label='Country'
              helperText='Please specify your country name'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TypographyStyledText fontWeight={'bold'} paddingY={2} textAlign={'start'}>
              City
            </TypographyStyledText>
            <Field
              validate={[required, maxLength, minLength]}
              type='text'
              name='City'
              component={InputField}
              isRequired
              isFullWidth
              id='outlined-required'
              label='City'
              helperText='Please specify your city name'
            />
          </Grid>

          <Grid item xs={12}>
            <TypographyStyledText fontWeight={'bold'} paddingY={2} textAlign={'start'}>
              Enter your address
            </TypographyStyledText>
            <Field
              validate={[required, maxLength, minLength]}
              type='text'
              name='Address'
              component={InputField}
              isRequired
              isFullWidth
              id='outlined-required'
              label='Address'
              helperText='Please specify your address'
            />
          </Grid>
        </Grid>
        <Box
          paddingTop={4}
          display='flex'
          justifyContent='space-between'
          alignItems='center'>
          <TypographyStyledText variant='h6' textAlign={'start'}>
            You may also consider to update your
            <Link
              target='_blank'
              href='http://www.google.com/search?q=billing+information'
              underline='none'>
              {' '}
              billing information.
            </Link>
          </TypographyStyledText>
          <Button
            disabled={props.invalid || loading}
            type='submit'
            onClick={props.invalid ? undefined : handleOpen}
            variant='contained'>
            Save
          </Button>
        </Box>

        {open && <ModalComponent open={open} handleClose={handleClose} />}
      </form>
    </Box>
  );
};

export default reduxForm({
  form: 'mainForm',
})(MainForm);
