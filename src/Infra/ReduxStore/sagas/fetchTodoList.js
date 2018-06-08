import { take, select, put, call } from 'redux-saga/effects';

function* fetchTodoList () {
  while (true) {
    yield take('IGNITE');
    const { firewatcher, firebase: { auth: { uid } } } = yield select();

    if (!uid) continue;

    const ref = yield call(firewatcher.read, `users/${uid}/todos`);

    yield put({
      type: 'READ_TODOS',
      payload: {
        todos: ref.val()
      }
    })
  }
}

export default fetchTodoList;
