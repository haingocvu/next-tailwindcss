import { FC, PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren<unknown> {
  size?: 's' | 'm' | 'l';
}

const Tag: FC<IProps> = (props) => {
  const { children, size = 'l' } = props;
  const sizingOuterClasses = `${
    size === 's'
      ? 'px-1 py-0.5 h-4'
      : size === 'm'
      ? 'px-2 py-1 h-7'
      : 'px-3 py-2 h-10'
  }`;
  const sizingInnerClasses = `${
    size === 's' ? 'text-xxs' : size === 'm' ? 'text-xs/5 h-5' : 'text-base h-6'
  }`;
  return (
    <span
      className={`inline-flex flex-row items-start bg-yellow-300 rounded-2xl -rotate-12 ${sizingOuterClasses}`}
    >
      <span
        className={`inline-block ${sizingInnerClasses} normal not-italic font-bold font font-sans h-3 tracking-tight text-black -rotate-12`}
      >
        {children}
      </span>
    </span>
  );
};

export default Tag;
