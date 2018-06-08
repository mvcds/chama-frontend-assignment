import { Factory } from 'rosie';
import { lorem, random, date } from 'faker';
import moment from 'moment';

import Todo from './index';

const factory = new Factory()
  .attr('id', random.uuid)
  .attr('text', lorem.words)
  .attr('isCompleted', random.boolean)
  .attr('dueDate', date.future)
  .attr('priority', () => random.number({ min: 1, max: 99 }))
  .attr('isDeleted', false)

function create (bound, data) {
  const raw = Object.assign({}, data, bound)

  const fixture = factory.build(raw);

  return new Todo(fixture);
}

function withDueDate (fn, { days = 0 } = {}, data) {
    const dueDate = moment()[fn](days, 'days')
      .startOf('day')
      .toDate();

    return create({ ...data, dueDate })
}

const TODOS = {
  NonCompleted: create.bind(null, { isCompleted: false }),
  Completed: create.bind(null, { isCompleted: true }),
  WithDueDate: create.bind(null, {}),
  WithoutDueDate: create.bind(null, { dueDate: undefined }),
  NearDueDate: withDueDate.bind(null, 'add'),
  ExpiredDueDate: withDueDate.bind(null, 'subtract')
}

const MAPPED = Object.values(TODOS)

export default {
  ...TODOS,
  Random: (data) => random.arrayElement(MAPPED)(data)
}
