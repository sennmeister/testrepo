import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowLeft } from 'static/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'static/icons/arrow-right.svg';
import './PhotoGallery.css';

const PhotoGallery = ({ photos }) => {
  const [preview, setPreview] = useState(null);

  const changePreview = (index) => {
    let validIndex;
    if (index === photos.length) {
      validIndex = 0;
    } else if (index === -1) {
      validIndex = photos.length - 1;
    } else {
      validIndex = index;
    }
    setPreview({
      ...photos[validIndex],
      index: validIndex
    });
  };

  return (
    <div className="PhotoGallery">

      {preview && (
        <div className="PhotoGallery-preview">
          <ArrowLeft onClick={() => changePreview(preview.index - 1)} />
          <img src={preview.src} alt={preview.alt} />
          <ArrowRight onClick={() => changePreview(preview.index + 1)} />
          <div onClick={() => setPreview(null)} />
        </div>
      )}

      <div className="PhotoGallery-list">
        {photos.map((photo, index) => (
          <div key={photo.src} onClick={() => changePreview(index)}>
            <div>
              <img src={photo.src} alt={photo.alt} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

const imagesPropTypes = PropTypes.exact({
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(imagesPropTypes)
};

export default PhotoGallery;
