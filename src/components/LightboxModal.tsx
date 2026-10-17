import React, { useEffect } from 'react';
import { PortfolioItem } from '../types/index.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onRequestStyle: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onRequestStyle,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && item) {
        onClose();
      }
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#130d09]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-item-title"
    >
      <div
        className="relative bg-[#ffffff] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-[#e5e2dd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن پنجره"
          className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-[#130d09]/75 text-[#ffffff] hover:bg-[#130d09] flex items-center justify-center backdrop-blur-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fedeb2]"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Image Frame */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#f0ede9] overflow-hidden">
          <ImageWithFallback
            src={item.image}
            alt={item.imageAlt || item.title}
            fallbackTitle={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#130d09]/60 via-transparent to-transparent pointer-events-none" />
          <span className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur-md text-[#1c1c19] text-xs font-semibold shadow-sm">
            {item.badge}
          </span>
        </div>

        {/* Modal Info Section */}
        <div className="p-6 sm:p-8 flex flex-col gap-4 overflow-y-auto text-right">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-[#725b38] font-bold uppercase tracking-widest">
              LUNA BEAUTY INSIGHT • {item.categoryLabel}
            </span>
            <h3 id="lightbox-item-title" className="text-xl sm:text-2xl font-bold text-[#1c1c19]">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#725b38]">
              {item.subtitle}
            </p>
          </div>

          <p className="text-sm text-[#4e4541] leading-relaxed text-justify">
            {item.description}
          </p>

          <div className="p-3.5 rounded-2xl bg-[#f6f3ee] border border-[#e5e2dd]/70 flex items-center justify-between text-xs text-[#4e4541]">
            <span className="font-medium text-[#1c1c19]">{item.meta}</span>
            <span className="text-[#725b38] font-medium">اجرا با مواد ارگانیک و درجه‌یک</span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#f0ede9]">
            <div className="flex items-center gap-2 text-[#4e4541] text-xs">
              <span className="material-symbols-outlined text-[#725b38] text-[20px]">
                verified
              </span>
              <span>قابل شخصی‌سازی متناسب با ویژگی‌های چهره شما</span>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestStyle(item);
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#130d09] text-[#ffffff] text-sm font-semibold hover:bg-[#2a221e] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>درخواست این سبک برای من</span>
              <span className="material-symbols-outlined text-lg">calendar_month</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
