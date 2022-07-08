import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ data, last }) => (
  <li className="course-container">
    {/* <h4 className="course-number">{data.number}:</h4> */}
    <p className="course-name">{data.title}</p>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

Skill.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Skill.defaultProps = {
  last: false,
};

export default Skill;
