import WithClientOnlyComp from '@app/shared/hoc/withClientOnlyComp';
import { useTheme } from '@app/shared/hook/theme/use-them';
import React from 'react';
import TwSwitch from '../form/switch/Switch';

const ColorMode = () => {
  const { colorMode, setColorMode } = useTheme();

  console.log('color mode', colorMode);

  return <TwSwitch enabled={colorMode === 'light'} />;
};

export default ColorMode;

export const ClientSideColorMode = WithClientOnlyComp(ColorMode);
