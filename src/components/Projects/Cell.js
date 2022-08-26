import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import TagGroup from '../general/TagGroup';
import ImageGallery from '../general/ImageGallery';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
        <TagGroup data={data.tags} />
      </header>
      <div className="description-alone">
        {/* <div className={data.image.length === 0 ? 'description-alone' : 'description'}> */}
        <p>
          {data.desc}{' '}
          <a className="link-to-project" href={data.link}> Link to Project </a>
        </p>
      </div>
      <ImageGallery data={data.images} />
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    images: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    tags: PropTypes.array.isRequired,
  }).isRequired,
};

export default Cell;
