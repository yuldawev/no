import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue === null) return initialValue;
    else return JSON.parse(jsonValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
