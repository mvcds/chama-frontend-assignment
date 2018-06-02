import { Factory } from 'rosie';
import { lorem, random } from 'faker';

import Todo from './index';

const factory = new Factory()
  .attr('id', random.uuid)
  .attr('text', lorem.words)
  .attr('isCompleted', random.boolean)
  .attr('isDeleted', false)

function create (data) {
  const fixture = factory.build(data);

  return new Todo(fixture);
}

export default {
  NonCompleted: create.bind(null, { isCompleted: false }),
  Completed: create.bind(null, { isCompleted: true }),
  Random: create.bind(null)
}
