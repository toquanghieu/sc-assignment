import { LoadingIcon } from '~/components/Icons';
import * as React from 'react';
type LoadingProps = {
  className: string;
}
export const Loading = ({ className }: LoadingProps) => (
  <div className={className}>
    <div role="status">
      {LoadingIcon}
    </div>
  </div>
);