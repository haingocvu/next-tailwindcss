import { themeContext } from '@app/shared/components/theme/ThemeProvider';
import { IThemeContextValue } from '@app/shared/utils/themeUtils';
import { useContext } from 'react';

export const useTheme = (): IThemeContextValue => {
  const { colorMode, setColorMode } = useContext(themeContext);
  return { colorMode, setColorMode };
};
