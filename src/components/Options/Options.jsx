


const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.wrapp}>
      <button
        className={clsx(css.good, css.btn)}
        onClick={() => updateFeedback('good')}
        type="button"
      >
        Good
      </button>
      <button
        className={clsx(css.neutral, css.btn)}
        onClick={() => updateFeedback('neutral')}
        type="button"
      >
        Neutral
      </button>
      <button
        className={clsx(css.bad, css.btn)}
        onClick={() => updateFeedback('bad')}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={clsx(css.reset, css.btn)} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;