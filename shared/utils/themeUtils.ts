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
  setColorMode?: Dispatch<SetStateAction<ColorMode>>;
}

export const themeContextDefaultValue: IThemeContextValue = {
  colorMode: 'light',
};
