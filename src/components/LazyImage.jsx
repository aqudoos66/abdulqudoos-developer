// src/components/LazyImage.jsx
import { useEffect, useRef, useState } from 'react';

export default function LazyImage({
  src,
  alt,
  className = '',
  eager = false,
  width,
  height,
  ...rest
}) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={eager ? 'high' : undefined}
      className={`img-fade${loaded ? ' loaded' : ''}${className ? ` ${className}` : ''}`}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
      {...rest}
    />
  );
}