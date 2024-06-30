import React, { useEffect, useContext, useRef, ReactElement } from 'react';
import type { CarouselItemProps } from './types';
import { CarouselContext } from '../context/CarouselContext';
import { useTransition } from '../hooks/useTransition';

const CarouselItem: React.FC<CarouselItemProps> = ({
  tag: Tag = 'div',
  className,
  itemID,
  children,
  ...props
}): ReactElement => {
  const itemRef = useRef<HTMLElement>(null);
  const {
    activeSlide,
    setTransitionDuration,
    block,
    visible,
    crossFade,
    setCarouselItems,
    isFirstRender,
  } = useContext(CarouselContext);

  const { transitionDuration } = useTransition(
    itemRef.current as unknown as HTMLElement,
    className,
  );

  useEffect(() => {
    if (isFirstRender?.current) {
      setCarouselItems((prev: any) => [
        ...prev,
        itemRef.current as unknown as HTMLElement,
      ]);
      return;
    }
  }, []);

  useEffect(() => {
    if (activeSlide === itemID - 1) {
      const itemElement = itemRef.current as unknown as HTMLElement;
      itemElement.classList.add(block as unknown as string);
      crossFade &&
        itemElement.classList.add(...(visible as unknown as string).split(' '));
      setTransitionDuration(transitionDuration);
    }
  }, [activeSlide, itemID, crossFade, transitionDuration]);

  return (
    <Tag ref={itemRef} className={className} {...props}>
      {children}
    </Tag>
  );
};

export default CarouselItem;
