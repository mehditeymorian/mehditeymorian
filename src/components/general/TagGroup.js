import React from 'react';
import PropTypes from 'prop-types';

const TagGroup = ({ data }) => (
  <div className="tag-box">
    {data.map((tag) => <span className="tag">{tag}</span>)}
  </div>
);

TagGroup.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default TagGroup;
