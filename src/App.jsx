import { useDispatch } from 'react-redux'
import MainForm  from './components/mainForm'
import { Paper, Typography, Container,Link, Box } from '@mui/material';
import { sendEmailRequest } from './redux/emailLoading/slice'
import './App.css'


function App() {
	const dispatch = useDispatch()

	const handleFormSubmit = (values) => {
		console.log('data', values)
		// dispatch(sendEmailRequest(values))
	}
	return <Paper elevation={3}><Container maxWidth="ld">
		<Box 
		borderBottom='1px solid rgba(0, 0, 0, 0.12)'
		paddingY={4}>
			<Typography 
								variant='h6'
								fontWeight='bold'
								textAlign={'start'}>Change your private information</Typography>
	
	<Typography 
	color='rgb(103, 119, 136)'
								variant='h6'
								paddingTop={2}
								textAlign={'start'}>Please read our 
								<Link
								target='_blank'
								 href="http://www.google.com/search?q=Please+read+our" 
								 underline="none">
								{' '}terms of use{' '}
	</Link>
								  to be informed how we manage your private data.</Typography>
		</Box>
		<MainForm onSubmit={handleFormSubmit}/></Container></Paper>
}

export default App
