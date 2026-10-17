import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types/index.ts';
import { LUNA_INFO, SERVICES_LIST } from '../data/portfolioData.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface BookingPageProps {
  onNavigate: (route: PageRoute, hash?: string) => void;
  initialService?: string;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  onNavigate,
  initialService,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [notes, setNotes] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Errors state
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    service?: string;
    date?: string;
    time?: string;
    terms?: string;
  }>({});

  // Submission state
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    service: string;
    trackingCode: string;
  } | null>(null);

  useEffect(() => {
    if (initialService) {
      const match = SERVICES_LIST.find((s) => s.title === initialService);
      if (match) {
        setService(match.title);
      } else {
        setService(initialService);
      }
    }
  }, [initialService]);

  const serviceOptions = [
    'خدمات مو (کوپ، رنگ و لایت، کراتین و احیا)',
    'میکاپ و گریم (تخصصی، مراسم و استایلینگ)',
    'ناخن (مانیکور روسی، ژلیش، اسپا و پدیکور)',
    'ابرو و مژه (لیفت، لمینت، میکرو و اکستنشن)',
    'مراقبت از پوست (فیشیال تخصصی، هیدروتراپی، پاکسازی)',
    'زیبایی و عروس (پکیج جامع VIP همراه با مشاوره اختصاصی)',
  ];

  const quickPills = [
    { label: 'خدمات مو', val: 'خدمات مو (کوپ، رنگ و لایت، کراتین و احیا)' },
    { label: 'میکاپ و گریم', val: 'میکاپ و گریم (تخصصی، مراسم و استایلینگ)' },
    { label: 'ناخن', val: 'ناخن (مانیکور روسی، ژلیش، اسپا و پدیکور)' },
    { label: 'ابرو و مژه', val: 'ابرو و مژه (لیفت، لمینت، میکرو و اکستنشن)' },
    { label: 'مراقبت از پوست', val: 'مراقبت از پوست (فیشیال تخصصی، هیدروتراپی، پاکسازی)' },
    { label: 'زیبایی و عروس', val: 'زیبایی و عروس (پکیج جامع VIP همراه با مشاوره اختصاصی)' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      newErrors.name = 'لطفاً نام و نام خانوادگی خود را کامل بنویسید.';
    }

    const cleanPhone = phone.replace(/\s+/g, '').replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
    const phoneRegex = /^(\+98|0)?9\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'شماره تماس نامعتبر است (مثال: ۰۹۱۲۳۴۵۶۷۸۹).';
    }

    if (!service) {
      newErrors.service = 'لطفاً خدمت موردنظر خود را انتخاب فرمایید.';
    }

    if (!preferredDate.trim()) {
      newErrors.date = 'لطفاً تاریخ مدنظر خود را مشخص کنید.';
    }

    if (!preferredTime) {
      newErrors.time = 'لطفاً بازه زمانی پیشنهادی را انتخاب نمایید.';
    }

    if (!termsAccepted) {
      newErrors.terms = 'تایید مقررات سالن الزامی است.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const code = 'LUNA-' + Math.floor(1000 + Math.random() * 9000);
      setSubmittedData({
        name: fullName.trim(),
        service: service.split('(')[0].trim(),
        trackingCode: code,
      });

      // Clear fields
      setFullName('');
      setPhone('');
      setService('');
      setPreferredDate('');
      setPreferredTime('');
      setNotes('');
      setTermsAccepted(false);

      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full text-right">
      {/* Ambient Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-[#fedeb2]/25 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#ffdad8]/20 blur-3xl pointer-events-none -z-10" />

        {/* Breadcrumb */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-4 w-full">
          <nav aria-label="موقعیت کنونی" className="flex items-center gap-2 text-sm text-[#4e4541]">
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
            <span className="material-symbols-outlined text-[#725b38] text-[16px]">chevron_left</span>
            <span className="text-[#1c1c19] font-bold">رزرو نوبت</span>
          </nav>
        </section>

        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-12 w-full">
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl items-start">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#725b38]" />
                <span className="text-xs uppercase tracking-widest text-[#725b38] font-bold">
                  RESERVATION SANCTUARY
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#1c1c19] font-serif tracking-tight">
                برای زیبایی خود وقت بگذارید
              </h1>
              <p className="text-base text-[#4e4541] leading-relaxed text-justify">
                برای هماهنگی نوبت، خدمت موردنظر خود را انتخاب کنید و اطلاعات اولیه را برای ارتباط با سالن وارد کنید.
              </p>
            </div>

            {/* Editorial Stamp Badge */}
            <div className="hidden lg:flex flex-col items-center justify-center p-5 rounded-2xl bg-[#f6f3ee] border border-[#e5e2dd] shadow-xs">
              <span className="material-symbols-outlined text-[#725b38] text-[28px] mb-1">spa</span>
              <span className="text-xs text-[#725b38] tracking-widest font-bold">LUNA PRIVÉ</span>
              <span className="text-[11px] text-[#4e4541] mt-0.5">پذیرش آرامش‌بخش</span>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Notice Banner */}
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-[#f6f3ee] border border-[#e5e2dd] shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#fedeb2]/60 flex items-center justify-center shrink-0 mt-0.5 text-[#725b38]">
                  <span className="material-symbols-outlined text-[22px]">info</span>
                </div>
                <div className="flex flex-col gap-1 text-[#1c1c19]">
                  <span className="text-sm font-bold">توجه به فرآیند هماهنگی اختصاصی</span>
                  <p className="text-xs sm:text-sm text-[#4e4541] leading-relaxed text-justify">
                    این فرم، ثبت اولیه درخواست نوبت شماست. کارشناسان پذیرش لونا در کمتر از ۱ ساعت کاری با شما تماس گرفته و زمان قطعی حضور و جزییات پذیرش اختصاصی را هماهنگ خواهند نمود.
                  </p>
                </div>
              </div>

              {/* Dynamic Success Alert */}
              {submittedData && (
                <div className="p-6 rounded-3xl bg-[#fedeb2]/60 border border-[#e0c298] shadow-md flex flex-col gap-3 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#725b38] flex items-center justify-center text-[#ffffff]">
                      <span className="material-symbols-outlined text-[20px]">check</span>
                    </div>
                    <h2 className="text-base sm:text-lg text-[#281800] font-bold">
                      درخواست نوبت شما با موفقیت ثبت شد
                    </h2>
                  </div>
                  <p className="text-sm text-[#584323] leading-relaxed">
                    بانوی گرامی <span className="font-bold text-[#1c1c19]">{submittedData.name}</span>، از حسن انتخاب شما سپاسگزاریم.
                    همکاران پذیرش لونا برای خدمت <span className="font-bold text-[#1c1c19]">{submittedData.service}</span> به‌زودی با شماره شما تماس خواهند گرفت.
                  </p>
                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-xs font-bold text-[#725b38] uppercase">شناسه پیگیری موقت:</span>
                    <span className="text-base font-mono tracking-widest text-[#1c1c19] font-bold">
                      {submittedData.trackingCode}
                    </span>
                  </div>
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="text-xs text-[#725b38] font-bold underline"
                    >
                      ثبت درخواست نوبت دیگر
                    </button>
                  </div>
                </div>
              )}

              {/* Main Booking Form Card */}
              <div className="bg-[#ffffff] p-8 md:p-10 rounded-3xl shadow-xl flex flex-col gap-8 border border-[#e5e2dd]">
                <div className="flex items-center justify-between pb-4 border-b border-[#f0ede9]">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#725b38]" />
                    <h2 className="text-xl font-bold text-[#1c1c19]">مشخصات و زمان پیشنهادی</h2>
                  </div>
                  <span className="text-xs text-[#807570]">مرحله ۱ از ۱</span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>
                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="client-name" className="text-sm font-semibold text-[#1c1c19] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#725b38] text-[18px]">person</span>
                        <span>نام و نام خانوادگی</span>
                        <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="مثال: پروانه سعادت"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-[#f6f3ee] text-[#1c1c19] placeholder:text-[#807570] text-sm outline-none transition-all border ${
                          errors.name ? 'border-[#ba1a1a]' : 'border-transparent focus:border-[#725b38]'
                        }`}
                        required
                      />
                      {errors.name && (
                        <span className="text-xs text-[#ba1a1a] font-medium">{errors.name}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="client-phone" className="text-sm font-semibold text-[#1c1c19] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#725b38] text-[18px]">phone_iphone</span>
                        <span>شماره تماس همراه</span>
                        <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <input
                        id="client-phone"
                        type="tel"
                        dir="ltr"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="۰۹۱۲XXXXXXX"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-[#f6f3ee] text-[#1c1c19] placeholder:text-[#807570] text-sm text-right outline-none transition-all font-sans border ${
                          errors.phone ? 'border-[#ba1a1a]' : 'border-transparent focus:border-[#725b38]'
                        }`}
                        required
                      />
                      {errors.phone && (
                        <span className="text-xs text-[#ba1a1a] font-medium">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Service Selection */}
                  <div className="flex flex-col gap-3">
                    <label htmlFor="client-service" className="text-sm font-semibold text-[#1c1c19] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#725b38] text-[18px]">auto_awesome</span>
                      <span>خدمت موردنظر</span>
                      <span className="text-[#ba1a1a]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="client-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={`w-full px-4 py-3.5 pr-11 rounded-2xl bg-[#f6f3ee] text-[#1c1c19] text-sm outline-none transition-all appearance-none cursor-pointer border ${
                          errors.service ? 'border-[#ba1a1a]' : 'border-transparent focus:border-[#725b38]'
                        }`}
                        required
                      >
                        <option value="" disabled>
                          انتخاب از ۶ گروه خدمات اختصاصی لونا...
                        </option>
                        {serviceOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#725b38] pointer-events-none text-[22px]">
                        category
                      </span>
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#807570] pointer-events-none text-[20px]">
                        expand_more
                      </span>
                    </div>
                    {errors.service && (
                      <span className="text-xs text-[#ba1a1a] font-medium">{errors.service}</span>
                    )}

                    {/* Quick Category Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {quickPills.map((pill, idx) => {
                        const isSelected = service === pill.val;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setService(pill.val);
                              setErrors((prev) => ({ ...prev, service: undefined }));
                            }}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#725b38] text-[#ffffff] shadow-xs'
                                : 'bg-[#f0ede9] text-[#4e4541] hover:bg-[#fedeb2]/50 hover:text-[#281800]'
                            }`}
                          >
                            {pill.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 3: Preferred Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="preferred-date" className="text-sm font-semibold text-[#1c1c19] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#725b38] text-[18px]">calendar_today</span>
                        <span>تاریخ پیشنهادی حضور</span>
                        <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="preferred-date"
                          type="text"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          placeholder="مثال: شنبه ۲۸ آبان یا فردا عصر"
                          className={`w-full px-4 py-3.5 pr-11 rounded-2xl bg-[#f6f3ee] text-[#1c1c19] placeholder:text-[#807570] text-sm outline-none transition-all border ${
                            errors.date ? 'border-[#ba1a1a]' : 'border-transparent focus:border-[#725b38]'
                          }`}
                          required
                        />
                        <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#725b38] pointer-events-none text-[20px]">
                          event
                        </span>
                      </div>
                      {errors.date && (
                        <span className="text-xs text-[#ba1a1a] font-medium">{errors.date}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="preferred-time" className="text-sm font-semibold text-[#1c1c19] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#725b38] text-[18px]">schedule</span>
                        <span>ساعت پیشنهادی</span>
                        <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="preferred-time"
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className={`w-full px-4 py-3.5 pr-11 rounded-2xl bg-[#f6f3ee] text-[#1c1c19] text-sm outline-none transition-all appearance-none cursor-pointer border ${
                            errors.time ? 'border-[#ba1a1a]' : 'border-transparent focus:border-[#725b38]'
                          }`}
                          required
                        >
                          <option value="" disabled>
                            بازه زمانی حضور...
                          </option>
                          <option value="صبح ۱۰ تا ۱۳">بازه صبح (۱۰:۰۰ الی ۱۳:۰۰)</option>
                          <option value="عصر ۱۴ تا ۱۷">بازه عصر اول (۱۴:۰۰ الی ۱۷:۰۰)</option>
                          <option value="عصر ۱۷ تا ۲۰">بازه عصر دوم (۱۷:۰۰ الی ۲۰:۰۰)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#725b38] pointer-events-none text-[20px]">
                          access_time
                        </span>
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#807570] pointer-events-none text-[20px]">
                          expand_more
                        </span>
                      </div>
                      {errors.time && (
                        <span className="text-xs text-[#ba1a1a] font-medium">{errors.time}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Additional Notes */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="additional-notes" className="text-sm font-semibold text-[#1c1c19] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#725b38] text-[18px]">edit_note</span>
                        <span>توضیحات تکمیلی و درخواست‌های ویژه</span>
                      </div>
                      <span className="text-xs text-[#807570]">(اختیاری)</span>
                    </label>
                    <textarea
                      id="additional-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="اگر ترجیح خاصی در مورد متخصص، حساسیت پوستی، یا نیاز به هماهنگی همزمان چند خدمت دارید بنویسید..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f6f3ee] text-[#1c1c19] placeholder:text-[#807570] text-sm outline-none transition-all resize-y min-h-[90px] border border-transparent focus:border-[#725b38]"
                    />
                  </div>

                  {/* Row 5: Consent Checkbox */}
                  <div className="flex flex-col gap-1 pt-1">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded-md text-[#130d09] focus:ring-[#725b38] cursor-pointer"
                        required
                      />
                      <span className="text-xs sm:text-sm text-[#4e4541] group-hover:text-[#1c1c19] transition-colors select-none leading-relaxed">
                        با شرایط و مقررات هماهنگی وقت سالن موافقم و شماره خود را جهت تماس همکاران پذیرش تایید می‌نمایم.
                      </span>
                    </label>
                    {errors.terms && (
                      <span className="text-xs text-[#ba1a1a] font-medium">{errors.terms}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#130d09] text-[#ffffff] font-bold text-sm sm:text-base hover:bg-[#2a221e] shadow-lg hover:shadow-xl active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer"
                    >
                      <span>ارسال درخواست نوبت</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                    </button>
                    <span className="text-xs text-[#4e4541] flex items-center gap-1.5 text-center sm:text-right">
                      <span className="material-symbols-outlined text-[#725b38] text-[18px]">
                        verified_user
                      </span>
                      اطلاعات شما نزد حریم خصوصی لونا امن است
                    </span>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar: Fast Concierge */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-8 rounded-3xl bg-[#f6f3ee] border border-[#e5e2dd] shadow-xs flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fedeb2] flex items-center justify-center text-[#281800]">
                    <span className="material-symbols-outlined text-[22px]">contact_support</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1c1c19]">اطلاعات هماهنگی سریع</h3>
                    <span className="text-[11px] text-[#725b38] font-bold tracking-wider uppercase">
                      FAST CONCIERGE
                    </span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex flex-col gap-3 pb-5 border-b border-[#e5e2dd]">
                  <span className="text-xs font-bold text-[#725b38] uppercase">
                    ساعات پذیرش و تماس
                  </span>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#1c1c19]">شنبه تا پنج‌شنبه:</span>
                    <span className="font-semibold text-[#1c1c19] dir-ltr font-sans">
                      ۱۰:۰۰ - ۱۹:۰۰
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#1c1c19]">جمعه‌ها و مناسبت‌های خاص:</span>
                    <span className="text-[#725b38] font-semibold">پذیرش تشریفات VIP عروس</span>
                  </div>
                </div>

                {/* Policy */}
                <div className="flex flex-col gap-2 pb-5 border-b border-[#e5e2dd]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#725b38] text-[18px]">rule</span>
                    <span className="text-xs font-bold text-[#725b38]">
                      یادآوری شرایط لغو یا تغییر وقت
                    </span>
                  </div>
                  <p className="text-xs text-[#4e4541] leading-relaxed text-justify">
                    به منظور احترام به زمان شما و سایر مراجعین گرامی، در صورت نیاز به تغییر یا لغو وقت رزرو شده، خواهشمندیم حداقل ۲۴ ساعت قبل با تیم پذیرش تماس حاصل فرمایید.
                  </p>
                </div>

                {/* Direct Contact Channels */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-[#725b38] uppercase">
                    راه‌های ارتباط مستقیم و واتساپ
                  </span>
                  <a
                    href={LUNA_INFO.phoneCall}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#ffffff] hover:bg-[#ebe8e3] transition-colors border border-[#e5e2dd]/70 shadow-xs group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#725b38] text-[22px] group-hover:scale-110 transition-transform">
                        phone_in_talk
                      </span>
                      <div className="flex flex-col text-right">
                        <span className="text-xs font-bold text-[#1c1c19]">تلفن مستقیم پذیرش</span>
                        <span className="text-[10px] text-[#807570]">پاسخگویی سریع میز لونا</span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#1c1c19] font-sans dir-ltr">
                      {LUNA_INFO.phoneDisplay}
                    </span>
                  </a>

                  <a
                    href="https://wa.me/989120000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#ffffff] hover:bg-[#ebe8e3] transition-colors border border-[#e5e2dd]/70 shadow-xs group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#725b38] text-[22px] group-hover:scale-110 transition-transform">
                        chat
                      </span>
                      <div className="flex flex-col text-right">
                        <span className="text-xs font-bold text-[#1c1c19]">پشتیبانی و واتساپ</span>
                        <span className="text-[10px] text-[#807570]">مشاوره اختصاصی قبل از نوبت</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#725b38]">ارسال پیام</span>
                  </a>
                </div>
              </div>

              {/* Visual Spa Image Reminder */}
              <div className="rounded-3xl overflow-hidden bg-[#f6f3ee] border border-[#e5e2dd] shadow-xs flex flex-col">
                <div className="h-44 w-full relative overflow-hidden bg-[#f0ede9]">
                  <ImageWithFallback
                    src={LUNA_INFO.bookingDeskImg}
                    alt="میز پذیرش و آرامش سالن زیبایی لونا با گل‌های ارکیده عاجی"
                    fallbackTitle="پذیرش آرامش‌بخش سالن لونا"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130d09]/80 via-[#130d09]/30 to-transparent flex items-end p-5">
                    <div className="flex flex-col text-[#ffffff] text-right">
                      <span className="text-[10px] tracking-widest text-[#fedeb2] font-semibold uppercase">
                        LUNA EXPERIENCE
                      </span>
                      <span className="text-sm font-bold">آرامش، پیش از هر شروع</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 text-xs text-[#4e4541] leading-relaxed text-justify">
                  در تمام طول مدت حضور شما در مجموعه، پذیرایی گیاهی ارگانیک و موسیقی آرامش‌بخش برای تجربه‌ای فراتر از یک سالن زیبایی در انتظار شماست.
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQ Strip for Common Booking Questions */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
          <div className="pt-8 border-t border-[#e5e2dd] flex flex-col gap-8">
            <div className="flex flex-col gap-1 items-start">
              <span className="text-xs font-bold text-[#725b38] uppercase">
                پاسخ به ابهامات متداول
              </span>
              <h2 className="text-xl font-bold text-[#1c1c19]">پرسش‌های پرتکرار در مورد نوبت‌دهی</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-[#ffffff] border border-[#e5e2dd]/70 shadow-xs flex flex-col gap-2.5">
                <span className="material-symbols-outlined text-[#725b38] text-[24px]">timelapse</span>
                <h3 className="text-sm font-bold text-[#1c1c19]">چه مدت قبل باید رزرو کنیم؟</h3>
                <p className="text-xs text-[#4e4541] leading-relaxed text-justify">
                  برای روزهای پایانی هفته، مناسبت‌ها و خدمات تشریفات عروس، پیشنهاد می‌شود حداقل ۳ تا ۵ روز زودتر نوبت خود را ثبت فرمایید.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#ffffff] border border-[#e5e2dd]/70 shadow-xs flex flex-col gap-2.5">
                <span className="material-symbols-outlined text-[#725b38] text-[24px]">verified</span>
                <h3 className="text-sm font-bold text-[#1c1c19]">آیا مشاوره پیش از کار هزینه‌بر است؟</h3>
                <p className="text-xs text-[#4e4541] leading-relaxed text-justify">
                  جلسات مشاوره اولیه رنگ و لایت، پوست و استایل میکاپ عروس در لونا کاملاً رایگان و با هدف رسیدن به بهترین نتیجه انجام می‌شود.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#ffffff] border border-[#e5e2dd]/70 shadow-xs flex flex-col gap-2.5">
                <span className="material-symbols-outlined text-[#725b38] text-[24px]">local_parking</span>
                <h3 className="text-sm font-bold text-[#1c1c19]">دسترسی و پارکینگ اختصاصی</h3>
                <p className="text-xs text-[#4e4541] leading-relaxed text-justify">
                  مجموعه لونا دارای پارکینگ اختصاصی و هماهنگی آسان برای پارک خودرو مراجعین محترم در محدوده زعفرانیه است.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
