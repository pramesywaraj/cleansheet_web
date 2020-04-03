import { useState } from 'react';
import axios from 'axios';

import useDebounce from './useDebounce';

async function AddMinCart() {
  try {
  } catch (err) {}
}

export default function useAddMinCart(initCounter) {
  const [counter, setCounter] = useState(initCounter);
  const AddMinDebounce = useDebounce();

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
