import { take, select, put, call } from 'redux-saga/effects';

function *setDueDate () {
  while (true) {
    const { payload: { todo, dueDate: date } } = yield take('SET_TODO_DUE_DATE_ASYNC');
    const { firewatcher, firebase: { auth: { uid } } } = yield select();

    const path = `users/${uid}/todos/${todo.id}/dueDate`;
    const dueDate = date ? date.getTime() : undefined;

    yield put({
      type: 'SET_TODO_DUE_DATE',
      payload: {
        todo,
        dueDate
      }
    })

    if (!!dueDate) {
      yield call(firewatcher.update, path, dueDate);
    } else {
      yield call(firewatcher.delete, path);
    }
  }
}

export default setDueDate;
