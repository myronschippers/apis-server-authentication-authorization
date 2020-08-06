import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchAnnualReview() {
  try {
    const response = yield axios.get('/api/annual-reviews');

    yield put({ type: 'SET_ANNUAL_REVIEWS', payload: response.data });
  } catch (error) {
    console.log('FAILED', error);
  }
}

function* annualReviewSaga() {
  yield takeLatest('FETCH_ANNUAL_REVIEWS', fetchAnnualReview);
}

export default annualReviewSaga;
