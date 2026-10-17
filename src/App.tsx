/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { PageRoute, PortfolioItem } from './types/index.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { QuickBookingModal } from './components/QuickBookingModal.tsx';
import { LightboxModal } from './components/LightboxModal.tsx';

// Pages
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { PortfolioPage } from './pages/PortfolioPage.tsx';
import { BookingPage } from './pages/BookingPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);
  const [isQuickBookingOpen, setIsQuickBookingOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  // Support both GitHub Pages repository subpath (/Luna) and root hosting (/)
  const getBasePrefix = (): string => {
    const envBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    if (envBase && envBase !== '/') {
      return envBase;
    }
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/Luna')) {
      return '/Luna';
    }
    return '';
  };

  // Parse path to route
  const getRouteFromPath = (path: string): PageRoute => {
    const basePrefix = getBasePrefix();
    let cleanPath = path;
    if (basePrefix && cleanPath.startsWith(basePrefix)) {
      cleanPath = cleanPath.slice(basePrefix.length);
    }
    cleanPath = cleanPath.replace(/\/$/, '') || '/';

    // Also support hash fallback (e.g. #services or #/services)
    const hash = typeof window !== 'undefined' ? window.location.hash.replace(/^#\/?/, '').split('?')[0] : '';
    const candidate = (cleanPath === '/' && hash) ? hash : cleanPath.replace(/^\//, '');

    switch (candidate) {
      case 'services':
        return 'services';
      case 'about':
        return 'about';
      case 'portfolio':
      case 'projects':
        return 'portfolio';
      case 'booking':
      case 'reserve':
        return 'booking';
      case 'contact':
        return 'contact';
      case '':
      case 'home':
      default:
        return 'home';
    }
  };

  const getPathFromRoute = (route: PageRoute): string => {
    const basePrefix = getBasePrefix();
    const routePart = route === 'home' ? '' : `/${route}`;
    return `${basePrefix}${routePart}` || '/';
  };

  // Sync with browser URL on initial load and handle browser back/forward
  useEffect(() => {
    const handleLocationChange = () => {
      const route = getRouteFromPath(window.location.pathname);
      setCurrentRoute(route);

      // Check URL query parameters (e.g. ?service=hair or ?book=bridal)
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get('service') || params.get('serviceId');
      if (serviceParam) {
        setSelectedServiceForBooking(serviceParam);
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Update document title dynamically
  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      home: 'لونا | LUNA — سالن تخصصی زیبایی و پناهگاه آرامش بانوان',
      services: 'خدمات تخصصی زیبایی و مراقبت | سالن لونا',
      about: 'درباره ما و فلسفه زیبایی | سالن لونا',
      portfolio: 'نمونه‌کارها و ژورنال لوک‌بوک | سالن لونا',
      booking: 'رزرو آنلاین نوبت و هماهنگی | سالن لونا',
      contact: 'تماس با ما و مشاوره اختصاصی | سالن لونا',
    };
    document.title = titles[currentRoute] || 'لونا | LUNA';
  }, [currentRoute]);

  // Main navigation function
  const navigate = useCallback((
    route: PageRoute, 
    hash?: string, 
    queryParams?: Record<string, string>
  ) => {
    setCurrentRoute(route);

    let newUrl = getPathFromRoute(route);

    if (queryParams && Object.keys(queryParams).length > 0) {
      const searchParams = new URLSearchParams(queryParams);
      newUrl += `?${searchParams.toString()}`;
      if (queryParams.service) {
        setSelectedServiceForBooking(queryParams.service);
      }
    }

    if (hash) {
      newUrl += `#${hash.replace(/^#/, '')}`;
    }

    // Push state without page reload
    if (window.location.pathname + window.location.search + window.location.hash !== newUrl) {
      window.history.pushState({}, '', newUrl);
    }

    // Scroll handling
    if (hash) {
      const targetElement = document.getElementById(hash.replace(/^#/, ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    // Default scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenQuickBooking = () => {
    setIsQuickBookingOpen(true);
  };

  const handleCloseQuickBooking = () => {
    setIsQuickBookingOpen(false);
  };

  const handleOpenLightbox = (item: PortfolioItem) => {
    setLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setLightboxItem(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased selection:bg-primary/20 selection:text-primary">
      {/* Global Accessible Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigate}
        onOpenBookingModal={handleOpenQuickBooking}
      />

      {/* Main Page Route Switcher */}
      <div className="flex-grow">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigate}
            onOpenBookingModal={handleOpenQuickBooking}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentRoute === 'services' && (
          <ServicesPage
            onNavigate={navigate}
            onSelectServiceForBooking={(serviceTitle) => navigate('booking', undefined, { service: serviceTitle })}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={navigate}
            onOpenBookingModal={handleOpenQuickBooking}
          />
        )}

        {currentRoute === 'portfolio' && (
          <PortfolioPage
            onNavigate={navigate}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentRoute === 'booking' && (
          <BookingPage
            onNavigate={navigate}
            initialService={selectedServiceForBooking}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            onNavigate={navigate}
          />
        )}
      </div>

      {/* Global Footer */}
      <Footer onNavigate={navigate} />

      {/* Quick Booking Modal */}
      <QuickBookingModal
        isOpen={isQuickBookingOpen}
        onClose={handleCloseQuickBooking}
        onNavigateToBooking={() => navigate('booking')}
      />

      {/* Lightbox Modal for Portfolio Details */}
      <LightboxModal
        item={lightboxItem}
        onClose={handleCloseLightbox}
        onRequestStyle={(item) => {
          handleCloseLightbox();
          navigate('booking', undefined, { service: item.title });
        }}
      />
    </div>
  );
}
