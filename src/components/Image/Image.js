import React from 'react';

import useImage, { STATUS } from '../../hooks/useImage';
import ImageDefault from '../../assets/image_default.svg';

import Loading from '../Loading/Loading';

export default function Image({ src, style, alt }) {
  const [status, image] = useImage(src);
  let imageUrl;

  if (status === STATUS.IMAGE_LOADING) return <Loading />;

  if (status === STATUS.FAILED) {
    imageUrl = ImageDefault;
  } else {
    imageUrl = src;
  }

  return <img src={imageUrl} alt={alt} className={style} />;
}
