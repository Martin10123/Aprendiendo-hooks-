import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(false);

  const [state, setstate] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = true;
    };
  }, []);

  useEffect(() => {
    setstate({
      loading: true,
      error: null,
      data: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setstate({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);

  return state;
};
