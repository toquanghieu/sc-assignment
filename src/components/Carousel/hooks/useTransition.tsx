import React, { useEffect, useRef, useState } from 'react';

const useTransition = (
  referenceElement:
    | React.MutableRefObject<HTMLElement | null>
    | HTMLElement
    | null,
  classNames?: string,
  defaultDuration = 150,
) => {
  const [transitionDuration, setTransitionDuration] = useState<number>(0);

  const tiemoutShowRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tiemoutHideRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionDurationSet = useRef(false);

  const getTransitionTime = (element: HTMLElement) => {
    if (element !== null && !transitionDurationSet.current) {
      transitionDurationSet.current = true;

      const { transitionDuration } = window.getComputedStyle(element);
      const time = Number(transitionDuration.replace('s', '')) * 1000;
      setTransitionDuration(time);
      return;
    }

    if (!classNames) {
      return;
    }

    const arrayOfClasses = classNames?.split(' ');

    if (classNames?.includes('duration')) {
      const durationClass = arrayOfClasses?.find((className) =>
        className.includes('duration'),
      );

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const time = Number(durationClass?.split('-')[1].replace(/\D/g, ''));
      setTransitionDuration(time);
      return;
    } else if (classNames?.includes('transition')) {
      setTransitionDuration(defaultDuration);
    }
  };

  useEffect(() => {
    if (transitionDurationSet.current) {
      return;
    }

    getTransitionTime(referenceElement as HTMLElement);
  }, [referenceElement]);

  const onTransitionShow = (callback?: () => any) => {
    if (tiemoutShowRef.current !== null) {
      clearTimeout(tiemoutShowRef.current);
    }

    tiemoutShowRef.current = setTimeout(() => {
      callback?.();
    }, 50);
  };

  const onTransitionHide = (callback?: () => any) => {
    if (!transitionDurationSet.current) {
      return;
    }

    if (tiemoutHideRef.current !== null) {
      clearTimeout(tiemoutHideRef.current);
    }

    tiemoutHideRef.current = setTimeout(() => {
      callback?.();
    }, transitionDuration);
  };

  useEffect(() => {
    return () => {
      if (tiemoutHideRef.current !== null) {
        clearTimeout(tiemoutHideRef.current);
      }
    };
  }, []);

  return {
    transitionDuration,
    onTransitionShow,
    onTransitionHide,
    getTransitionTime,
  };
};

export { useTransition };
