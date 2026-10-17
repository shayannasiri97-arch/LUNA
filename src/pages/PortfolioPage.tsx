import React, { useState } from 'react';
import { PageRoute, PortfolioItem } from '../types/index.ts';
import { PORTFOLIO_ITEMS } from '../data/portfolioData.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface PortfolioPageProps {
  onNavigate: (route: PageRoute, hash?: string) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'همه سبک‌ها' },
    { id: 'skin', label: 'پوست و فیشیال' },
    { id: 'makeup', label: 'میکاپ و آرایش' },
    { id: 'hair', label: 'مو و بافت' },
    { id: 'bridal', label: 'عروس و نامزدی' },
    { id: 'nails', label: 'ناخن و اسپا' },
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#fedeb2]/30 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-48 left-10 w-80 h-80 rounded-full bg-[#ffdad8]/20 blur-3xl pointer-events-none -z-10" />

        {/* Header & Breadcrumb Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-12 text-right">
          {/* Breadcrumb */}
          <nav aria-label="مسیریاب صفحه" className="flex items-center gap-2 mb-8 text-sm text-[#4e4541]">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="hover:text-[#725b38] transition-colors"
            >
              خانه
            </a>
            <span className="text-[#d1c4be] font-sans">/</span>
            <span className="text-[#725b38] font-bold">نمونه‌کارها و ایده‌ها</span>
          </nav>

          {/* Editorial Intro Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4 items-start">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#ebe8e3]/80 border border-[#e5e2dd] text-[#725b38] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#725b38]" />
                <span className="text-xs font-semibold tracking-wider uppercase">
                  LUNA CURATED PORTFOLIO • LOOKBOOK
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#1c1c19] font-serif tracking-tight">
                زیبایی را از نزدیک ببینید
              </h1>
              <p className="text-base text-[#4e4541] max-w-2xl leading-relaxed text-justify">
                با مجموعه‌ای از سبک‌ها و ایده‌های زیبایی آشنا شوید و برای انتخاب سبک دلخواه خود از تصاویر الهام بگیرید.
              </p>
            </div>

            {/* Authenticity & Philosophy Notice */}
            <div className="lg:col-span-4 bg-[#f6f3ee] border border-[#e5e2dd] p-6 rounded-3xl shadow-xs flex flex-col gap-2 relative overflow-hidden text-right">
              <div className="absolute top-0 right-0 w-16 h-1 rounded-bl-full bg-[#725b38]" />
              <div className="flex items-center gap-2 text-[#725b38]">
                <span className="material-symbols-outlined text-[20px] fill">auto_awesome</span>
                <span className="text-sm font-bold">ایده‌های زیبایی و گالری الهام‌بخش</span>
              </div>
              <p className="text-xs text-[#4e4541] leading-relaxed text-justify">
                این ژورنال برای کشف هماهنگی بافت، رنگ و درخشش طبیعی شما تدوین شده تا پیش از ورود به سالن، نگاهی شفاف به استایل اختصاصی خود داشته باشید.
              </p>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="mt-12 flex flex-wrap items-center gap-2.5">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#130d09] text-[#ffffff] font-bold shadow-sm'
                    : 'bg-[#f0ede9] text-[#4e4541] hover:bg-[#ebe8e3] hover:text-[#1c1c19]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Lookbook Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative flex flex-col bg-[#ffffff] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#e5e2dd]/70 text-right"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f0ede9]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.imageAlt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130d09]/80 via-[#130d09]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#ffffff]/85 backdrop-blur-md text-[#1c1c19] text-xs font-semibold shadow-xs">
                  {item.badge}
                </span>

                <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between text-[#ffffff]">
                  <div>
                    <p className="text-[11px] text-[#fedeb2] tracking-wider font-semibold">
                      سرویس تخصصی لونا
                    </p>
                    <h3 className="text-base sm:text-lg font-bold">{item.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#ffffff]/20 backdrop-blur-md flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between gap-3 bg-[#ffffff] flex-1">
                <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-[#f0ede9] flex items-center justify-between text-[#725b38] text-xs font-semibold">
                  <span>{item.meta}</span>
                  <span className="flex items-center gap-1 group-hover:text-[#1c1c19] transition-colors">
                    مشاهده جزئیات
                    <span className="material-symbols-outlined text-[16px] rotate-180">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
            <span className="material-symbols-outlined text-[#807570] text-[48px]">
              filter_list_off
            </span>
            <h4 className="text-lg font-bold text-[#1c1c19]">موردی در این دسته یافت نشد</h4>
            <p className="text-sm text-[#4e4541] max-w-sm">
              به زودی نمونه‌کارهای تازه به این مجموعه افزوده خواهد شد.
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className="mt-2 text-xs font-semibold text-[#725b38] underline"
            >
              مشاهده تمامی سبک‌ها
            </button>
          </div>
        )}
      </section>

      {/* Style Discovery Consultation Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
        <div className="relative bg-[#130d09] text-[#ffffff] rounded-3xl p-8 lg:p-14 overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10 border border-[#2a221e]">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#725b38]/15 blur-2xl pointer-events-none" />
          <div className="absolute left-1/4 -top-24 w-60 h-60 rounded-full bg-[#fedeb2]/10 blur-2xl pointer-events-none" />

          <div className="flex flex-col gap-4 max-w-xl z-10 text-right">
            <div className="inline-flex items-center gap-2 text-[#fedeb2]">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-xs tracking-wider uppercase font-semibold">
                مشاوره حضوری و شخصی‌سازی استایل
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#ffffff]">
              سبک دلخواه خود را هنوز پیدا نکرده‌اید؟
            </h2>
            <p className="text-sm text-[#d2c4bd] leading-relaxed text-justify">
              متخصصان زیبایی لونا در یک جلسه اختصاصی چهره‌شناسی و نیازسنجی، متناسب با فرم صورت، جنس مو و سلیقه منحصربه‌فردتان، بهترین مسیر زیبایی را پیش روی شما قرار می‌دهند.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10">
            <button
              type="button"
              onClick={() => onNavigate('booking')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#fedeb2] text-[#281800] text-sm font-bold text-center hover:bg-[#e0c298] transition-all shadow-md cursor-pointer"
            >
              رزرو نوبت مشاوره
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ffffff]/15 hover:bg-[#ffffff]/25 text-[#ffffff] text-sm font-medium text-center backdrop-blur-md transition-all border border-[#ffffff]/20 cursor-pointer"
            >
              تماس با کارشناسان
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
