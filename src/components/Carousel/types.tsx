import type { BaseComponent } from './baseComponent';

interface CarouselTheme {
  carouselWrapper?: string;
  pointer?: string;
  block?: string;
  visible?: string;
  invisible?: string;
  slideRight?: string;
  slideLeft?: string;
  nextBtn?: string;
  nextBtnIcon?: string;
  prevBtn?: string;
  prevBtnIcon?: string;
  indicatorsWrapper?: string;
  indicator?: string;
  activeIndicator?: string;
}

interface CarouselProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  theme?: CarouselTheme;
  interval?: number;
  keyboard?: boolean;
  pause?: 'hover' | boolean;
  touch?: boolean;
  showIndicators?: boolean;
  showControls?: boolean;
  ride?: 'carousel' | boolean;
  wrap?: boolean;
  prevBtnIcon?: JSX.Element;
  nextBtnIcon?: JSX.Element;
  stopSliding?: boolean;
  current?: number;
  crossFade?: boolean;
  onSlide?: () => void;
  onSlid?: () => void;
}

export type { CarouselProps };
