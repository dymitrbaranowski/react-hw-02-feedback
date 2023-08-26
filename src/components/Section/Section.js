import propTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
