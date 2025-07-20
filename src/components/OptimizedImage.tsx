
import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  responsive?: boolean;
}

// Generate WebP and AVIF versions of image paths
const generateModernFormats = (originalSrc: string) => {
  const extension = originalSrc.split('.').pop()?.toLowerCase();
  if (!extension || !['jpg', 'jpeg', 'png'].includes(extension)) {
    return { webp: '', avif: '' };
  }
  
  const basePath = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
  return {
    webp: `${basePath}.webp`,
    avif: `${basePath}.avif`
  };
};

// Generate responsive srcset for different screen sizes
const generateSrcSet = (src: string, responsive: boolean = false) => {
  if (!responsive) return '';
  
  const extension = src.split('.').pop()?.toLowerCase();
  if (!extension || !['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(extension)) {
    return '';
  }
  
  const basePath = src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
  const ext = `.${extension}`;
  
  return [
    `${basePath}_480w${ext} 480w`,
    `${basePath}_768w${ext} 768w`,
    `${basePath}_1024w${ext} 1024w`,
    `${basePath}_1200w${ext} 1200w`,
    `${src} 1920w`
  ].join(', ');
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style,
  width,
  height,
  priority = false,
  sizes = '100vw',
  responsive = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const { webp, avif } = generateModernFormats(src);
  const srcSet = generateSrcSet(src, responsive);
  const webpSrcSet = generateSrcSet(webp, responsive);
  const avifSrcSet = generateSrcSet(avif, responsive);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    setImageError(false);
  };

  const handleError = () => {
    setImageError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${className}`} style={style} ref={imgRef}>
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse rounded`}
          style={{ width, height }}
        />
      )}
      {isInView && !imageError && (
        <picture>
          {/* AVIF format (most modern, best compression) */}
          {avif && (
            <source
              srcSet={avifSrcSet || avif}
              sizes={sizes}
              type="image/avif"
            />
          )}
          
          {/* WebP format (good compression, wide support) */}
          {webp && (
            <source
              srcSet={webpSrcSet || webp}
              sizes={sizes}
              type="image/webp"
            />
          )}
          
          {/* Fallback to original format */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            srcSet={srcSet}
            className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      )}
      
      {/* Fallback content for broken images */}
      {imageError && (
        <div 
          className={`${className} bg-gray-100 flex items-center justify-center text-gray-400 text-sm`}
          style={{ width, height, minHeight: height || '200px' }}
        >
          <span>Image not available</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
