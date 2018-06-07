import { Factory } from 'rosie';
import { lorem, random, date } from 'faker';

import Todo from './index';

const factory = new Factory()
  .attr('id', random.uuid)
  .attr('text', lorem.words)
  .attr('isCompleted', random.boolean)
  .attr('dueDate', date.future)
  .attr('isDeleted', false)

function create (bound, data) {
  const raw = Object.assign({}, data, bound)

  const fixture = factory.build(raw);

  return new Todo(fixture);
}

const TODOS = {
  NonCompleted: create.bind(null, { isCompleted: false }),
  Completed: create.bind(null, { isCompleted: true }),
  WithDueDate: create.bind(null, {}),
  WithoutDueDate: create.bind(null, { dueDate: undefined }),
}

const MAPPED = Object.values(TODOS)

export default {
  ...TODOS,
  Random: (data) => random.arrayElement(MAPPED)(data)
}
