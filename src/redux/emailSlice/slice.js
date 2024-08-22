import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  success: false,
  loading: false,
  error: null,
  emailObj: {},
  successMessage: '',
};

export const emailSlice = createSlice({
  name: 'emailSlice',
  initialState,
  reducers: {
    sendEmailRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    sendEmailSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    sendEmailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setEmailObj: (state, action) => {
      state.emailObj = action.payload;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
  },
});

export const {
  sendEmailRequest,
  sendEmailSuccess,
  sendEmailFailure,
  setEmailObj,
  setSuccessMessage,
} = emailSlice.actions;
export default emailSlice.reducer;
