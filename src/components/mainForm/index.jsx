import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'
import { sendEmailRequest } from '../../redux/emailLoading/slice'
import Box from '@mui/material/Box';
import { Grid, Typography,Button, Link } from '@mui/material';
import { InputField } from '../UI/Input';

export let MainForm = ({ handleSubmit, reset }) => {
	const dispatch = useDispatch()
	const { loading, success, error } = useSelector(
		state => state.emailLoadingSlice
	)

	// const required = value => (value ? undefined : 'This field is required');

	// console.log('required', required)

	return (
		<Box sx={{ width: "100%" }} paddingY={5}>
			<form onSubmit={handleSubmit}>
			<Grid
			container rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}
			>
						<Grid 
						item
						xs={12} sm={6}
						>
							<Typography 
							fontWeight={'bold'}
							paddingY={2}
							textAlign={'start'}>Enter your first name</Typography>
							<Field
							type="text"
							error
							name="firstName"
							component={InputField}
							label="First name"
							helperText="Please specify your first name"
							isRequired
							isFullWidth
							id="outlined-required"
							// validate={[required]}
							/>
						</Grid>
						<Grid
						 item 
						 xs={12} sm={6}
						>
							<Typography fontWeight={'bold'} paddingY={2} textAlign={'start'}>Enter your email</Typography>
							<Field
							type="email"
							name="lastName"
							component={InputField}
				      label="Email"
							helperText="Email is required."
							isRequired
							isFullWidth
							id="outlined-required"
							/>
						</Grid>
		
					<Grid item xs={12}>
					<Typography fontWeight={'bold'} paddingY={2} textAlign={'start'}>Bio</Typography>
					<Field
					type="text"
					name="Bio"
							isFullWidth
							id="outlined-required"
							component={InputField}
							label="Bio"
							multiline
	          rows={4}
							/>
						</Grid>
		
						<Grid item xs={12} sm={6}>
						<Typography fontWeight={'bold'} paddingY={2} textAlign={'start'}>Country</Typography>
						<Field
						type="text"
						name="Country"
							component={InputField}
							isRequired
							isFullWidth
				      id="outlined-required"
				          label="Country"
							helperText="Please specify your country name"
							/>
						</Grid>
		
						<Grid item xs={12} sm={6}>
						<Typography fontWeight={'bold'} paddingY={2} textAlign={'start'}>City</Typography>
						<Field
						type="text"
						name="City"
							component={InputField}
							isRequired
							isFullWidth
				          id="outlined-required"
				          label="City"
							helperText="Please specify your city name"
							/>
						</Grid>
		
					<Grid item xs={12}>
					<Typography fontWeight={'bold'} paddingY={2} textAlign={'start'}>Enter your address</Typography>
					<Field
					type="text"
						name="Address"
							component={InputField}
							isRequired
							isFullWidth
				          id="outlined-required"
				          label="Address"
							helperText="Please specify your address"
							/>
						</Grid>
			</Grid>
			<Box
			paddingTop={4}
			display="flex"
			justifyContent='space-between'
			alignItems="center"
			>
				<Typography
							variant='h6'
							textAlign={'start'}>You may also consider to update your
							<Link
							target='_blank'
							 href="http://www.google.com/search?q=billing+information" 
							 underline="none">
							{' '}billing information.
</Link>
							 </Typography>
				<Button type="submit" variant="contained">Save</Button></Box>
    </form>
		</Box>
	)
}
export default reduxForm({
  form: 'mainForm'
})(MainForm);