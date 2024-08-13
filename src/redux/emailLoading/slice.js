import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	success: false,
	loading: false,
	error: null,
}

export const emailLoadingSlice = createSlice({
	name: 'emailLoadingSlice',
	initialState,
	reducers: {
		sendEmailRequest: state => {
			state.loading = true
			state.error = null
			state.success = false
		},
		sendEmailSuccess: (state, action) => {
			state.loading = false
			state.success = true
		},
		sendEmailFailure: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { sendEmailRequest, sendEmailSuccess, sendEmailFailure } =
	emailLoadingSlice.actions
export default emailLoadingSlice.reducer
