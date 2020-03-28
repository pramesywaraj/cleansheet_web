import { useRef, useCallback } from 'react';

export default function useDebounce(func, delay = 0) {
  // To keep track of latest things
  const ref = useRef({ id: 0 });

  ref.current.func = func;

  const debouncer = useCallback(
    // mewakili semua argumen yang dimasukkan
    (...args) => {
      ref.current.promise = new Promise((resolve, reject) => {
        // Agar agar ke deteksi promise yang telah dikembalikan
        ref.current.resolve = resolve;
        ref.current.reject = reject;
      });

      // Kalo ada timout, akan dihapus dulu biar keganti
      if (ref.current.timeout) {
        clearTimeout(ref.current.timeout);
      }

      // buat time out baru sebagai debounce nya
      ref.current.timeout = setTimeout(async () => {
        ref.current.timeout = undefined;
        // assign id buat requestnya
        const id = ref.current.id + 1;
        // update request id nya, yang baru tentunya
        ref.current.id = id;

        const checkLatestResponse = () => id === ref.current.id;

        try {
          // jalankan fungsi yang di debounce
          const response = await ref.current.fn(...args);
          // If the request is latest, resolve
          if (checkLatestResponse()) ref.current.resolve(response);
        } catch (err) {
          // If the request is latest, reject
          if (checkLatestResponse()) ref.current.reject(err);
        }
      }, delay);

      return ref.current.promise;
    },
    [delay],
  );

  return debouncer;
}
