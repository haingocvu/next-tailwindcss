import { ReactElement, ReactNode } from 'react';
import BasicLayout from './BasicLayout';

const getDefaultLayout = (page: ReactElement): ReactNode => (
  <BasicLayout>{page}</BasicLayout>
);

export { BasicLayout, getDefaultLayout };
