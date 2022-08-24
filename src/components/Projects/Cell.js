import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import TagGroup from '../general/TagGroup';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
        <TagGroup data={data.tags} />
      </header>
      <a href={data.link} className={data.image.length === 0 ? 'image-hidden' : 'image'}>
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className={data.image.length === 0 ? 'description-alone' : 'description'}>
        <p>
          {data.desc}{' '}
          <a className="link-to-project" href={data.link}> Link to Project </a>
        </p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    tags: PropTypes.array.isRequired,
  }).isRequired,
};

export default Cell;
