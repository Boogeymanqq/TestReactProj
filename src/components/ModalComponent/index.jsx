import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmailRequest } from '../../redux/emailSlice/slice';
import { validateEmail } from '../../utils/formValidate';

export const ModalComponent = ({handleClose, open}) => {
  const [emailValue, setEmailValue] = useState('')
  const {emailObj, successMessage} = useSelector(state => state.emailSlice)
  const dispatch = useDispatch()

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const isValid = validateEmail(emailValue)
  
  const sendEmailAction = () => {
    dispatch(sendEmailRequest({...emailObj, 
      to_email: emailValue
    }))
  }
  return (
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{ ...style, width: 300 }}
  display="flex"
      alignItems="center"
      flexDirection='column'
      rowGap={2}
  >
    {successMessage ? 
    <p style={{color: '#000', textAlign: 'center', margin: 0}}>
    {successMessage}</p> : <>
      <p style={{color: '#000', textAlign: 'center', margin: 0}}>
      Enter your email where the form will be sent</p>
      <TextField
      value={emailValue}
      onChange={(e) => setEmailValue(e.target.value)}
      />
      <Button
      disabled={Boolean(isValid)}
      onClick={isValid ? undefined : sendEmailAction} variant="contained">Send</Button>
    </>}
  </Box>
</Modal>
  )
}
