import { Theme } from '@shared/types';
import { useEffect } from 'react';

interface Props {
  theme: Theme;
}

export function useUpdateTheme({ theme }: Props) {
  useEffect(() => {
    //document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
}
