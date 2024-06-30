import React, { ReactElement, useState } from 'react';
import * as NextImage from 'next/image';
import { ImageSkeleton } from '~/components/Icons';
type ImageProps = {
  src: string;
  className: string;
};
export const Image = ({ src, className }: ImageProps): ReactElement => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className="imageHolder">
      {!loaded && ImageSkeleton}
      {loaded && (
        <NextImage
          src={src}
          className={className}
          onLoad={() => setLoaded(true)}
          alt={'...'}
        />
      )}
    </div>
  );
};
