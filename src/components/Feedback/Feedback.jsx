import css from "./Feedback.module.css";

export default function Feedback({ state, totalFeedback, positiveFeedback }) {
  return (
    <div className={css.stats}>
      <p>{`Good: ${state.good}`}</p>
      <p>{`Neutral: ${state.neutral}`}</p>
      <p>{`Bad: ${state.bad}`}</p>
      <p>{`Total: ${totalFeedback}`}</p>
      <p>{`Positive: ${positiveFeedback}%`}</p>
    </div>
  );
}
