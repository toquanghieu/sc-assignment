import React from 'react';

export type BaseComponent = Pick<
  React.HTMLAttributes<HTMLElement>,
  | 'className'
  | 'id'
  | 'style'
  | 'onClick'
  | 'onMouseUp'
  | 'onMouseMove'
  | 'onMouseDown'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseOver'
  | 'onMouseOut'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onTouchStart'
  | 'onTouchMove'
  | 'onTouchEnd'
  | 'onScroll'
  | 'onDrop'
  | 'children'
> &
  Record<string, any>;
