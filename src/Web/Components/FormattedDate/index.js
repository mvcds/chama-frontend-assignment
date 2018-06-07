import React from 'react';
import moment from 'moment';

function FormattedDate ({ date, emptyDateMessage }) {
  return (
    <React.Fragment>
      {date ? moment(date).format('YYYY MMM DD') : emptyDateMessage}
    </React.Fragment>
  )
}

FormattedDate.defaultProps = {
  emptyDateMessage: 'No date'
}

export default FormattedDate;
