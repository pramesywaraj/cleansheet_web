import { useState } from 'react';

export default function useAddMinCart(initCounter) {
  const [counter, setCounter] = useState(initCounter);

  function add() {
    setCounter(counter + 1);
  }

  function min() {
    if (counter === 1) {
      return;
    }

    setCounter(counter - 1);
  }

  return [counter, add, min];
}
