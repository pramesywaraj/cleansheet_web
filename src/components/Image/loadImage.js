export default (url, crossOrigin) => {
  const image = new Image();

  if (crossOrigin) image.crossOrigin = crossOrigin;

  return new Promise((resolve, reject) => {
    const loaded = e => {
      unbindEvents(image);
      resolve(e.target || e.srcElement);
    };

    const errored = err => {
      unbindEvents(image);
      reject(err);
    };

    image.onload = loaded;
    image.onerror = errored;
    image.onabort = errored;

    image.src = url;
  });
};

function unbindEvents(image) {
  image.onload = null;
  image.onerror = null;
  image.onabort = null;

  try {
    delete image.src;
  } catch (e) {}
}
