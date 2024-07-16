import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';

interface Props<T> {
  ref: MutableRefObject<T | null>;
  setState: Dispatch<SetStateAction<boolean>>;
}

export function useClickOutside<T extends HTMLElement>({ ref, setState }: Props<T>) {
  useEffect(() => {
    const clickOutsideHandler = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setState(false);
      }
    };

    document.addEventListener('mousedown', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
    };
  }, []);
}
