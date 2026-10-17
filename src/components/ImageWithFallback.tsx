import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackIcon?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = '',
  className = '',
  fallbackTitle = 'تصویر سالن لونا',
  fallbackIcon = 'spa',
  ...props
}) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`w-full h-full min-h-[140px] flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#f0ede9] to-[#ebe8e3] text-[#725b38] select-none text-center ${className}`}
        role="img"
        aria-label={alt || fallbackTitle}
      >
        <span className="material-symbols-outlined text-3xl opacity-75 mb-2">{fallbackIcon}</span>
        <span className="text-xs font-medium text-[#4e4541] tracking-wide line-clamp-1">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
      loading="lazy"
      {...props}
    />
  );
};
