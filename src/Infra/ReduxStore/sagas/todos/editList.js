import { take, select, put, call } from 'redux-saga/effects';

function* editList (type) {
  while (true) {
    const { payload } = yield take(`${type}_ASYNC`);

    yield put({ type, payload })

    const { firewatcher, firebase: { auth: { uid } }, todoList } = yield select();

    yield call(firewatcher.set, `users/${uid}/todos`, todoList.toJson());
  }
}

export default editList;
