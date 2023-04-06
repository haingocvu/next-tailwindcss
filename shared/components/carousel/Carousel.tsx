import React, { FC, PropsWithoutRef, useEffect } from 'react';
import Indicator from './indicator/Indicator';
import Image from 'next/image';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import useSlider from '@app/shared/hook/slider/useSlider';

interface IProps extends PropsWithoutRef<any> {
  items: Array<string>;
}

const Carousel: FC<IProps> = (props) => {
  const { items } = props;
  const { activeIndex, setActiveIndex, next, back, canBack, canNext } =
    useSlider(5, true);
  const loader = (props: any) => {
    const { src } = props;
    return `https://images.unsplash.com/${src}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [next]);

  const handleIndicatorClick = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  return (
    <div className="h-carousel bg-slate-800 relative">
      <div className="mx-auto flex w-full justify-center z-10 absolute bottom-1">
        <Indicator
          count={items.length}
          active={activeIndex}
          onClick={handleIndicatorClick}
        />
      </div>
      {canBack && (
        <div className="absolute z-10 left-1 flex h-full items-center">
          <MdOutlineNavigateBefore
            size="45px"
            color="white"
            className="cursor-pointer"
            onClick={back}
          />
        </div>
      )}
      {canNext && (
        <div className="absolute right-0 z-10 h-full flex items-center">
          <MdOutlineNavigateNext
            size="45px"
            color="white"
            className="cursor-pointer"
            onClick={next}
          />
        </div>
      )}
      <Image
        fill
        priority
        className="object-cover"
        alt="test"
        loader={loader}
        src={items[activeIndex]}
      />
    </div>
  );
};

export default Carousel;
