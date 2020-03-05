import { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const resetValue = () => {
    setValue(initialValue);
  };

  const bindValue = {
    value,
    onChange: e => {
      setValue(e.target.value);
    },
  };

  return [value, bindValue, resetValue];
}
