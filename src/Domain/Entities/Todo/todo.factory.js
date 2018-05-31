import { Factory } from 'rosie';
import { lorem, random } from 'faker';

const factory = new Factory()
  .attr('id', random.uuid)
  .attr('text', lorem.words)
  .attr('isCompleted', random.boolean);

function create (data) {
  const fixture = factory.build(data);

  return fixture;
}

export default {
  NonCompleted: create.bind(null, { isCompleted: false }),
  Completed: create.bind(null, { isCompleted: true }),
  Random: create.bind(null)
}
