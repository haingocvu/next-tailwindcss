import { ImageProps } from 'next/image';
import { FC, useState } from 'react';

const withTransition = <P extends ImageProps>(WrappedComponent: FC<P>) => {
  const _Component: FC<P> = (props) => {
    const { className, onLoadingComplete, ...rest } = props;
    const [isReady, setIsReady] = useState(false);

    const onloadHandle = (e: any) => {
      setIsReady(true);
      onLoadingComplete?.(e);
    };

    return (
      <WrappedComponent
        className={`${className} transition duration-1000 ${
          isReady ? 'scale-100 blur-0' : 'scale-125 blur-2xl'
        }`}
        onLoadingComplete={onloadHandle}
        {...(rest as P)}
      />
    );
  };
  _Component.displayName = `withTransition(${
    WrappedComponent.displayName ?? WrappedComponent.name
  })`;
  return _Component;
};

export default withTransition;
