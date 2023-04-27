import { FC, PropsWithChildren } from 'react';
import Footer from './footer/Footer';

interface IProps extends PropsWithChildren<any> {}

const BasicLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <div>Nav Bar here</div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BasicLayout;
