import { Dispatch, SetStateAction } from 'react';

export const getColorMode = (): ColorMode => {
  if (typeof window !== 'object') return 'light';
  let mode: ColorMode = 'light';
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    mode = 'dark';
  }
  return mode;
};

export type ColorMode = 'light' | 'dark';

export interface IThemeContextValue {
  colorMode: ColorMode;
  updateColorMode?: (colorMode: ColorMode) => void;
}

export const themeContextDefaultValue: IThemeContextValue = {
  colorMode: 'light',
};

export const updateColorModeToDom = (mode: ColorMode) => {
  // remove old ones
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.remove('light');

  // add new one
  document.documentElement.classList.add(mode);
};
