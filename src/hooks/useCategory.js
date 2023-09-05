import { useEffect, useState } from "react"


export const useCategory = (urlToFetch) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch(urlToFetch);
        const response = await result.json();
        setData(response);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }

    };

    fetchData()
  }, [urlToFetch]);

  return [data, isLoading, isError];
}