import React from 'react';

import useImage, { STATUS } from '../../hooks/useImage';
import ImageDefault from '../../assets/image_default.svg';

import SmallLoading from '../Loading/SmallLoading';

export default function Image({ src, style, alt }) {
  const [status, image] = useImage(src);
  let imageUrl;

  if (status === STATUS.IMAGE_LOADING) return <SmallLoading />;

  if (status === STATUS.FAILED) {
    imageUrl = ImageDefault;
  } else {
    imageUrl = src;
  }

  return <img src={imageUrl} alt={alt} className={style} />;
}
