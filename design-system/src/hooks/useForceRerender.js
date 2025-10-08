import { useState, useCallback } from 'react';

export const useForceRerender = () => {
  const [hasForcedRerender, setForcedRerender] = useState(0);
  return [
    hasForcedRerender,
    useCallback(() => setForcedRerender(n => n + 1), [])
  ];
}
