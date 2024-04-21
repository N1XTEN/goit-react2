
import React from 'react';

const Notification = ({ totalFeedback }) => {
  return (
    <div>
      {totalFeedback === 0 && <p>No feedback yet</p>}
    </div>
  );
};

export default Notification;
