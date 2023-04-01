import {
  ColorMode,
  themeContextDefaultValue,
  getColorMode,
  updateColorModeToDom,
} from '@app/shared/utils/themeUtils';
import { createContext, FC, PropsWithChildren, useState } from 'react';

const themeContext = createContext(themeContextDefaultValue);

const mode = getColorMode();

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(mode);

  const updateColorMode = (colorMode: ColorMode) => {
    localStorage.theme = colorMode === 'dark' ? 'light' : 'dark';
    updateColorModeToDom(colorMode === 'dark' ? 'light' : 'dark');
    setColorMode((colorMode) => (colorMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <themeContext.Provider value={{ colorMode, updateColorMode }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;

export { themeContext };
