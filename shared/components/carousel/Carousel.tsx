import React, { FC, PropsWithoutRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import Indicator from './indicator/Indicator';
import Image from 'next/image';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import useSlider from '@app/shared/hook/slider/useSlider';
import { getBase64ImageUrl } from '@app/shared/utils/image/optimize';
import TransitionImage from '../image/TransitionImage';

interface IProps extends PropsWithoutRef<any> {
  items: Array<any>;
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
      <motion.div
        animate={{ x: `-${activeIndex * 100}vw` }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        className="whitespace-nowrap w-full h-full"
      >
        {items.map((img, index) => {
          return (
            <TransitionImage
              key={index}
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              alt="test"
              loader={loader}
              src={img.url}
              width="704"
              height="1280"
              sizes="100vw"
              className="w-full h-full inline-block"
              placeholder="blur"
              blurDataURL={img.blurUrl}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Carousel;
