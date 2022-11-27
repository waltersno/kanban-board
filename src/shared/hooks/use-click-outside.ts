import { useEffect, useRef, Dispatch, SetStateAction } from 'react';

export const useClickOutside = (setIsComponentVisible: Dispatch<SetStateAction<boolean>>) => {
  const ref = useRef(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !(ref.current as HTMLElement).contains(event.target as HTMLElement)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref };
};
