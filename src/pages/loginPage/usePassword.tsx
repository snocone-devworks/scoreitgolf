import { useMemo, useState } from 'react';

export const usePassword = () => {
  const [value, updateValue] = useState<string>('');
  const [changed, setChanged] = useState<boolean>(false);
  const isValid = useMemo<boolean>(() => {
    if (!changed) return true;
    return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
  }, [value, changed]);

  const setValue = (value: string) => {
    updateValue(value);
    setChanged(true);
  };

  return { changed, isValid, value, setValue };
};
