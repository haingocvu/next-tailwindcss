import React, { ComponentPropsWithoutRef, FC } from 'react';

interface IProps extends ComponentPropsWithoutRef<any> {}

const DefaultIcon: FC<IProps> = (props) => {
  return <span {...props} />;
};

export default DefaultIcon;
