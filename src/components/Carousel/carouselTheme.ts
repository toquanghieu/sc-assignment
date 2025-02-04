const CarouselTheme = {
  carouselWrapper: 'relative',
  pointer: 'touch-pan-y',
  block: '!block',
  visible: 'opacity-100 !z-10',
  invisible: 'opacity-0 z-0',
  slideRight: 'translate-x-full',
  slideLeft: '-translate-x-full',
  nextBtn:
    'absolute bottom-0 right-0 top-0 z-30 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none',
  nextBtnIcon: 'inline-block h-8 w-8 [&>svg]:h-8',
  prevBtn:
    'absolute bottom-0 left-0 top-0 z-30 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none',
  prevBtnIcon: 'inline-block h-8 w-8 [&>svg]:h-8',
  indicatorsWrapper:
    'bottom-0 z-10 mt-[-24px] flex list-none justify-center px-2 py-1.5 h-4 bg-black/25 rounded-lg m-auto place-items-center',
  indicator:
    'mx-[3px] box-content h-1 w-1 rounded flex-initial cursor-pointer bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none focus:outline-none',
  activeIndicator: '!opacity-100',
};

export default CarouselTheme;
