import { call, put, takeLatest } from 'redux-saga/effects'
import {
	sendEmailRequest,
	sendEmailSuccess,
	sendEmailFailure,
} from '../emailLoading/slice'
import emailjs from '@emailjs/browser'

// Функция для отправки email с использованием emailjs
function sendEmail(data) {
	const form = {...data,to_email: 'boogeymanqq@gmail.com' }

	emailjs
      .send(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, form, {
        publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
}

function* sendEmailSaga(action) {
	try {
		const response = yield call(sendEmail, action.payload)
		yield put(sendEmailSuccess(response))
	} catch (error) {
		yield put(sendEmailFailure(error.toString()))
	}
}

function* watchSendEmailSaga() {
	yield takeLatest(sendEmailRequest.type, sendEmailSaga)
}

export default watchSendEmailSaga
