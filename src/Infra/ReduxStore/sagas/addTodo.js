import { take, select, put, call } from 'redux-saga/effects';

function* addTodo () {
  while (true) {
    const { payload } = yield take('ADD_TODO_ASYNC');
    const { firewatcher, firebase: { auth: { uid } }, todoList } = yield select();

    const todo = todoList.createTodo(payload);

    const { key } = yield call(firewatcher.create, `users/${uid}/todos`, todo);

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
