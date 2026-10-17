import React, { useState, useEffect } from 'react';
import { SERVICES_LIST } from '../data/portfolioData.ts';
import { PageRoute } from '../types/index.ts';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToBooking: () => void;
  preselectedService?: string;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  onNavigateToBooking,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || SERVICES_LIST[0].title);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('صبح (۱۰ الی ۱۳)');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
      setErrorMsg('');
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || name.trim().length < 3) {
      setErrorMsg('لطفاً نام و نام خانوادگی خود را کامل وارد فرمایید.');
      return;
    }
    const cleanPhone = phone.replace(/\s+/g, '').replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
    const phoneRegex = /^(\+98|0)?9\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMsg('شماره تماس معتبر نیست (مثال: ۰۹۱۲۳۴۵۶۷۸۹).');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#130d09]/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-booking-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#ffffff] rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col gap-5 text-right border border-[#e5e2dd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#f0ede9] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#fedeb2]/60 flex items-center justify-center text-[#725b38]">
              <span className="material-symbols-outlined text-xl">calendar_month</span>
            </div>
            <div>
              <h3 id="quick-booking-title" className="font-bold text-lg text-[#1c1c19]">
                رزرو نوبت در لونا
              </h3>
              <span className="text-xs text-[#725b38]">پذیرش سریع و اختصاصی</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن پنجره"
            className="w-9 h-9 rounded-full bg-[#f0ede9] hover:bg-[#ebe8e3] text-[#1c1c19] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#725b38]"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-6 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#fedeb2] flex items-center justify-center text-[#725b38]">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-[#1c1c19]">درخواست شما ثبت شد</h4>
              <p className="text-sm text-[#4e4541] max-w-sm leading-relaxed">
                بانوی گرامی <span className="font-semibold text-[#1c1c19]">{name}</span>، درخواست شما برای{' '}
                <span className="font-semibold text-[#725b38]">{service}</span> با موفقیت ثبت گردید. کارشناسان پذیرش در کوتاه‌ترین زمان با شماره{' '}
                <span className="font-sans font-semibold text-[#1c1c19]">{phone}</span> تماس خواهند گرفت.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 px-8 py-3 rounded-full bg-[#130d09] text-[#ffffff] font-medium text-sm hover:bg-[#2a221e] transition-colors"
            >
              متشکرم، بستن
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="text-xs text-[#4e4541] leading-relaxed">
              لطفاً برای ثبت اولیه تاریخ و ساعت مدنظر، اطلاعات زیر را وارد نمایید.
            </p>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-[#ffdad6] text-[#ba1a1a] text-xs font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="quick-name" className="text-xs font-semibold text-[#1c1c19]">
                نام و نام خانوادگی <span className="text-[#ba1a1a]">*</span>
              </label>
              <input
                id="quick-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثال: مریم انصاری"
                className="w-full px-4 py-2.5 rounded-xl bg-[#f6f3ee] border border-transparent focus:border-[#725b38] text-sm text-[#1c1c19] outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="quick-phone" className="text-xs font-semibold text-[#1c1c19]">
                شماره تماس همراه <span className="text-[#ba1a1a]">*</span>
              </label>
              <input
                id="quick-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="۰۹۱۲XXXXXXX"
                dir="ltr"
                className="w-full px-4 py-2.5 rounded-xl bg-[#f6f3ee] border border-transparent focus:border-[#725b38] text-sm text-[#1c1c19] text-right outline-none transition-all font-sans"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="quick-service" className="text-xs font-semibold text-[#1c1c19]">
                خدمت مدنظر
              </label>
              <select
                id="quick-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#f6f3ee] border border-transparent focus:border-[#725b38] text-sm text-[#1c1c19] outline-none transition-all cursor-pointer"
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.tagline})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="quick-date" className="text-xs font-semibold text-[#1c1c19]">
                  روز پیشنهادی
                </label>
                <input
                  id="quick-date"
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="مثال: شنبه یا فردا"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f6f3ee] border border-transparent focus:border-[#725b38] text-sm text-[#1c1c19] outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="quick-time" className="text-xs font-semibold text-[#1c1c19]">
                  بازه ساعتی
                </label>
                <select
                  id="quick-time"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f6f3ee] border border-transparent focus:border-[#725b38] text-sm text-[#1c1c19] outline-none transition-all cursor-pointer"
                >
                  <option value="صبح (۱۰ الی ۱۳)">صبح (۱۰:۰۰ الی ۱۳:۰۰)</option>
                  <option value="عصر اول (۱۴ الی ۱۷)">عصر اول (۱۴:۰۰ الی ۱۷:۰۰)</option>
                  <option value="عصر دوم (۱۷ الی ۱۹)">عصر دوم (۱۷:۰۰ الی ۱۹:۰۰)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-3 w-full py-3.5 rounded-full bg-[#130d09] text-[#ffffff] font-medium text-sm shadow-md hover:bg-[#2a221e] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>تأیید و ارسال به پذیرش لونا</span>
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </button>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateToBooking();
                }}
                className="text-xs text-[#725b38] hover:underline"
              >
                نیاز به توضیحات و جزئیات بیشتر دارید؟ فرم کامل رزرو نوبت را باز کنید
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
