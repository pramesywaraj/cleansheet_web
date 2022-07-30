import { useState, useEffect, useRef } from 'react';
import loadImage from 'components/Image/loadImage';

const cache = new Map();

export const STATUS = {
  IMAGE_LOADING: 'loading',
  IMAGE_LOADED: 'loaded',
  FAILED: 'failed',
};

export default function useImage(src) {
  const cachedImage = cache.get(src);
  const initialState = cachedImage ? STATUS.IMAGE_LOADED : STATUS.IMAGE_LOADING;
  const [status, setStatus] = useState(initialState);
  const mounted = useRef(false);

  useEffect(() => {
    if (!src || status === STATUS.IMAGE_LOADED) return;
    mounted.current = true;

    async function load() {
      try {
        const image = await loadImage(src);

        if (!mounted.current) return;

        cache.set(src, image);
        setStatus(STATUS.IMAGE_LOADED);
      } catch (err) {
        if (!mounted.current) return;

        cache.delete(src);
        setStatus(STATUS.FAILED);
      }
    }

    load();

    return () => {
      mounted.current = false;
    };
  }, [src, status]);

  return [status, cachedImage];
}
