import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';
import emailReducer from './emailSlice/slice';
import emailSaga from './sagas/emailSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    emailSlice: emailReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(emailSaga);
