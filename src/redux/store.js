import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { reducer as formReducer } from 'redux-form';
import emailLoadingReducer from './emailLoading/slice'
import emailSaga from './sagas/emailSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	reducer: {
		emailLoadingSlice: emailLoadingReducer,
	form: formReducer,

	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(emailSaga)
