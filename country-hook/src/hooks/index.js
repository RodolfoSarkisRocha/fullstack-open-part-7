import Axios from 'axios';
import { useEffect, useState } from 'react';

export const useCountry = (name) => {
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (name) {
      (async () => {
        const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;

        try {
          const response = await Axios.get(url);
          const countryMapped = {
            ...response?.data[0],
            found: true,
          };
          setCountry(countryMapped);
        } catch {
          setCountry({ found: false });
        }
      })();
    }
  }, [name]);

  return {
    country,
  };
};
