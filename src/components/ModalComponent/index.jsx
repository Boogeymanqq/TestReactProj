import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmailRequest } from '../../redux/emailSlice/slice';
import { validateEmail } from '../../utils/formValidate';
import { TypographyStyledText } from '../UI/TypographyStyledText';
import { BoxStyled } from './ModalComponent.style';

export const ModalComponent = ({ handleClose, open }) => {
  const [emailValue, setEmailValue] = useState('');
  const { emailObj, successMessage } = useSelector((state) => state.emailSlice);
  const dispatch = useDispatch();

  const isValid = validateEmail(emailValue);

  const sendEmailAction = () => {
    dispatch(sendEmailRequest({ ...emailObj, to_email: emailValue }));
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='parent-modal-title'
      aria-describedby='parent-modal-description'>
      <BoxStyled>
        {successMessage ? (
          <TypographyStyledText>{successMessage}</TypographyStyledText>
        ) : (
          <>
            <TypographyStyledText>
              Enter your email where the form will be sent
            </TypographyStyledText>
            <TextField
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Button
              disabled={Boolean(isValid)}
              onClick={isValid ? undefined : sendEmailAction}
              variant='contained'>
              Send
            </Button>
          </>
        )}
      </BoxStyled>
    </Modal>
  );
};
