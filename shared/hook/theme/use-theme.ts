import { themeContext } from '@app/shared/components/theme/ThemeProvider';
import { IThemeContextValue } from '@app/shared/utils/themeUtils';
import { useContext } from 'react';

export const useTheme = (): IThemeContextValue => {
  const { colorMode, updateColorMode } = useContext(themeContext);
  return { colorMode, updateColorMode };
};
