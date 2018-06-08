import { take, select, put, call } from 'redux-saga/effects';

function* editTodo (type, key, defaultValue) {
  while (true) {
    const { payload } = yield take(`${type}_ASYNC`);
    const { firewatcher, firebase: { auth: { uid } } } = yield select();

    const { todo } = payload;
    const value = payload[key] === undefined ? defaultValue : payload[key];

    yield put({
      type,
      payload: {
        todo,
        [key]: value
      }
    })

    yield call(firewatcher.update, `users/${uid}/todos/${todo.id}/${key}`, value);
  }
}

export default editTodo;
