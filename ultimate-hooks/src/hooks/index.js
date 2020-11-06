import axios from 'axios';
import { useState } from 'react';

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  const getAll = async () => {
    const response = await axios.get(baseUrl);    
    setResources(response.data);
  };

  const create = async (resource) => {
    await axios.post(baseUrl, resource);
    await getAll();    
  };

  const service = {
    create,
    getAll,
  };

  return [resources, service];
};
