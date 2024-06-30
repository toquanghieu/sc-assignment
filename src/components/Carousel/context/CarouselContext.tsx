import React, { createContext } from 'react';

interface CarouselContextProps {
  activeSlide: number;
  setTransitionDuration?: React.SetStateAction<any>;
  block?: string;
  visible?: string;
  crossFade?: boolean;
  setCarouselItems?: React.SetStateAction<any>;
  isFirstRender?: React.MutableRefObject<boolean>;
}

const CarouselContext = createContext<CarouselContextProps>({
  activeSlide: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTransitionDuration: () => {},
  block: '',
  visible: '',
  crossFade: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCarouselItems: () => {},
  isFirstRender: { current: true },
});

export { CarouselContext };
