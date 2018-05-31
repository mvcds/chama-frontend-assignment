import { Factory } from 'rosie';
import { lorem, random } from 'faker';

const factory = new Factory()
  .attr('text', lorem.words)
  .attr('isComplete', random.boolean);

function create (data) {
  const fixture = factory.build(data);

  return fixture;
}

export default {
  NonCompleted: create.bind(null, { isComplete: false }),
  Completed: create.bind(null, { isComplete: true })
}
