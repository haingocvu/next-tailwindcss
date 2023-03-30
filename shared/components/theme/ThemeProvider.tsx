import {
  ColorMode,
  themeContextDefaultValue,
  getColorMode,
} from '@app/shared/utils/themeUtils';
import { createContext, FC, PropsWithChildren, useState } from 'react';

const themeContext = createContext(themeContextDefaultValue);

const mode = getColorMode();

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(mode);
  return (
    <themeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;

export { themeContext };
