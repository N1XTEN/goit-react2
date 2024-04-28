import { useState, useEffect } from 'react'

import Description from './components/Description'
import Options from './components/Options'
import Feedback from './components/Feedback'
import Notification from './components/Notification'

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedback = JSON.parse(window.localStorage.getItem('feedbacks'));
    return savedFeedback ? savedFeedback : { good: 0, neutral: 0, bad: 0 };
  });
  
  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    })
  };

    useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivePercentage = Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100);

    const handleReset = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };



  return (
    <>
      <Description/>
      <Options onFeedback={updateFeedback} onReset={handleReset} hasFeedback={totalFeedback > 0} />
      {totalFeedback > 0 ? 
        (<Feedback good={feedbacks.good}
        neutral={feedbacks.neutral}
        bad={feedbacks.bad}
        total={totalFeedback}
        positivePercentage={positivePercentage}/>)
      : (
        <Notification/>
      )}

    </>
  )
}

export default App;
