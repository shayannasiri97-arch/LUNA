import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types/index.ts';
import { LUNA_INFO } from '../data/portfolioData.ts';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, hash?: string) => void;
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks: { label: string; route: PageRoute; hash?: string }[] = [
    { label: 'صفحه اصلی', route: 'home' },
    { label: 'خدمات ما', route: 'services' },
    { label: 'درباره ما', route: 'about' },
    { label: 'نمونه‌کارها', route: 'portfolio' },
    { label: 'رزرو نوبت', route: 'booking' },
    { label: 'تماس با ما', route: 'contact' },
  ];

  const handleLinkClick = (route: PageRoute, hash?: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(route, hash);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fcf9f4]/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(42,34,30,0.06)]'
          : 'bg-[#fcf9f4]/90 backdrop-blur-lg shadow-[0_1px_8px_rgba(42,34,30,0.04)]'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick('home', undefined, e)}
          className="flex items-center gap-3.5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#725b38] rounded-xl"
        >
          <img
            src={LUNA_INFO.logoUrl}
            alt="لوگوی سالن زیبایی لونا"
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col text-right">
            <span className="font-bold text-lg text-[#1c1c19] tracking-tight font-sans">
              لونا | LUNA
            </span>
            <span className="text-[10px] text-[#725b38] font-semibold tracking-widest uppercase">
              BEAUTY SANCTUARY
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          aria-label="منوی اصلی"
          className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#f0ede9]/70 border border-[#e5e2dd]/60 backdrop-blur-sm"
        >
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <a
                key={link.route}
                href={link.route === 'home' ? '/' : `/${link.route}`}
                onClick={(e) => handleLinkClick(link.route, link.hash, e)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#1c1c19] font-bold bg-[#ffffff] shadow-sm'
                    : 'text-[#4e4541] hover:text-[#1c1c19] hover:bg-[#ffffff]/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            type="button"
            onClick={onOpenBookingModal}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#130d09] text-[#ffffff] text-sm font-medium shadow-[0_4px_16px_rgba(42,34,30,0.12)] hover:bg-[#2a221e] hover:shadow-lg active:scale-98 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#725b38]"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            <span>رزرو سریع</span>
          </button>

          {/* Direct link button for full booking page */}
          <a
            href="/booking"
            onClick={(e) => handleLinkClick('booking', undefined, e)}
            className="w-10 h-10 rounded-full bg-[#fedeb2]/60 hover:bg-[#fedeb2] text-[#281800] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#725b38]"
            title="رفتن به صفحه رزرو نوبت"
            aria-label="صفحه رزرو نوبت"
          >
            <span className="material-symbols-outlined text-[20px]">event_available</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منوی موبایل'}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#f0ede9] hover:bg-[#ebe8e3] text-[#1c1c19] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#725b38]"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Menu */}
      <div
        id="mobile-navigation-menu"
        className={`lg:hidden transition-all duration-300 overflow-hidden border-b border-[#e5e2dd] bg-[#fcf9f4]/98 backdrop-blur-2xl shadow-xl ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <a
                key={link.route}
                href={link.route === 'home' ? '/' : `/${link.route}`}
                onClick={(e) => handleLinkClick(link.route, link.hash, e)}
                aria-current={isActive ? 'page' : undefined}
                className={`py-3 px-4 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'text-[#1c1c19] font-bold bg-[#ebe8e3]'
                    : 'text-[#4e4541] hover:text-[#1c1c19] hover:bg-[#f6f3ee]'
                }`}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-sm text-[#725b38]">
                  chevron_left
                </span>
              </a>
            );
          })}

          <div className="pt-4 mt-2 border-t border-[#e5e2dd]/70 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#130d09] text-[#ffffff] font-medium shadow-md hover:bg-[#2a221e] active:scale-98 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>رزرو سریع نوبت حضوری</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
