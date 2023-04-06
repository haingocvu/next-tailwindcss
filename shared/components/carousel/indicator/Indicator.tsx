import { FC, PropsWithoutRef, useCallback } from 'react';

interface IProps extends PropsWithoutRef<any> {
  count: number;
  active: number;
  onClick?: (newIndex: number) => void;
}

const Indicator: FC<IProps> = (props) => {
  const { count, active, onClick } = props;

  const renderItems = useCallback(() => {
    const handleItemClick = (itemIndex: number) => () => {
      onClick?.(itemIndex);
    };
    const result = [];
    for (let i = 0; i < count; i++) {
      const item = (
        <span
          key={i}
          className={`w-14 cursor-pointer h-2 bg-white mx-[1px] ${
            active === i ? 'opacity-100' : 'opacity-50'
          }`}
          onClick={handleItemClick(i)}
        ></span>
      );
      result.push(item);
    }
    return result;
  }, [active, count, onClick]);

  return <div className="inline-flex">{renderItems()}</div>;
};

export default Indicator;
