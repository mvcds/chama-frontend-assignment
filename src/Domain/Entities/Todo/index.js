import moment from 'moment';

const DEFAULTS = {
  isCompleted: false,
  isDeleted: false
}

const STATUSES = {
  Normal: 'normal',
  Near: 'near',
  Expired: 'expired'
}

class Todo {
  constructor (data) {
    Object.assign(this, DEFAULTS, data);
  }

  get status () {
    if (!this.dueDate) return STATUSES.Normal;

    const now = moment().startOf('day');

    const days = moment(this.dueDate)
      .startOf('day')
      .diff(now, 'days');

    if (days > 7) return STATUSES.Normal;

    return days < 0 ? STATUSES.Expired : STATUSES.Near;
  }
}

export default Todo;
