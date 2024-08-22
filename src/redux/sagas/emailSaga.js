import { call, put, takeLatest } from 'redux-saga/effects';
import {
  sendEmailRequest,
  sendEmailSuccess,
  sendEmailFailure,
  setSuccessMessage,
} from '../emailSlice/slice';
import emailjs from '@emailjs/browser';

// Функция для отправки email с использованием emailjs
function sendEmail(data) {
  emailjs
    .send(
      import.meta.env.VITE_APP_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      data,
      {
        publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
      },
    )
    .then(
      () => {
        console.log('Success!');
      },
      (error) => {
        console.log('Failed...', error);
      },
    );
}

function* sendEmailSaga(action) {
  try {
    const response = yield call(sendEmail, action.payload);
    yield put(sendEmailSuccess(response));

    yield put(setSuccessMessage('Your message is send!'));
  } catch (error) {
    yield put(sendEmailFailure(error.toString()));
  }
}

function* watchSendEmailSaga() {
  yield takeLatest(sendEmailRequest.type, sendEmailSaga);
}

export default watchSendEmailSaga;
