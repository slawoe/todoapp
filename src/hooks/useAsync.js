import { useEffect, useState } from "react";

function useAsync(asyncFunction) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const doFetch = async () => {
      try {
        setLoading(true);
        setError(false);
        setData(null);
        const data = await asyncFunction();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, [asyncFunction]);

  return { data, loading, error };
}

export default useAsync;
