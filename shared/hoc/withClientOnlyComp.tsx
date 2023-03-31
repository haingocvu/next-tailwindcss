import { FC } from 'react';
import { useAfterHydrate } from '../hook/hydrate/use-after-hydrate';

const WithClientOnlyComp = <P extends JSX.IntrinsicAttributes = any>(
  WrapperComp: FC<P>
): FC<P> => {
  const _Component: FC<P> = (props) => {
    const afterHydrate = useAfterHydrate();
    return afterHydrate ? <WrapperComp {...props} /> : null;
  };
  _Component.displayName = `WithClient(${
    WrapperComp?.displayName || WrapperComp?.name
  })`;
  return _Component;
};

export default WithClientOnlyComp;
