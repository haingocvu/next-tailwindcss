import { FC, PropsWithChildren } from 'react';
import classes from './Tag.module.css';

interface IProps extends PropsWithChildren<unknown> {}

const Tag: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <span
      className={`inline-flex flex-row items-start bg-yellow-300 rounded-2xl -rotate-12 px-1 py-0.5`}
    >
      <span
        className={`${classes.tagInner} inline-block normal not-italic font-bold font text-xxs font-sans h-3 tracking-tight text-black -rotate-12`}
      >
        {children}
      </span>
    </span>
  );
};

export default Tag;
