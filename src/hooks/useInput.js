import { useState, useEffect } from 'react';
import inputValidation from './inputValidation';

export default function useInput(initialValue, callback) {
  const [inputState, setInputState] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetValue = () => {
    setInputState(initialValue);
  };

  const changeValue = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(inputValidation(inputState));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return [inputState, changeValue, resetValue, handleSubmit, errors];
}
