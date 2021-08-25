import { useMemo } from 'react';

export default function useLocationParams(deps = []) {
  return useMemo(() => {
    if (typeof window === 'undefined') {
      return {};
    }
    const hash = {};
    const params = new URL(window.location).searchParams;
    for (const [key, value] of params) {
      hash[key] = value;
    }
    return hash;
  }, deps);
}
