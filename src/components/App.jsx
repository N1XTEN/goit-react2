// App.jsx
import React, { useState, useEffect } from 'react';
import Feedback from './Feedback';
import Options from './Options';
import Notification from './Notification';
import Description from './Description';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem('feedback');
    return storedFeedback ? JSON.parse(storedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback > 0 && <Feedback good={good} neutral={neutral} bad={bad} />}
      {totalFeedback === 0 && <Notification />}
    </div>
  );
};

export default App;
