
import React, { useState, useEffect } from 'react';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const App = () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [feedback, setFeedback] = useState(initialState);

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100) || 0;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options feedback={feedback} setFeedback={setFeedback} />
      <Notification totalFeedback={totalFeedback} />
      {totalFeedback > 0 && 
        <Feedback 
          feedback={feedback} 
          totalFeedback={totalFeedback} 
          positiveFeedback={positiveFeedback} 
        />
      }
    </div>
  );
};

export default App;
