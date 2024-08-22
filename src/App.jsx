import { useDispatch } from 'react-redux';
import { Paper, Container, Link, Box } from '@mui/material';
import { setEmailObj } from './redux/emailSlice/slice';
import MainForm from './components/mainForm';
import { TypographyStyledText } from './components/UI/TypographyStyledText';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    dispatch(setEmailObj(values));
  };
  return (
    <Paper elevation={3}>
      <Container maxWidth='ld'>
        <Box borderBottom='1px solid rgba(0, 0, 0, 0.12)' paddingY={4}>
          <TypographyStyledText variant='h6' fontWeight='bold' textAlign={'start'}>
            Change your private information
          </TypographyStyledText>
          <TypographyStyledText paddingTop={2} color variant='h6' textAlign={'start'}>
            Please read our
            <Link
              target='_blank'
              href='http://www.google.com/search?q=Please+read+our'
              underline='none'>
              {' '}
              terms of use{' '}
            </Link>
            to be informed how we manage your private data.
          </TypographyStyledText>
        </Box>
        <MainForm onSubmit={handleFormSubmit} />
      </Container>
    </Paper>
  );
}

export default App;
