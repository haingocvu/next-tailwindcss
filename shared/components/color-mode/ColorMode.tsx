import WithClientOnlyComp from '@app/shared/hoc/withClientOnlyComp';
import { useTheme } from '@app/shared/hook/theme/use-theme';
import React from 'react';
import TwSwitch from '../form/switch/Switch';

const ColorMode = () => {
  const { colorMode, updateColorMode } = useTheme();

  console.log('color mode', colorMode);

  const handleChange = (isLightMode: any) => {
    updateColorMode?.(isLightMode ? 'light' : 'dark');
  };

  return <TwSwitch enabled={colorMode === 'light'} onChange={handleChange} />;
};

export default ColorMode;

export const ClientSideColorMode = WithClientOnlyComp(ColorMode);
