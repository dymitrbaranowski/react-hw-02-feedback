import propTypes from 'prop-types';
import { FeedbackList, FeedbackListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <FeedbackList>
    <FeedbackListItem>Good: {good}</FeedbackListItem>
    <FeedbackListItem>Neutral: {neutral}</FeedbackListItem>
    <FeedbackListItem>Bad: {bad}</FeedbackListItem>
    <FeedbackListItem>Total: {total}</FeedbackListItem>
    <FeedbackListItem>
      Positive feedback: {positivePercentage} %
    </FeedbackListItem>
  </FeedbackList>
);
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
