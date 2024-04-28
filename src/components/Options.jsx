const Options = ({ onFeedback, onReset, hasFeedback }) => {
    return (
        <>
            <button onClick={() => onFeedback('good')}>Good</button>
            <button onClick={() => onFeedback('neutral')}>Neutral</button>
            <button onClick={() => onFeedback('bad')}>Bad</button>
            {hasFeedback && <button onClick={onReset}>Reset</button>}
        </>
    )
};
export default Options;