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

  get daysToDueDate () {
    if (!this.dueDate) return;

    const now = moment().startOf('day');

    return moment(this.dueDate).startOf('day')
      .diff(now, 'days');
  }

  getStatus (days = null) {
    if (days === null || days >= 7) return STATUSES.Normal;

    return days < 0 ? STATUSES.Expired : STATUSES.Near;
  }
}

export default Todo;
