import { useEffect, useState } from 'react';

export const useAfterHydrate = (): boolean => {
  const [afterHydrate, setAfterHydrate] = useState<boolean>(false);
  useEffect(() => {
    setAfterHydrate(true);
  }, []);

  return afterHydrate;
};
