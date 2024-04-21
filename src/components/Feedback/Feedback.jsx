

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;
  return (
    <div className={css.wrapp}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;