import { useState, useEffect } from 'react';
import axios from 'axios';

import useDebounce from './useDebounce';

async function AddMinCart() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        return reject(`Oh no! Error id: ${Math.random()}`);
      }
      resolve('Ahay');
    }, Math.random() * 4000);
  });
}

export default function useAddMinCart(initCounter) {
  const [counter, setCounter] = useState(parseInt(initCounter, 10));
  const AddMinDebounce = useDebounce(AddMinCart, 500);

  // useEffect(() => {
  //   const response = AddMinDebounce;
  //   console.log('response', response);
  // }, [AddMinDebounce, counter]);

  function add() {
    console.log(typeof counter);
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
