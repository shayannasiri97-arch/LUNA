import React, { useState } from 'react';
import { PageRoute } from '../types/index.ts';
import { SERVICES_LIST, LUNA_INFO } from '../data/portfolioData.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface ServicesPageProps {
  onNavigate: (route: PageRoute, hash?: string) => void;
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'همه خدمات' },
    { id: 'hair', label: 'مو و براشینگ' },
    { id: 'makeup', label: 'میکاپ و گریم' },
    { id: 'nails', label: 'ناخن' },
    { id: 'lashes', label: 'ابرو و مژه' },
    { id: 'skincare', label: 'مراقبت از پوست' },
    { id: 'bridal', label: 'زیبایی و عروس' },
  ];

  const filteredServices = SERVICES_LIST.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const faqs = [
    {
      q: 'چگونه می‌توانم قبل از رزرو خدمات، مشاوره تخصصی دریافت کنم؟',
      a: 'شما می‌توانید به صورت آنلاین در فرم رزرو نوبت گزینه «مشاوره تخصصی» را انتخاب فرمایید یا از طریق تماس تلفنی با پذیرش لونا، یک جلسه ۱۵ دقیقه‌ای مشاوره رایگان با متخصص مربوطه تنظیم کنید.',
    },
    {
      q: 'چند روز قبل از مراسم باید برای پکیج عروس هماهنگ کرد؟',
      a: 'پیشنهاد ما برای پکیج‌های عروس، حداقل یک تا دو ماه قبل از تاریخ مراسم است تا مراحل تست میکاپ، مراقبت و پاک‌سازی پوستی و تثبیت استایل مو با آرامش کامل و بدون دغدغه انجام پذیرد.',
    },
    {
      q: 'آیا امکان کنسلی یا تغییر زمان نوبت وجود دارد؟',
      a: 'بله، تا ۲۴ ساعت قبل از زمان تعیین‌شده امکان جابجایی یا لغو نوبت از طریق تماس با مجموعه یا پنل آنلاین بدون هیچ‌گونه کسر هزینه‌ای میسر می‌باشد.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Ambient Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-12 right-1/4 w-96 h-96 rounded-full bg-[#fedeb2]/25 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-96 left-10 w-80 h-80 rounded-full bg-[#ffdad8]/25 blur-3xl pointer-events-none -z-10" />

        {/* Hero & Breadcrumb */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-14 text-right">
          {/* Breadcrumb */}
          <nav aria-label="مسیریابی" className="flex items-center gap-2 mb-8 text-sm text-[#4e4541]">
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
            <span className="text-[#725b38] font-bold">خدمات ما</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5 items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ebe8e3]/80 border border-[#e5e2dd]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#725b38]" />
                <span className="text-xs font-semibold text-[#725b38] tracking-widest uppercase">
                  BESPOKE BEAUTY EXPERIENCES
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#1c1c19] font-serif tracking-tight leading-tight">
                خدمات زیبایی لونا
              </h1>

              <p className="text-base sm:text-lg text-[#4e4541] max-w-2xl leading-relaxed text-justify">
                در لونا، هر خدمت با توجه به سلیقه، نیاز و زیبایی منحصربه‌فرد شما معرفی می‌شود.
                خدمات موردنظر خود را بررسی کنید و برای هماهنگی و دریافت نوبت با ما در ارتباط باشید.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('booking')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#130d09] text-[#ffffff] text-sm font-medium shadow-[0_8px_24px_rgba(42,34,30,0.14)] hover:bg-[#2a221e] active:scale-98 transition-all cursor-pointer group"
                >
                  <span>دریافت مشاوره و رزرو</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
                    arrow_left_alt
                  </span>
                </button>

                <a
                  href="#services-grid"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#f0ede9] hover:bg-[#ebe8e3] text-[#1c1c19] text-sm font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[#725b38] text-[20px]">
                    expand_more
                  </span>
                  <span>مشاهده فهرست خدمات</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-[#f6f3ee] border border-[#e5e2dd]">
                <ImageWithFallback
                  src={LUNA_INFO.servicesHeroImg}
                  alt="پرتره بانوی آرام در سالن زیبایی لونا با نور گرم و فضاسازی مینیمال"
                  fallbackTitle="پناهگاه آرامش و درخشش لونا"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130d09]/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-[#ffffff]/90 backdrop-blur-xl border border-[#ffffff]/70 flex items-center justify-between">
                  <div className="text-right">
                    <p className="text-[11px] font-semibold text-[#725b38] uppercase tracking-wider">
                      LUNA SANCTUARY
                    </p>
                    <p className="text-base font-bold text-[#1c1c19]">پناهگاه آرامش و درخشش</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#fedeb2] flex items-center justify-center text-[#281800]">
                    <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter Bar */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-10">
          <div className="p-2 rounded-2xl bg-[#f6f3ee] border border-[#e5e2dd] backdrop-blur-md flex items-center gap-2 overflow-x-auto no-scrollbar shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#130d09] text-[#ffffff] shadow-sm font-bold'
                    : 'text-[#4e4541] hover:text-[#1c1c19] hover:bg-[#f0ede9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* 6 Detailed Service Cards Bento Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20" id="services-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv) => (
              <article
                key={srv.id}
                className="group rounded-3xl bg-[#ffffff] p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#e5e2dd]/70 text-right"
              >
                <div className="flex flex-col gap-5">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#f0ede9]">
                    <ImageWithFallback
                      src={srv.image}
                      alt={srv.imageAlt}
                      fallbackTitle={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 px-3.5 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur-md text-xs font-semibold text-[#725b38]">
                      {srv.tagline}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#fedeb2]/50 flex items-center justify-center text-[#281800]">
                        <span className="material-symbols-outlined text-[24px]">
                          {srv.iconName}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1c1c19]">{srv.title}</h3>
                    </div>
                    <span className="text-xs text-[#807570] font-mono">{srv.indexNumber}</span>
                  </div>

                  <p className="text-sm text-[#4e4541] leading-relaxed text-justify">
                    {srv.description}
                  </p>

                  <ul className="flex flex-col gap-2.5 pt-2 text-xs sm:text-sm text-[#1c1c19]">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#725b38] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 flex items-center justify-between bg-[#f6f3ee]/80 p-4 rounded-2xl border border-[#e5e2dd]/60">
                  <div className="flex flex-col text-right">
                    <span className="text-[11px] text-[#807570]">شروع از</span>
                    <span className="text-sm font-bold text-[#725b38]">{srv.startingFrom}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectServiceForBooking(srv.title)}
                    className="px-5 py-2 rounded-full bg-[#130d09] text-[#ffffff] text-xs font-medium hover:bg-[#2a221e] transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>درخواست نوبت</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="py-16 text-center text-[#4e4541] flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-[#725b38]">search_off</span>
              <p className="text-base font-bold">خدمتی در این دسته‌بندی یافت نشد.</p>
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className="text-xs text-[#725b38] underline"
              >
                نمایش تمام خدمات
              </button>
            </div>
          )}
        </section>

        {/* Standards & Experience Highlights */}
        <section className="w-full bg-[#f6f3ee] py-16 border-t border-b border-[#e5e2dd]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-right">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-semibold text-[#725b38] uppercase tracking-widest">
                تعهدات و استانداردهای لونا
              </span>
              <h2 className="text-2xl sm:text-3xl text-[#1c1c19] mt-2 font-serif">
                چرا پناهگاه زیبایی لونا؟
              </h2>
              <p className="text-sm text-[#4e4541] mt-3">
                فضایی امن، بهداشتی و آرامش‌بخش طراحی شده برای بازآفرینی حس زیبایی اصیل شما.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-3xl bg-[#ffffff] shadow-sm flex flex-col gap-4 border border-[#e5e2dd]/70">
                <div className="w-12 h-12 rounded-2xl bg-[#fedeb2]/40 text-[#281800] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">sanitizer</span>
                </div>
                <h3 className="text-lg font-bold text-[#1c1c19]">
                  پروتکل‌های بهداشتی استریل
                </h3>
                <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                  تمامی تجهیزات در دستگاه‌های اتوکلاو پزشکی استریل شده و پک‌های یکبارمصرف شخصی برای هر مراجعه‌کننده با احترام کامل ارائه می‌گردد.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#ffffff] shadow-sm flex flex-col gap-4 border border-[#e5e2dd]/70">
                <div className="w-12 h-12 rounded-2xl bg-[#fedeb2]/40 text-[#281800] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">psychology_alt</span>
                </div>
                <h3 className="text-lg font-bold text-[#1c1c19]">
                  مشاوره اختصاصی قبل از خدمت
                </h3>
                <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                  پیش از هر فرآیند، متخصصین ما ویژگی‌های فنوتیپ چهره، جنس مو یا پوست شما را ارزیابی کرده تا نتیجه دقیقاً منطبق بر انتظار شما رقم بخورد.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#ffffff] shadow-sm flex flex-col gap-4 border border-[#e5e2dd]/70">
                <div className="w-12 h-12 rounded-2xl bg-[#fedeb2]/40 text-[#281800] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">verified</span>
                </div>
                <h3 className="text-lg font-bold text-[#1c1c19]">
                  متریال اصیل و درجه‌یک
                </h3>
                <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                  همکاری با معتبرترین لابراتوارهای آرایشی فرانسه، سوئیس و کره جنوبی، ضامن حفظ سلامت و طراوت درازمدت بافت مو و پوست شماست.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-16 text-right">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-[#725b38] tracking-widest uppercase">
              پاسخ به ابهامات شما
            </span>
            <h2 className="text-2xl sm:text-3xl text-[#1c1c19] mt-2 font-serif">
              پرسش‌های پرتکرار
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="rounded-2xl bg-[#f6f3ee] border border-[#e5e2dd] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-right flex items-center justify-between text-[#1c1c19] text-base font-bold hover:bg-[#f0ede9] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`material-symbols-outlined text-[#725b38] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[#4e4541] leading-relaxed border-t border-[#e5e2dd]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Luxury Booking CTA Banner */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          <div className="relative rounded-3xl overflow-hidden bg-[#130d09] text-[#ffffff] p-8 lg:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#2a221e]">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#fedeb2]/15 blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-3 max-w-xl text-right">
              <div className="inline-flex items-center gap-2 text-[#fedeb2]">
                <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
                <span className="text-xs uppercase tracking-widest font-semibold">
                  همراهی اختصاصی با شما
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#ffffff]">
                آماده‌اید درخشش خود را تجربه کنید؟
              </h2>
              <p className="text-sm text-[#d2c4bd] leading-relaxed">
                در فضایی آرام، آراستگی اصیل خود را به دستان هنرمند و متخصصین لونا بسپارید.
                نوبت خود را همین امروز ثبت کنید.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('booking')}
                className="w-full sm:w-auto text-center px-9 py-4 rounded-full bg-[#fedeb2] text-[#281800] text-sm font-bold hover:bg-[#e0c298] transition-colors shadow-lg cursor-pointer"
              >
                رزرو نوبت حضوری
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto text-center px-7 py-4 rounded-full bg-[#2a221e] text-[#ffffff] hover:bg-[#3b1a1a] transition-colors text-sm font-medium border border-[#807570]/30 cursor-pointer"
              >
                تماس با پذیرش
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
