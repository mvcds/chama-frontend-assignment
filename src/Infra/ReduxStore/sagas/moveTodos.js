import { take, select, put, call } from 'redux-saga/effects';

function* moveTodos () {
  while (true) {
    const { payload } = yield take('MOVE_TODO_ASYNC');

    yield put({ type: 'MOVE_TODO', payload })

    const { firewatcher, firebase: { auth: { uid } }, todoList } = yield select();

    yield call(firewatcher.set, `users/${uid}/todos`, todoList.toJson());
  }
}

export default moveTodos;
