import React from 'react';
import { PageRoute } from '../types/index.ts';
import { LUNA_INFO } from '../data/portfolioData.ts';

interface FooterProps {
  onNavigate: (route: PageRoute, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (route: PageRoute, hash?: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(route, hash);
  };

  return (
    <footer className="w-full bg-[#f6f3ee] text-[#1c1c19] border-t border-[#e5e2dd]/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4 text-right">
            <div className="flex items-center gap-3">
              <img
                src={LUNA_INFO.logoUrl}
                alt="لوگوی سالن لونا"
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-bold text-[#1c1c19] font-sans">
                سالن زیبایی لونا
              </span>
            </div>
            <p className="text-sm text-[#4e4541] max-w-md leading-relaxed text-justify">
              پناهگاهی برای آراستگی، شکوه و آرامش اصیل. در مجموعه تخصصی لونا، مراقبت‌های زیبایی و
              آیین‌های احیاگرانه‌ی تن و روان در فضایی آرامش‌بخش با استانداردهای ممتاز ارائه می‌گردد.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs font-semibold text-[#725b38]">اینستاگرام رسمی:</span>
              <a
                href={LUNA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#1c1c19] hover:text-[#725b38] transition-colors dir-ltr font-sans"
              >
                {LUNA_INFO.instagramHandle}
              </a>
            </div>
          </div>

          {/* Quick Access Column */}
          <div className="lg:col-span-3 flex flex-col gap-3 text-right">
            <h3 className="text-base font-bold text-[#1c1c19] mb-2">
              دسترسی سریع
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#4e4541]">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav('home', undefined, e)}
                  className="hover:text-[#725b38] transition-colors"
                >
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleNav('services', undefined, e)}
                  className="hover:text-[#725b38] transition-colors"
                >
                  منوی خدمات و ریچوال‌ها
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav('about', undefined, e)}
                  className="hover:text-[#725b38] transition-colors"
                >
                  درباره سالن لونا
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  onClick={(e) => handleNav('portfolio', undefined, e)}
                  className="hover:text-[#725b38] transition-colors"
                >
                  نمونه‌کارها و ایده‌ها
                </a>
              </li>
              <li>
                <a
                  href="/booking"
                  onClick={(e) => handleNav('booking', undefined, e)}
                  className="hover:text-[#725b38] transition-colors"
                >
                  درخواست رزرو اختصاصی
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav('contact', undefined, e)}
                  className="hover:text-[#725b38] transition-colors"
                >
                  تماس با ما و پذیرش
                </a>
              </li>
            </ul>
          </div>

          {/* Info and Reception Column */}
          <div className="lg:col-span-4 flex flex-col gap-3 text-right">
            <h3 className="text-base font-bold text-[#1c1c19] mb-2">
              اطلاعات و پذیرش
            </h3>
            <div className="flex flex-col gap-3.5 text-sm text-[#4e4541]">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#725b38] text-[20px] mt-0.5 shrink-0">
                  location_on
                </span>
                <span className="leading-relaxed">{LUNA_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#725b38] text-[20px] shrink-0">
                  call
                </span>
                <span>
                  شماره تماس:{' '}
                  <a
                    href={LUNA_INFO.phoneCall}
                    className="dir-ltr inline-block font-sans hover:text-[#725b38] font-medium"
                  >
                    {LUNA_INFO.phoneDisplay}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#725b38] text-[20px] shrink-0">
                  schedule
                </span>
                <span>{LUNA_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#e5e2dd] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4e4541] text-center">
          <p>تمامی حقوق این وب‌سایت برای سالن زیبایی لونا محفوظ است. © ۱۴۰۳</p>
          <span className="text-[11px] text-[#725b38] tracking-widest uppercase font-semibold">
            LUNA BEAUTY SANCTUARY • ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
};
