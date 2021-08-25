import { useMemo } from 'react';

export default function useLocationHash(deps = []) {
  return useMemo(() => {
    if (typeof window === 'undefined') {
      return {};
    }
    const hash = {};
    const params = new URLSearchParams(window.location.hash.slice(1));
    for (const [key, value] of params) {
      hash[key] = value;
    }
    return hash;
  }, deps);
}
