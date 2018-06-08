import { take, select, put, call } from 'redux-saga/effects';

function* fetchTodoList () {
  while (true) {
    const { data: todos } = yield take('@@reactReduxFirebase/SET');

    yield put({
      type: 'READ_TODOS',
      payload: {
        todos
      }
    })
  }
}

export default fetchTodoList;
