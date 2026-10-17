import React, { useState } from 'react';
import { PageRoute } from '../types/index.ts';
import { LUNA_INFO, FAQS } from '../data/portfolioData.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface ContactPageProps {
  onNavigate: (route: PageRoute, hash?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneOrEmail: '',
    subject: 'مشاوره خدمات',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'لطفاً نام و نام خانوادگی خود را وارد کنید';
    }
    if (!formData.phoneOrEmail.trim()) {
      newErrors.phoneOrEmail = 'لطفاً شماره تماس یا ایمیل معتبر وارد کنید';
    } else if (
      formData.phoneOrEmail.trim().length < 5
    ) {
      newErrors.phoneOrEmail = 'شماره یا ایمیل وارد شده کوتاه است';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'لطفاً پیام یا پرسش خود را یادداشت کنید';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'پیام باید حداقل دارای ۸ نویسه باشد';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedTicket = 'LN-MSG-' + Math.floor(100000 + Math.random() * 900000);
      setTicketId(generatedTicket);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        phoneOrEmail: '',
        subject: 'مشاوره خدمات',
        message: '',
      });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* Breadcrumb Bar */}
      <nav aria-label="مسیر راهنما" className="bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-xs tracking-wider text-outline">
          <ol className="flex items-center gap-2 list-none p-0 m-0">
            <li>
              <button 
                onClick={() => onNavigate('home')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                خانه
              </button>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-on-surface font-semibold" aria-current="page">تماس با ما و مشاوره</li>
          </ol>
          <span className="hidden md:inline font-display text-[10px] tracking-widest text-outline/80 uppercase">
            CONNECT WITH LUNA SANCTUARY
          </span>
        </div>
      </nav>

      {/* Editorial Header */}
      <header className="relative py-14 md:py-20 bg-gradient-to-b from-surface-container-low to-surface border-b border-outline-variant/10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-medium tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>CONNECT & CONSULTATION</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-primary tracking-tight mb-5 leading-tight">
            ارتباط با ما و مشاوره اختصاصی
          </h1>
          <p className="text-base md:text-lg text-outline max-w-2xl mx-auto leading-relaxed">
            تیم کارشناسان و کانسیرج لونا برای پاسخ به پرسش‌ها، مشاوره خدمات تخصصی و دریافت نظرات شما همیشه آماده همراهی هستند.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form (7 cols on lg) */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/15 shadow-sm">
            <div className="mb-8 border-b border-outline-variant/15 pb-6">
              <span className="text-xs font-mono tracking-widest text-primary uppercase block mb-1">
                ONLINE INQUIRY & FEEDBACK
              </span>
              <h2 className="text-2xl font-bold font-serif text-on-surface">
                ارسال پیام یا درخواست مشاوره
              </h2>
              <p className="text-sm text-outline mt-1.5">
                فرم زیر را تکمیل فرمایید تا حداکثر ظرف چند ساعت آینده همکاران ما با شما تماس حاصل نمایند.
              </p>
            </div>

            {submitSuccess ? (
              <div 
                role="status" 
                aria-live="polite" 
                className="p-8 rounded-2xl bg-secondary-container/40 border border-secondary/30 text-right space-y-4 animate-in fade-in duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">task_alt</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-on-surface">
                    پیام شما با موفقیت ثبت و ارسال شد
                  </h3>
                  <p className="text-sm text-outline mt-2 leading-relaxed">
                    با سپاس از پیام شما. پیام شما در سامانه ثبت گردید و مشاور اختصاصی سالن لونا به‌زودی با شما تماس خواهد گرفت.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-outline-variant/20 inline-block">
                  <span className="text-xs text-outline block">کد پیگیری مکاتبه:</span>
                  <span className="text-base font-mono font-bold text-primary tracking-wider">{ticketId}</span>
                </div>
                <div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors text-xs font-medium cursor-pointer"
                  >
                    ارسال پیام جدید
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6 text-right">
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-fullName" className="block text-xs font-medium text-on-surface mb-2">
                    نام و نام خانوادگی <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="مثال: سارا محمدی"
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                    aria-describedby={errors.fullName ? 'contact-fullName-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-surface border ${
                      errors.fullName ? 'border-error ring-1 ring-error' : 'border-outline-variant/30 focus:border-primary'
                    } text-sm focus:outline-none transition-all placeholder:text-outline/40`}
                  />
                  {errors.fullName && (
                    <p id="contact-fullName-error" className="text-xs text-error mt-1.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">error</span>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone or Email */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-medium text-on-surface mb-2">
                    شماره موبایل یا ایمیل تماس <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="text"
                    dir="ltr"
                    value={formData.phoneOrEmail}
                    onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                    placeholder="0912... یا email@example.com"
                    aria-invalid={errors.phoneOrEmail ? 'true' : 'false'}
                    aria-describedby={errors.phoneOrEmail ? 'contact-phone-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-surface border ${
                      errors.phoneOrEmail ? 'border-error ring-1 ring-error' : 'border-outline-variant/30 focus:border-primary'
                    } text-sm focus:outline-none transition-all placeholder:text-outline/40 text-left`}
                  />
                  {errors.phoneOrEmail && (
                    <p id="contact-phone-error" className="text-xs text-error mt-1.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">error</span>
                      {errors.phoneOrEmail}
                    </p>
                  )}
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-on-surface mb-2">
                    موضوع پیام
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant/30 focus:border-primary text-sm focus:outline-none transition-all text-on-surface"
                  >
                    <option value="مشاوره خدمات">مشاوره تخصصی پیش از رزرو</option>
                    <option value="مشاوره پکیج عروس">استعلام و هماهنگی پکیج عروس</option>
                    <option value="همکاری یا جذب پرسنل">درخواست همکاری و استخدام</option>
                    <option value="انتقاد یا پیشنهاد">ارسال بازخورد و انتقادات</option>
                    <option value="سایر موارد">سایر پرسش‌ها</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-on-surface mb-2">
                    متن پیام یا پرسش <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="پرسش، زمان موردنظر یا توضیحات خود را اینجا بنویسید..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-surface border ${
                      errors.message ? 'border-error ring-1 ring-error' : 'border-outline-variant/30 focus:border-primary'
                    } text-sm focus:outline-none transition-all placeholder:text-outline/40`}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="text-xs text-error mt-1.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">error</span>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-primary text-on-primary hover:bg-primary/90 transition-all font-medium text-sm shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin" />
                      <span>در حال ارسال پیام...</span>
                    </>
                  ) : (
                    <>
                      <span>ارسال پیام</span>
                      <span className="material-symbols-outlined text-lg" aria-hidden="true">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Sidebar Info (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/15">
              <span className="text-xs font-mono tracking-widest text-primary uppercase block mb-1">
                CONTACT DETAILS
              </span>
              <h3 className="text-xl font-bold font-serif text-on-surface mb-6">
                اطلاعات تماس مستقیم
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface mb-1">نشانی سالن لونا</h4>
                    <p className="text-outline leading-relaxed">{LUNA_INFO.address}</p>
                    <p className="text-xs text-outline/80 mt-1">{LUNA_INFO.addressEn}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface mb-1">تلفن‌های تماس</h4>
                    <p className="text-outline">
                      <a href={`tel:${LUNA_INFO.phone}`} className="hover:text-primary transition-colors ltr inline-block" dir="ltr">
                        {LUNA_INFO.phone}
                      </a>
                    </p>
                    <p className="text-outline mt-0.5">
                      <a href={`tel:${LUNA_INFO.phone2}`} className="hover:text-primary transition-colors ltr inline-block" dir="ltr">
                        {LUNA_INFO.phone2}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface mb-1">ساعات کاری</h4>
                    <p className="text-outline">{LUNA_INFO.workingHours}</p>
                    <p className="text-xs text-outline/80 mt-1">{LUNA_INFO.workingHoursEn}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface mb-1">پست الکترونیک</h4>
                    <a href={`mailto:${LUNA_INFO.email}`} className="text-outline hover:text-primary transition-colors text-xs font-mono" dir="ltr">
                      {LUNA_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Booking Shortcut Button */}
              <div className="mt-8 pt-6 border-t border-outline-variant/15">
                <button
                  onClick={() => onNavigate('booking')}
                  className="w-full py-3 rounded-full bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-all text-xs font-semibold cursor-pointer flex items-center justify-center gap-2 border border-outline-variant/30"
                >
                  <span className="material-symbols-outlined text-base">calendar_today</span>
                  <span>انتقال به سامانه رزرواسیون آنلاین</span>
                </button>
              </div>
            </div>

            {/* Stylized Architectural Location Showcase */}
            <div className="bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/15 relative">
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000"
                  alt="محیط آرام و دلنشین سالن لونا"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-on-surface flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-sm">spa</span>
                  <span>محیط اختصاصی و آرامش‌بخش</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-serif font-bold text-on-surface text-base mb-1">
                  پذیرایی در فضایی مهندسی‌شده
                </h4>
                <p className="text-xs text-outline leading-relaxed">
                  سالن لونا با طراحی داخلی الهام‌گرفته از معماری وابی‌سابی، دارای سیستم تهویه هوای پاک، رایحه‌درمانی طبیعی و فضاهای تفکیک‌شده برای راحتی کامل شماست.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <section className="mt-20 pt-16 border-t border-outline-variant/15 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-primary uppercase block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-on-surface">
              پرسش‌های متداول مشتریان گرامی
            </h2>
            <p className="text-sm text-outline mt-2">
              پاسخ به سوالات پرتکرار شما در زمینه خدمات، رزرو و زمان‌بندی سالن لونا
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-surface-container-low rounded-2xl border border-outline-variant/15 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full px-6 py-4 flex items-center justify-between text-right font-medium text-on-surface hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-semibold">{faq.question}</span>
                    <span
                      className={`material-symbols-outlined text-primary transition-transform duration-200 shrink-0 mr-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      keyboard_arrow_down
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-6 pb-5 pt-1 text-xs md:text-sm text-outline leading-relaxed border-t border-outline-variant/10 animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
