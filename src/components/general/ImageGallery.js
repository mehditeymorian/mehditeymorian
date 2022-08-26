import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Image = ({ data }) => {
  const [clicked, setClicked] = useState(false);

  const split = data.image.split('/');
  const alt = split[split.length - 1];

  const onImageClick = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <img
        onClick={onImageClick}
        className={clicked ? 'gallery-img-clicked' : 'gallery-img'}
        src={`${process.env.PUBLIC_URL}${data.image}`}
        alt={alt}
      />
    </div>
  );
};

Image.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const ImageGallery = ({ data }) => (
  <div className="gallery">
    {/* eslint-disable-next-line react/no-array-index-key */}
    {data.map((each, index) => <Image data={each} key={index} />)}
  </div>
);

ImageGallery.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default ImageGallery;
