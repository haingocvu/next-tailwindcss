import { FC, PropsWithChildren } from 'react';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';

interface IProps extends PropsWithChildren<any> {}

const BasicLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BasicLayout;
