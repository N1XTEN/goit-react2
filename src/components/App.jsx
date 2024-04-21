import React, { useState, useEffect } from 'react';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Description from './description/Description';
import Notification from './Notification/Notification';
import './App.scss';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('saved-feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    if (totalFeedback > 0) {
      localStorage.setItem('saved-feedback', JSON.stringify(feedback));
    } else {
      localStorage.removeItem('saved-feedback');
    }
  }, [feedback, totalFeedback]);

  return (
    <div className="container">
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;