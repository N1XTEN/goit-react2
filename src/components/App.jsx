// App.jsx
import React, { useState, useEffect } from 'react';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Description from './description/Description';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem('feedback');
    return storedFeedback ? JSON.parse(storedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  const { good = 0, neutral = 0, bad = 0 } = feedback;
  const totalFeedback = good + neutral + bad;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1 || 1, // Если свойство отсутствует, начнем с 1
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
