import { useEffect, useState } from 'react';

export default function useSpeakerDataLoader({ sessionizeUrl }) {
  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState('');
  useEffect(() => {
    setLoadingState('Loading...');
    setData([]);
    fetch(sessionizeUrl)
      .then((res) => res.json())
      .then((newData) => {
        setLoadingState('');
        setData(newData);
      })
      .catch(() => {
        setLoadingState('Error loading speakers.');
      });
  }, [sessionizeUrl]);
  return { data, loadingState };
}