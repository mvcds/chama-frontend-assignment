import { take, select, put, call } from 'redux-saga/effects';

import Todo from '../../../Domain/Entities/Todo';

function* addTodo () {
  while (true) {
    const { payload: { text } } = yield take('ASYNC_ADD_TODO');
    const { firewatcher, firebase: { auth: { uid } } } = yield select();

    const todo = new Todo({ text })

    const { key } = yield call(firewatcher.add, `users/${uid}/todos`, todo);

    todo.id = key;

    yield put({
      type: 'ADD_TODO',
      payload: {
        todo
      }
    })
  }
}

export default addTodo;
