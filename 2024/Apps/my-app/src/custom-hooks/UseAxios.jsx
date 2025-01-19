import { useState } from 'react';

const useAxios = (url, { method = 'GET', headers = {}, defaultData = null } = {}) => {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (body = null) => {
    setLoading(true);
    setError(null);

    try {
      const options = { method, headers };
      if (body) options.body = JSON.stringify(body);

      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const result = await response.json();
      setData(result);
      console.log(result)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, execute };
};

export default useAxios;
