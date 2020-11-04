import { useState } from 'react';

export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    inputProps: {
      value,
      onChange,
      type,
    },
    helpers: {
      reset,
    },
  };
};
