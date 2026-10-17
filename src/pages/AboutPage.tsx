import React from 'react';
import { PageRoute } from '../types/index.ts';
import { LUNA_INFO } from '../data/portfolioData.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface AboutPageProps {
  onNavigate: (route: PageRoute, hash?: string) => void;
  onOpenBookingModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Ambient Glows */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-[#fedeb2]/25 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#efdfd9]/30 blur-3xl pointer-events-none -z-10" />

        {/* Header & Editorial Intro */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-12 w-full text-right">
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
            <span className="text-[#725b38] font-bold">درباره ما</span>
          </nav>

          {/* Editorial Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Main Text Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ebe8e3]/80 border border-[#e5e2dd] text-[#725b38] text-xs font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#725b38]" />
                <span>پناهگاه آرامش و اصالت زنانه</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#1c1c19] font-serif leading-tight">
                درباره سالن زیبایی لونا
              </h1>

              <p className="text-base sm:text-lg text-[#725b38] leading-relaxed font-normal bg-[#f6f3ee] p-5 rounded-2xl border-r-2 border-[#725b38]">
                «در سالن زیبایی لونا، باور داریم که زیبایی در کنار آرامش و اعتمادبه‌نفس معنا پیدا می‌کند.
                هدف ما فراهم کردن فضایی دلنشین و ارائه خدمات زیبایی با دقت، ظرافت و توجه به نیازهای شماست.»
              </p>

              <p className="text-base text-[#4e4541] leading-relaxed text-justify">
                لونا تنها یک سالن پیرایش و آرایش نیست؛ مکانی برای بازآفرینی آرامش درونی و آشکار ساختن لطافت طبیعی چهره شماست.
                ما هر لحظه از حضور شما را به عنوان سفری متمایز، رها از شتاب‌زدگی‌های روزمره و سرشار از تکریم شأن و زمان ارزشمندتان پاس می‌داریم.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('booking')}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#130d09] text-[#ffffff] text-sm font-medium shadow-[0_8px_24px_rgba(42,34,30,0.14)] hover:bg-[#2a221e] active:scale-98 transition-all cursor-pointer"
                >
                  رزرو نوبت حضوری
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#f0ede9] text-[#1c1c19] text-sm font-medium hover:bg-[#ebe8e3] transition-colors cursor-pointer"
                >
                  مشاهده خدمات
                </button>
              </div>
            </div>

            {/* Hero Visual Pair */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#ebe8e3] border border-[#e5e2dd]">
                <ImageWithFallback
                  src={LUNA_INFO.aboutPortraitImg}
                  alt="پرتره ادیتوریال بانوی زیبا با پوست شیشه‌ای و درخشان در سالن لونا"
                  fallbackTitle="پناهگاه آرامش و اصالت لونا"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130d09]/30 via-transparent to-transparent" />
              </div>

              {/* Floating Accent Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-8 bg-[#ffffff]/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs border border-[#e5e2dd] text-right">
                <div className="w-12 h-12 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#725b38] shrink-0">
                  <span className="material-symbols-outlined text-[26px]">spa</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1c1c19]">پناهگاه آرامش</span>
                  <span className="text-xs text-[#4e4541]">زیبایی مبتنی بر اصالت و توازن</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: نگاه ما به زیبایی (Vision & Individuality) */}
      <section className="w-full py-20 bg-[#f6f3ee] text-right">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Interior Arc */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/11] shadow-xl bg-[#f0ede9] border border-[#e5e2dd]">
                <ImageWithFallback
                  src={LUNA_INFO.aboutInteriorImg}
                  alt="نمای دکوراسیون داخلی مینیمال و لوکس سالن لونا با طاق‌های کرمی و مبلمان مخمل"
                  fallbackTitle="فلسفه طراحی داخلی لونا"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Context */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col space-y-6">
              <span className="text-xs font-semibold text-[#725b38] uppercase tracking-widest">
                فلسفه بنیادین
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c19] font-serif">
                نگاه ما به زیبایی
              </h2>
              <p className="text-base text-[#4e4541] leading-relaxed text-justify">
                زیبایی در لونا هرگز پیرو الگوهای قالبی و تکراری نیست. ما اعتقاد داریم اصیل‌ترین شکوه، از
                تجلی هویت منحصربه‌فرد هر فرد پدیدار می‌شود. هماهنگی ویژگی‌های فردی، شادابی چهره و تکیه بر
                درخشش طبیعی، هسته اصلی شیوه کاری متخصصان ما را تشکیل می‌دهد.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#ffffff] shadow-sm flex flex-col gap-2 border border-[#e5e2dd]/70">
                  <span className="material-symbols-outlined text-[#725b38] text-[24px]">
                    auto_awesome
                  </span>
                  <span className="text-base font-bold text-[#1c1c19]">اصالت فردی</span>
                  <p className="text-xs text-[#4e4541] leading-relaxed">
                    ارج نهادن به ویژگی‌ها و ساختار منحصربه‌فرد چهره و موی هر مراجع.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#ffffff] shadow-sm flex flex-col gap-2 border border-[#e5e2dd]/70">
                  <span className="material-symbols-outlined text-[#725b38] text-[24px]">
                    favorite
                  </span>
                  <span className="text-base font-bold text-[#1c1c19]">راحتی و خودباوری</span>
                  <p className="text-xs text-[#4e4541] leading-relaxed">
                    ایجاد احساس آرامش درون و شادابی پایدار که از آراستگی طبیعی سرچشمه می‌گیرد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Side-by-side Bento (تجربه‌ای همراه با آرامش & تعهد ما به شما) */}
      <section className="w-full py-24 bg-[#fcf9f4] text-right">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: تجربه‌ای همراه با آرامش */}
            <div className="p-8 lg:p-12 rounded-3xl bg-[#f6f3ee] flex flex-col justify-between shadow-sm relative overflow-hidden group border border-[#e5e2dd]">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-full bg-[#ffffff] flex items-center justify-center text-[#725b38] shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">self_improvement</span>
                </div>
                <h3 className="text-2xl font-serif text-[#1c1c19]">
                  تجربه‌ای همراه با آرامش
                </h3>
                <p className="text-sm sm:text-base text-[#4e4541] leading-relaxed text-justify">
                  سالن لونا با معماری الهام‌گرفته از سکوت و نور طراحی شده است. از رایحه‌های آرامش‌بخش
                  گرفته تا نوای دلنشین و مهمان‌نوازی گرم، تمامی جزییات در خدمت خلق محیطی بی‌دغدغه و
                  آسوده‌خاطر قرار گرفته‌اند تا ساعت حضور شما در سالن، تجدید قوایی واقعی برای جسم و روان باشد.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#e5e2dd] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#725b38]" />
                <span className="text-xs text-[#4e4541]">
                  مهمان‌نوازی اصیل • محیطی پالوده و بی‌صدا • پذیرایی اختصاصی
                </span>
              </div>
            </div>

            {/* Card 2: تعهد ما به شما */}
            <div className="p-8 lg:p-12 rounded-3xl bg-[#f6f3ee] flex flex-col justify-between shadow-sm relative overflow-hidden group border border-[#e5e2dd]">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-full bg-[#ffffff] flex items-center justify-center text-[#725b38] shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <h3 className="text-2xl font-serif text-[#1c1c19]">
                  تعهد ما به شما
                </h3>
                <p className="text-sm sm:text-base text-[#4e4541] leading-relaxed text-justify">
                  ما تعهد داریم پیش از آغاز هر خدمت، با دقتی صمیمانه به خواسته‌ها، سبک زندگی و انتظارات
                  شما گوش بسپاریم. پایبندی استوار به بالاترین معیارهای بهداشت، به کار بردن مواد مصرفی
                  دست‌چین و باکیفیت و احترام مطلق به وقت شما، تعهد تغییرناپذیر تیم لونا است.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#e5e2dd] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#725b38]" />
                <span className="text-xs text-[#4e4541]">
                  مشاوره اختصاصی • استانداردهای ایمن بهداشتی • شفافیت کامل
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: چرا لونا را انتخاب کنید؟ (4 Pillars) */}
      <section className="w-full py-20 bg-[#f6f3ee]/80 text-right border-t border-[#e5e2dd]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#725b38] uppercase tracking-widest">
              ارزش‌های متمایز
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c19] font-serif">
              چرا لونا را انتخاب کنید؟
            </h2>
            <p className="text-base text-[#4e4541]">
              چهار ستون استوار که هر تجربه‌ی زیبایی در سالن ما را به یادماندنی و دلپذیر می‌سازد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-[#ffffff] shadow-sm flex flex-col items-start gap-4 transition-transform duration-300 hover:-translate-y-1 border border-[#e5e2dd]/70">
              <div className="w-12 h-12 rounded-2xl bg-[#f0ede9] flex items-center justify-center text-[#725b38]">
                <span className="material-symbols-outlined text-[24px]">filter_vintage</span>
              </div>
              <span className="text-xs text-[#725b38] tracking-widest font-bold">۰۱ / ظرافت</span>
              <h3 className="text-base font-bold text-[#1c1c19]">توجه به جزئیات</h3>
              <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                از هماهنگی خطوط مو و ناخن گرفته تا زاویه نور و دمای محیط؛ هیچ عنصری در ارائه خدمات ما تصادفی نیست.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#ffffff] shadow-sm flex flex-col items-start gap-4 transition-transform duration-300 hover:-translate-y-1 border border-[#e5e2dd]/70">
              <div className="w-12 h-12 rounded-2xl bg-[#f0ede9] flex items-center justify-center text-[#725b38]">
                <span className="material-symbols-outlined text-[24px]">wb_sunny</span>
              </div>
              <span className="text-xs text-[#725b38] tracking-widest font-bold">۰۲ / فضا</span>
              <h3 className="text-base font-bold text-[#1c1c19]">محیطی آرام و دلنشین</h3>
              <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                محیطی آرام‌بخش با پالت‌های ملایم رنگی و بوی خوش طبیعی تا از هیاهوی شهر فاصله بگیرید و تجدید قوا کنید.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#ffffff] shadow-sm flex flex-col items-start gap-4 transition-transform duration-300 hover:-translate-y-1 border border-[#e5e2dd]/70">
              <div className="w-12 h-12 rounded-2xl bg-[#f0ede9] flex items-center justify-center text-[#725b38]">
                <span className="material-symbols-outlined text-[24px]">person_check</span>
              </div>
              <span className="text-xs text-[#725b38] tracking-widest font-bold">۰۳ / انطباق</span>
              <h3 className="text-base font-bold text-[#1c1c19]">توجه به سلیقه و نیاز شما</h3>
              <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                طراحی اختصاصی روند مراقبت بر پایه خواسته‌ها، ویژگی‌های پوست و مو و سلیقه فردی شما انجام می‌پذیرد.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#ffffff] shadow-sm flex flex-col items-start gap-4 transition-transform duration-300 hover:-translate-y-1 border border-[#e5e2dd]/70">
              <div className="w-12 h-12 rounded-2xl bg-[#f0ede9] flex items-center justify-center text-[#725b38]">
                <span className="material-symbols-outlined text-[24px]">diamond</span>
              </div>
              <span className="text-xs text-[#725b38] tracking-widest font-bold">۰۴ / تمایز</span>
              <h3 className="text-base font-bold text-[#1c1c19]">تجربه‌ای متفاوت از زیبایی</h3>
              <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                رویکردی نوآورانه در ادغام تکنیک‌های به‌روز زیبایی با حس اصیل مراقبت و آرامش بی‌بدیل اسپا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Invitation & CTA Banner */}
      <section className="w-full py-20 bg-[#fcf9f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative rounded-3xl overflow-hidden bg-[#130d09] text-[#ffffff] p-10 lg:p-16 shadow-2xl border border-[#2a221e]">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#725b38]/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#fedeb2]/15 blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center space-y-6">
              <span className="text-xs text-[#fedeb2] tracking-widest uppercase font-semibold">
                فرصتی برای آراستگی و آرامش خود
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#ffffff]">
                میزبان شما در سالن زیبایی لونا هستیم
              </h2>
              <p className="text-sm sm:text-base text-[#d2c4bd] leading-relaxed max-w-xl">
                برای تجربه لحظاتی سرشار از لطافت و دریافت مشاوره‌های تخصصی زیبایی متناسب با خود،
                همین امروز وقت خود را انتخاب و هماهنگ کنید.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                <button
                  type="button"
                  onClick={() => onNavigate('booking')}
                  className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-[#fedeb2] text-[#281800] text-sm font-bold shadow-lg hover:bg-[#e0c298] transition-all cursor-pointer"
                >
                  رزرو نوبت حضوری
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ffffff]/10 backdrop-blur-md text-[#ffffff] text-sm font-medium hover:bg-[#ffffff]/20 transition-colors border border-[#ffffff]/20 cursor-pointer"
                >
                  مشاهده منوی خدمات
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
