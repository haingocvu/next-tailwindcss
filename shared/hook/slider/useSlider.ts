import { Dispatch, SetStateAction, useState } from 'react';

interface ISliderReturnData {
  next: () => void;
  back: () => void;
  canNext: boolean;
  canBack: boolean;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const useSlider = (
  itemsCount: number,
  infiniteLoop: boolean = false
): ISliderReturnData => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    setActiveIndex((currentIndex) => {
      const newIndex =
        currentIndex === itemsCount - 1
          ? infiniteLoop
            ? 0
            : currentIndex
          : currentIndex + 1;
      return newIndex;
    });
  };

  const back = () => {
    setActiveIndex((currentIndex) => {
      const newIndex =
        currentIndex === 0
          ? infiniteLoop
            ? itemsCount - 1
            : 0
          : currentIndex - 1;
      return newIndex;
    });
  };

  const canNext = infiniteLoop ? true : activeIndex < itemsCount - 1;
  const canBack = infiniteLoop ? true : activeIndex > 0;

  return {
    next,
    back,
    canNext,
    canBack,
    activeIndex,
    setActiveIndex,
  };
};

export default useSlider;
