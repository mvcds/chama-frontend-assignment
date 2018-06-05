import { all } from 'redux-saga/effects';

function* hello () {
  console.log('hello');
}

function* sagas() {
  yield all([
    hello()
  ]);
}

export default sagas
