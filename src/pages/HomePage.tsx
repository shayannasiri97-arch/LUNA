import React, { useState } from 'react';
import { PageRoute, PortfolioItem } from '../types/index.ts';
import { LUNA_INFO, SERVICES_LIST, GALLERY_HIGHLIGHTS } from '../data/portfolioData.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface HomePageProps {
  onNavigate: (route: PageRoute, hash?: string) => void;
  onOpenBookingModal: (serviceName?: string) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingModal,
  onOpenLightbox,
}) => {
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'salon' | 'skin' | 'styling'>('all');

  // Contact quick form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactService, setContactService] = useState('hair');
  const [contactMsg, setContactMsg] = useState('');
  const [contactFeedback, setContactFeedback] = useState(false);
  const [contactError, setContactError] = useState('');

  const filteredGallery = GALLERY_HIGHLIGHTS.filter((item) => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  const handleQuickContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || contactName.trim().length < 3) {
      setContactError('لطفاً نام و نام خانوادگی خود را کامل وارد نمایید.');
      return;
    }
    const clean = contactPhone.replace(/\s+/g, '').replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
    if (!/^(\+98|0)?9\d{9}$/.test(clean)) {
      setContactError('شماره تماس همراه نامعتبر است (مثال: ۰۹۱۲۳۴۵۶۷۸۹).');
      return;
    }

    setContactError('');
    setContactFeedback(true);
    setContactName('');
    setContactPhone('');
    setContactMsg('');
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#fcf9f4] via-[#f6f3ee] to-[#fcf9f4] py-12 lg:py-20"
      >
        {/* Ambient Luminous Orbs */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#fedeb2]/35 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#f1b9b7]/25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 text-right">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ebe8e3]/85 text-[#725b38] shadow-sm border border-[#e5e2dd]/60">
                <svg className="w-4 h-4 text-[#725b38] fill-current" viewBox="0 0 24 24">
                  <path d="M12.3 2a10 10 0 0 0-1.9 19.8 10 10 0 1 1 1.9-19.8z" />
                </svg>
                <span className="text-xs font-semibold tracking-wider">
                  سفیر آرامش و درخشش طبیعی
                </span>
              </div>

              {/* Main Persian Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[62px] text-[#1c1c19] font-normal font-serif">
                زیبایی شما، <span className="text-[#725b38] font-medium italic">هنر ماست</span>
              </h1>

              {/* Supporting Sentence */}
              <p className="text-base sm:text-lg text-[#4e4541] max-w-xl leading-relaxed">
                {LUNA_INFO.heroSubtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBookingModal()}
                  className="px-8 py-3.5 rounded-full bg-[#130d09] text-[#ffffff] font-medium text-sm sm:text-base shadow-lg shadow-[#130d09]/15 hover:bg-[#2a221e] hover:shadow-xl active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>رزرو نوبت</span>
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="px-7 py-3.5 rounded-full bg-[#ebe8e3] text-[#1c1c19] font-medium text-sm sm:text-base shadow-sm hover:bg-[#e5e2dd] active:scale-98 transition-all cursor-pointer"
                >
                  مشاهده خدمات
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-6 max-w-lg">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#ffffff]/90 border border-[#e5e2dd]/60 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#fedeb2]/50 flex items-center justify-center shrink-0 text-[#725b38]">
                    <span className="material-symbols-outlined text-xl">spa</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-sm font-bold text-[#1c1c19]">محیطی آرامش‌بخش</span>
                    <span className="text-xs text-[#4e4541]">فضای کامپکت و اختصاصی VIP</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#ffffff]/90 border border-[#e5e2dd]/60 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#fedeb2]/50 flex items-center justify-center shrink-0 text-[#725b38]">
                    <span className="material-symbols-outlined text-xl">verified</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-sm font-bold text-[#1c1c19]">متریال ممتاز جهانی</span>
                    <span className="text-xs text-[#4e4541]">برندهای ارگانیک و روز دنیا</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual Presentation */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Architectural Arch Backdrop */}
                <div className="absolute -inset-3 rounded-t-[14rem] rounded-b-3xl bg-[#fedeb2]/35 transform rotate-1 scale-102 blur-sm" />
                <div className="relative overflow-hidden rounded-t-[14rem] rounded-b-3xl shadow-2xl bg-[#f6f3ee] aspect-[4/5] flex items-center justify-center border border-[#e5e2dd]">
                  <ImageWithFallback
                    src={LUNA_INFO.heroInteriorImg}
                    alt="نمای اختصاصی و دلنشین سالن لونا با طاق‌های مینیمال و آرامش‌بخش"
                    fallbackTitle="نمای سالن تخصصی لونا"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Glass Floating Badge */}
                  <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-[#fcf9f4]/85 backdrop-blur-md shadow-lg border border-[#ffffff]/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#130d09] flex items-center justify-center text-[#ffffff]">
                        <span className="material-symbols-outlined text-sm">hotel_class</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm text-[#1c1c19]">سالن تخصصی لونا</div>
                        <div className="text-[11px] text-[#725b38] font-medium">پناهگاه آرامش و هنر زیبایی</div>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#fedeb2] text-[#281800] font-bold">
                      زعفرانیه
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="w-full py-20 bg-[#f6f3ee]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-14">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="text-xs font-semibold text-[#725b38] tracking-widest uppercase">
              منوی اختصاصی خدمات
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c19] font-serif">
              خدمات زیبایی لونا
            </h2>
            <p className="text-base text-[#4e4541]">
              تجربه‌ای اختصاصی از شکوه، آرامش و ظرافت
            </p>
            <div className="w-12 h-0.5 bg-[#e0c298] rounded-full mt-1" />
          </div>

          {/* 6 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                onClick={() => onNavigate('services')}
                className="group relative rounded-3xl p-7 bg-[#ffffff] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#e5e2dd]/70 cursor-pointer"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#f0ede9] flex items-center justify-center text-[#725b38] group-hover:bg-[#130d09] group-hover:text-[#ffffff] transition-colors">
                    <span className="material-symbols-outlined text-2xl">{srv.iconName}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1c1c19] mt-6 mb-2 text-right">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#4e4541] leading-relaxed text-right text-justify">
                    {srv.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between text-[#725b38] border-t border-[#f0ede9]">
                  <span className="text-xs font-semibold">{srv.tagline}</span>
                  <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
                    arrow_left
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#130d09] text-[#ffffff] font-medium text-sm hover:bg-[#2a221e] shadow-md transition-all cursor-pointer"
            >
              <span>مشاهده جزئیات کامل و فهرست خدمات</span>
              <span className="material-symbols-outlined text-base">arrow_back</span>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT LUNA SECTION */}
      <section id="about" className="w-full py-20 bg-[#fcf9f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-[#fedeb2]/40" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] bg-[#f0ede9] border border-[#e5e2dd]">
                  <ImageWithFallback
                    src={LUNA_INFO.aboutPortraitImg}
                    alt="درخشش طبیعی پوست و آرامش بخشیدن به چهره در سالن زیبایی لونا"
                    fallbackTitle="زیبایی و اصالت چهره"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#ffffff] p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-[#e5e2dd]">
                  <div className="w-12 h-12 rounded-full bg-[#fedeb2] flex items-center justify-center text-[#281800]">
                    <span className="material-symbols-outlined text-2xl">eco</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#1c1c19]">اصالت و سلامت</div>
                    <div className="text-xs text-[#4e4541]">مواد کاملاً گیاهی و درمانی</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start gap-6 text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ebe8e3] text-[#725b38] border border-[#e5e2dd]/60">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span className="text-xs font-semibold">فلسفه و اصالت سالن لونا</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c19] font-serif">
                درباره سالن زیبایی لونا
              </h2>
              <p className="text-base sm:text-lg text-[#4e4541] leading-relaxed text-justify">
                در سالن زیبایی لونا، باور داریم که زیبایی در کنار آرامش و اعتمادبه‌نفس معنا پیدا می‌کند.
                هدف ما فراهم کردن فضایی دلنشین و ارائه خدمات زیبایی با دقت، ظرافت و توجه به نیازهای شماست.
              </p>

              {/* Ambiance and Philosophy Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f6f3ee] border border-[#e5e2dd]/60">
                  <span className="material-symbols-outlined text-[#725b38] text-2xl mt-0.5 shrink-0">
                    clean_hands
                  </span>
                  <div className="flex flex-col text-right">
                    <span className="text-sm font-bold text-[#1c1c19]">
                      پروتکل‌های بهداشتی دقیق
                    </span>
                    <span className="text-xs text-[#4e4541] mt-1 leading-relaxed">
                      استریلیزاسیون پزشکی برای تمامی وسایل و ملزومات یک‌بار مصرف.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f6f3ee] border border-[#e5e2dd]/60">
                  <span className="material-symbols-outlined text-[#725b38] text-2xl mt-0.5 shrink-0">
                    psychology_alt
                  </span>
                  <div className="flex flex-col text-right">
                    <span className="text-sm font-bold text-[#1c1c19]">
                      مشاوره چهره‌شناسی
                    </span>
                    <span className="text-xs text-[#4e4541] mt-1 leading-relaxed">
                      انتخاب بهترین فرم، رنگ و آرایش هماهنگ با هندسه چهره شما.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ebe8e3] hover:bg-[#e5e2dd] text-[#1c1c19] text-sm font-medium transition-colors cursor-pointer"
                >
                  <span>بیشتر درباره داستان لونا بدانید</span>
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why-us" className="w-full py-20 bg-[#f6f3ee]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="text-xs font-semibold text-[#725b38] tracking-widest uppercase">
              تعهد ما به برتری
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c19] font-serif">
              چرا لونا را انتخاب کنید؟
            </h2>
            <p className="text-base text-[#4e4541]">
              ۴ تمایز برجسته که لونا را به انتخاب اول بانوان شیک‌پوش تبدیل کرده است
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#ffffff] shadow-sm hover:shadow-lg transition-all flex flex-col gap-4 text-right border border-[#e5e2dd]/60">
              <div className="w-12 h-12 rounded-2xl bg-[#fedeb2]/40 flex items-center justify-center text-[#725b38]">
                <span className="material-symbols-outlined text-2xl">filter_vintage</span>
              </div>
              <h3 className="text-lg font-bold text-[#1c1c19]">توجه به جزئیات</h3>
              <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                دقت موشکافانه در ارائه ظریف‌ترین متدهای زیبایی روز دنیا، تضمین‌کننده جلوه‌ای طبیعی و ماندگار است.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#ffffff] shadow-sm hover:shadow-lg transition-all flex flex-col gap-4 text-right border border-[#e5e2dd]/60">
              <div className="w-12 h-12 rounded-2xl bg-[#fedeb2]/40 flex items-center justify-center text-[#725b38]">
                <span className="material-symbols-outlined text-2xl">wb_sunny</span>
              </div>
              <h3 className="text-lg font-bold text-[#1c1c19]">محیطی آرام و دلنشین</h3>
              <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                فضایی اختصاصی، لوکس و به دور از هرگونه هیاهو برای تمدد اعصاب و استراحتی همراه با نوازش روح.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#ffffff] shadow-sm hover:shadow-lg transition-all flex flex-col gap-4 text-right border border-[#e5e2dd]/60">
              <div className="w-12 h-12 rounded-2xl bg-[#fedeb2]/40 flex items-center justify-center text-[#725b38]">
                <span className="material-symbols-outlined text-2xl">person_check</span>
              </div>
              <h3 className="text-lg font-bold text-[#1c1c19]">توجه به سلیقه شما</h3>
              <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                مشاوره تخصصی فردی پیش از ارائه هر خدمت متناسب با ویژگی‌های منحصربه‌فرد چهره و خواسته‌های شما.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#ffffff] shadow-sm hover:shadow-lg transition-all flex flex-col gap-4 text-right border border-[#e5e2dd]/60">
              <div className="w-12 h-12 rounded-2xl bg-[#fedeb2]/40 flex items-center justify-center text-[#725b38]">
                <span className="material-symbols-outlined text-2xl">diamond</span>
              </div>
              <h3 className="text-lg font-bold text-[#1c1c19]">تجربه‌ای متفاوت</h3>
              <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                ماندگاری بالا، استفاده از محصولات پریمیوم ارگانیک و استانداردهای تراز اول آرایش و مراقبت جهانی.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL GALLERY SECTION */}
      <section id="gallery" className="w-full py-20 bg-[#fcf9f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
          {/* Header & Filter Chips */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-right">
            <div>
              <span className="text-xs font-semibold text-[#725b38] tracking-widest uppercase">
                گالری تصاویر
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c19] font-serif mt-1">
                زیبایی را از نزدیک ببینید
              </h2>
              <p className="text-base text-[#4e4541] mt-2">
                نگاهی به شکوه، هماهنگی و فضاسازی اختصاصی سالن لونا
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setGalleryFilter('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  galleryFilter === 'all'
                    ? 'bg-[#fedeb2] text-[#281800] shadow-sm'
                    : 'bg-[#ebe8e3] text-[#4e4541] hover:text-[#1c1c19]'
                }`}
              >
                همه
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter('salon')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  galleryFilter === 'salon'
                    ? 'bg-[#fedeb2] text-[#281800] shadow-sm'
                    : 'bg-[#ebe8e3] text-[#4e4541] hover:text-[#1c1c19]'
                }`}
              >
                فضای سالن
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter('skin')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  galleryFilter === 'skin'
                    ? 'bg-[#fedeb2] text-[#281800] shadow-sm'
                    : 'bg-[#ebe8e3] text-[#4e4541] hover:text-[#1c1c19]'
                }`}
              >
                مراقبت پوست
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter('styling')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  galleryFilter === 'styling'
                    ? 'bg-[#fedeb2] text-[#281800] shadow-sm'
                    : 'bg-[#ebe8e3] text-[#4e4541] hover:text-[#1c1c19]'
                }`}
              >
                استایلینگ
              </button>
            </div>
          </div>

          {/* Gallery Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px]">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('portfolio')}
                className={`group relative rounded-3xl overflow-hidden shadow-sm bg-[#f0ede9] border border-[#e5e2dd] cursor-pointer ${item.span}`}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.alt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130d09]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex items-end p-6">
                  <div className="text-right">
                    <span className="text-xs text-[#fedeb2] font-semibold">{item.badge}</span>
                    <h4 className="text-base sm:text-lg font-bold text-[#ffffff]">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#725b38] hover:text-[#130d09] transition-colors"
            >
              <span>مشاهده تمام نمونه‌کارها در ژورنال لونا</span>
              <span className="material-symbols-outlined text-base">arrow_back</span>
            </button>
          </div>
        </div>
      </section>

      {/* BOOKING CALL TO ACTION SECTION */}
      <section id="booking" className="w-full py-20 bg-[#f6f3ee]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ebe8e3] via-[#f0ede9] to-[#e5e2dd] p-8 md:p-14 shadow-xl border border-[#e5e2dd]">
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#fedeb2]/40 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[#f1b9b7]/25 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-full bg-[#fedeb2]/80 flex items-center justify-center text-[#725b38] shadow-inner">
                <span className="material-symbols-outlined text-3xl">event_available</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c19] font-serif">
                آماده‌اید درخشش خود را تجربه کنید؟
              </h2>
              <p className="text-base text-[#4e4541] max-w-xl">
                برای دریافت خدمات زیبایی، با ما در ارتباط باشید و زمان مناسب خود را انتخاب کنید.
              </p>

              {/* Reassurance Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <span className="px-4 py-1.5 rounded-full bg-[#ffffff]/90 text-[#1c1c19] text-xs font-semibold shadow-sm flex items-center gap-1.5 border border-[#e5e2dd]">
                  <span className="material-symbols-outlined text-[#725b38] text-sm">check_circle</span>
                  مشاوره رایگان قبل از رزرو
                </span>
                <span className="px-4 py-1.5 rounded-full bg-[#ffffff]/90 text-[#1c1c19] text-xs font-semibold shadow-sm flex items-center gap-1.5 border border-[#e5e2dd]">
                  <span className="material-symbols-outlined text-[#725b38] text-sm">check_circle</span>
                  پذیرش با تعیین وقت قبلی
                </span>
                <span className="px-4 py-1.5 rounded-full bg-[#ffffff]/90 text-[#1c1c19] text-xs font-semibold shadow-sm flex items-center gap-1.5 border border-[#e5e2dd]">
                  <span className="material-symbols-outlined text-[#725b38] text-sm">check_circle</span>
                  رعایت کامل پروتکل‌های بهداشتی
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button
                  type="button"
                  onClick={() => onOpenBookingModal()}
                  className="px-10 py-4 rounded-full bg-[#130d09] text-[#ffffff] font-bold text-base shadow-xl hover:bg-[#2a221e] active:scale-98 transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>رزرو سریع نوبت</span>
                  <span className="material-symbols-outlined text-xl">calendar_month</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('booking')}
                  className="px-8 py-4 rounded-full bg-[#ffffff] text-[#1c1c19] font-semibold text-base shadow-sm hover:bg-[#f6f3ee] border border-[#e5e2dd] transition-all cursor-pointer"
                >
                  فرم جامع نوبت‌دهی
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full py-20 bg-[#fcf9f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-14">
          <div className="text-center max-w-xl mx-auto flex flex-col items-center gap-3">
            <span className="text-xs font-semibold text-[#725b38] tracking-widest uppercase">
              پذیرش و راهنمایی
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c19] font-serif">
              با لونا در ارتباط باشید
            </h2>
            <p className="text-base text-[#4e4541]">
              تیم تشریفات سالن لونا مشتاقانه پاسخگوی پرسش‌های شماست
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Cards Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-5 rounded-2xl bg-[#f6f3ee] border border-[#e5e2dd]/70 flex items-center gap-4 text-right">
                <div className="w-12 h-12 rounded-full bg-[#fedeb2]/50 flex items-center justify-center text-[#725b38] shrink-0">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#4e4541]">شماره تماس و مشاوره</span>
                  <a href={LUNA_INFO.phoneCall} className="text-base font-bold text-[#1c1c19] dir-ltr text-right font-sans hover:text-[#725b38]">
                    {LUNA_INFO.phoneDisplay}
                  </a>
                  <a href={LUNA_INFO.mobileCall} className="text-sm text-[#725b38] dir-ltr text-right font-sans hover:underline">
                    {LUNA_INFO.mobileDisplay}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#f6f3ee] border border-[#e5e2dd]/70 flex items-start gap-4 text-right">
                <div className="w-12 h-12 rounded-full bg-[#fedeb2]/50 flex items-center justify-center text-[#725b38] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#4e4541]">آدرس سالن زیبایی لونا</span>
                  <span className="text-sm text-[#1c1c19] leading-relaxed mt-0.5">
                    {LUNA_INFO.address}
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#f6f3ee] border border-[#e5e2dd]/70 flex items-center gap-4 text-right">
                <div className="w-12 h-12 rounded-full bg-[#fedeb2]/50 flex items-center justify-center text-[#725b38] shrink-0">
                  <span className="material-symbols-outlined text-2xl">schedule</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#4e4541]">ساعات کاری</span>
                  <span className="text-sm font-medium text-[#1c1c19] mt-0.5">
                    همه‌روزه از ساعت ۹:۰۰ صبح الی ۱۹:۰۰ عصر
                  </span>
                  <span className="text-xs text-[#725b38]">(صرفاً با هماهنگی و تعیین وقت قبلی)</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#f6f3ee] border border-[#e5e2dd]/70 flex items-center gap-4 text-right">
                <div className="w-12 h-12 rounded-full bg-[#fedeb2]/50 flex items-center justify-center text-[#725b38] shrink-0">
                  <span className="material-symbols-outlined text-2xl">photo_camera</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#4e4541]">صفحه رسمی اینستاگرام</span>
                  <a
                    href={LUNA_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#725b38] dir-ltr text-right font-sans hover:underline"
                  >
                    {LUNA_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Stylized Location Card */}
              <div
                onClick={() => onNavigate('contact')}
                className="w-full h-44 rounded-2xl bg-[#ebe8e3] border border-[#e5e2dd] shadow-inner flex items-center justify-center overflow-hidden relative cursor-pointer group"
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#725b38_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 flex flex-col items-center gap-2 p-4 text-center bg-[#ffffff]/90 rounded-2xl shadow-md border border-[#e5e2dd] group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[#725b38] text-2xl">pin_drop</span>
                  <span className="text-sm font-bold text-[#1c1c19]">زعفرانیه • موقعیت اختصاصی لونا</span>
                  <span className="text-xs text-[#4e4541]">دسترسی آسان با پارکینگ اختصاصی</span>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#f6f3ee] border border-[#e5e2dd]/80 shadow-sm flex flex-col gap-6 text-right">
                <div>
                  <h3 className="text-xl font-bold text-[#1c1c19]">
                    درخواست وقت یا مشاوره سریع
                  </h3>
                  <p className="text-sm text-[#4e4541] mt-1">
                    مشخصات خود را ثبت فرمایید تا کارشناسان پذیرش در کوتاه‌ترین زمان با شما تماس بگیرند.
                  </p>
                </div>

                {contactError && (
                  <div className="p-3 rounded-xl bg-[#ffdad6] text-[#ba1a1a] text-xs font-medium">
                    {contactError}
                  </div>
                )}

                {contactFeedback ? (
                  <div className="p-6 rounded-2xl bg-[#fedeb2]/60 border border-[#e0c298] text-[#281800] text-center flex flex-col items-center gap-3">
                    <span className="material-symbols-outlined text-3xl text-[#725b38]">task_alt</span>
                    <h4 className="text-base font-bold">درخواست شما با موفقیت ثبت شد</h4>
                    <p className="text-xs text-[#4e4541] max-w-sm leading-relaxed">
                      از حسن انتخاب شما سپاسگزاریم. کارشناسان پذیرش سالن لونا به‌زودی با شما تماس خواهند گرفت.
                    </p>
                    <button
                      type="button"
                      onClick={() => setContactFeedback(false)}
                      className="mt-2 text-xs text-[#725b38] font-semibold underline"
                    >
                      ارسال درخواست جدید
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickContactSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-[#1c1c19]" htmlFor="user-name">
                          نام و نام خانوادگی <span className="text-[#ba1a1a]">*</span>
                        </label>
                        <input
                          id="user-name"
                          type="text"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="مثال: سارا رادمنش"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-[#e5e2dd] text-[#1c1c19] text-sm shadow-xs outline-none focus:border-[#725b38] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-[#1c1c19]" htmlFor="user-phone">
                          شماره تماس همراه <span className="text-[#ba1a1a]">*</span>
                        </label>
                        <input
                          id="user-phone"
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="۰۹۱۲XXXXXXX"
                          dir="ltr"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-[#e5e2dd] text-[#1c1c19] text-sm shadow-xs outline-none focus:border-[#725b38] transition-all text-right font-sans"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#1c1c19]" htmlFor="user-service">
                        خدمت مورد نظر
                      </label>
                      <select
                        id="user-service"
                        value={contactService}
                        onChange={(e) => setContactService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-[#e5e2dd] text-[#1c1c19] text-sm shadow-xs outline-none focus:border-[#725b38] transition-all cursor-pointer"
                      >
                        <option value="hair">خدمات مو (کوتاهی، رنگ و احیا)</option>
                        <option value="makeup">میکاپ و گریم تخصصی</option>
                        <option value="skin">پاک‌سازی و فیشیال پوست</option>
                        <option value="nail">مانیکور، پدیکور و دیزاین ناخن</option>
                        <option value="lash-brow">لیفت مژه و اصلاح تخصصی ابرو</option>
                        <option value="bridal">پکیج اختصاصی عروس VIP</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#1c1c19]" htmlFor="user-msg">
                        توضیحات یا تاریخ پیشنهادی (اختیاری)
                      </label>
                      <textarea
                        id="user-msg"
                        rows={3}
                        value={contactMsg}
                        onChange={(e) => setContactMsg(e.target.value)}
                        placeholder="روز یا ساعت مد نظر، یا نیاز به مشاوره ویژه..."
                        className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-[#e5e2dd] text-[#1c1c19] text-sm shadow-xs outline-none focus:border-[#725b38] transition-all resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 rounded-full bg-[#130d09] text-[#ffffff] font-bold text-sm shadow-lg hover:bg-[#2a221e] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>ارسال درخواست نوبت</span>
                      <span className="material-symbols-outlined text-lg">send</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
