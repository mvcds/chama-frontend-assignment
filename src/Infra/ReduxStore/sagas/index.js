import { all, takeEvery, take, select, put, call } from 'redux-saga/effects';

import Todo from '../../../Domain/Entities/Todo';

function* addTodo () {
  while (true) {
    const { payload: { text } } = yield take('ASYNC_ADD_TODO');
    const { todoList, firebase: { auth: { uid } } } = yield select();

    const todo = new Todo({ text })

    const { key } = yield call(todoList.add, `users/${uid}/todos`, todo);

    todo.id = key;

    yield put({
      type: 'ADD_TODO',
      payload: {
        todo
      }
    })
  }
}

function* sagas() {
  yield all([
    addTodo()
  ]);
}

export default sagas
