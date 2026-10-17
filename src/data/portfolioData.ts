import { ServiceItem, PortfolioItem, FaqItem } from '../types/index.ts';

export const LUNA_INFO = {
  brandNameFa: 'لونا | LUNA',
  brandNameEn: 'LUNA BEAUTY SANCTUARY',
  tagline: 'پناهگاهی برای آراستگی، شکوه و آرامش اصیل',
  heroHeadline: 'زیبایی شما، هنر ماست',
  heroSubtitle: 'در سالن زیبایی لونا، تجربه‌ای متفاوت از زیبایی، آرامش و مراقبت از خود را تجربه کنید.',
  phoneDisplay: '۰۲۱-۲۲۰۰XXXX',
  phoneCall: 'tel:02122000000',
  phone: '02122000000',
  phone2: '09120000000',
  mobileDisplay: '۰۹۱۲-XXXXXXX',
  mobileCall: 'tel:09120000000',
  email: 'concierge@luna-sanctuary.com',
  address: 'تهران، زعفرانیه، خیابان مقدس اردبیلی، پلاک اختصاصی لونا',
  addressEn: 'Luna Sanctuary, Moghadas Ardebili St., Zaferanieh, Tehran',
  workingHours: 'همه‌روزه از ساعت ۹:۰۰ صبح الی ۱۹:۰۰ عصر (جمعه‌ها با هماهنگی قبلی)',
  workingHoursEn: 'Everyday 9:00 AM – 7:00 PM (Fridays by VIP Reservation)',
  instagramHandle: '@Luna.BeautySanctuary',
  instagramUrl: 'https://instagram.com',
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XN7cZ7F9vUp2qQL42fY4LMr6VaX6TztRhdsIxHH9R64W4bMoU6eqo0gIobSP399Gbzxz0WJjFa6k9xxFVER0PElyIk_MHPlpZ3F2Mpw_geUw7FjslLsuYlSAvcLjyzYaEr1__EUtf5mZ7meLgIk_3b4m-7qq_QkLPI_6Llu2ulDl2tYSFAmzAy4G0p9ayZrYaPWCrVEmr1dlBFML_kuDer7IDSs8pFBFmDmHXxDgoTIQw29x4sQQtymAs',
  heroInteriorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAud-wihGJaceZhwA4OUaUuWC6TEWD0BP3W-pAE5tG4eleZjjCjYLOb65PT2wmdlkGWW2kmrEvtQkot9Ifz-uFRJNOCVLO73fpDaXnoXLaEpXRw3JwwzQSwzz3XMb9WVfqvuTfKGJrw11aID01c_w9Hcy-bGci8hcJSZrJnsVF7QS5R-Zq9TKxoKV7aH9tK9dusnTrciEPwZvyRRiyM4c1XuBFD4M95HTgJNp11eJMAOQ3liG-Z4Et2',
  aboutPortraitImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDY_hijTu_Pq2EBzd9htRr_uNE8jvuWIvOHS6yS728NO8Q-01HSWgLsP7dmP883KXqbTnpcMpLYytXXVrG4LRrf9Gma-TQhrLDLGpYglnB3HpySvyQSoRhV2u143qtzVgyuyZVGHNkj6hkTJluwDAy__iKCTsoNYiHUT9bXmNWIJcV0uZvnjAi5z-fYT3UKjKdKT0Wh9_GYSQvUl50FKJFl566ilVcxKlTcUDoXDaBFRUhMTIHXFM9',
  aboutInteriorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRdxOLyX7OzlPXzHmtTTrqx63dqFAkMxfYT1oD_1ijfQd11JmkBNNdEDjFTDemRdy9wofaAWEb20Gt5-oMWgho2mmWOUqE_a9Uas87x2XsncXgWcvqV77xw6OuRTExVOs30pR0rNwhL1hIhnNCNlZwT6Um9cRPBWIdtuou962iotpa-Z9s6lrgUrnlxAejUFd7e8nFqm2dL7UTy-xNbYlBXywXjU6bM840kbFnQELSAbrVt51p_XH3',
  servicesHeroImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL8kHr21Pf0BWNOghHA-ivMeRSAo44BgsH4pvpAQR5mwp-jAB2Y55cf4W_pCstosqUQq5CZ0XRMtesSgJ-aBOGllFFSbNbPVfww-iJtyNjAhKADNyz7AOyhKa4RLDuCbwcZ7JEs1T7aS_RUF8CSGwa4TFPNc8Zw1NCOvBRZ7SC04hGVGZpyrfuv9St9KWoWRxiwNzaojM-Fhk-ZsvsmflBdOXGbjNS0gLcIILqBayY6Zx0M5MoBOoa',
  bookingDeskImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCldojWKe0p94IvS0kxwHpyXSapdGZ9xkiV7vYbRrkXJ8VFWwTBu6ci5G-tumfL7xDD-WPVXXDmQ-OEPRnoD5eYyuKhHYr2s3ztboflFa-aMNIPPJWjWq7aEoK1Wik4aPCDFZEM79GOW_-nJcDYgTHQ-hwmIw7OZdWOYvX5VkYj5gX5C-iR6H_-iF6NymHwzLJlIWEvhGCqkiCdu731gNO2pJXBuIibw6t6H1yn-yL-7QVZBdkS-FAc',
  contactInteriorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUF8dwe42Jns_I9iD7ligIpoFaXBVdBSKzAIot2UgVg7SUtp6ckDm9EN43VTpgupXzhk4vUmZmUrR6U9nsrekjNVjpuSdOV5zJq_vRguPINL9XvdqoEVA2Rh1YelBuyyz3AIGlfZuLkNOf4e0EhFyXVT3TeezAr6OCp1RiBW_x-O9cPdhcC6HgNOJWxk4qlxXQ9aMKwmkodpD8-RxLeG_HCxGEhOWsLQcrqwEqKY5ubK6Jt2YPvmxT',
  mapImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6uGT6ZsfKrhy2lIVNbCEwt4d4eosz0fw99nsSKWYaTgp2_sWouLBVNw8xcf1LB39hAvaHOEbNvtEfNd8LcXMnDfhfubSfMhrTOVQxO7zaenWUSsXyUd_Ad1rtZjNPNkw3cke2kXr7_waLPCzK_NyWaUJ6EEmuGoeoiKLakZhVwNS7EeLXNTCjGD25SJOOL81su5K8BABQ2BgWqvEa3nQAWRWFki55-C9fEmojcExCpPoeuK9aB4mx'
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'hair',
    category: 'hair',
    title: 'خدمات مو',
    tagline: 'استایل و سلامت',
    description: 'کوتاهی، رنگ، مش و براشینگ برای استایلی هماهنگ با سلیقه شما. استفاده از متریال ارگانیک و آبرسان‌های احیاکننده برای طراوت پایدار تارهای مو.',
    features: [
      'کوپ و کوتاهی ژورنالی متناسب با فرم چهره',
      'بالیاژ، آمبره، هایلایت و رنگ‌های اختصاصی',
      'کراتین، بوتاکس و پروتئین‌تراپی ابریشمی'
    ],
    startingFrom: 'مشاوره اختصاصی',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9iZv1G8dZBN4eg_nOpZBicyZdvl0WjboQl0lSdGTitQ1ooHp0D3HNVI6_tt3qEpW_jilWTv08pw9t96U5oOIJ_FQVI0kk4__J8aJj68TfFj_vHXyNbgnRF_h4NUXjLpcAjvdiNCtOep6--eSZwdO0wHRwvzwpuGUS1oPYeASbzMFjyFawERhs78FeQAn-SYT7O70cP5d3tdgdQtoGdXix8g8odS6MgEyppZXvleS0q3sHJX_MtVXb',
    imageAlt: 'کوتاهی، رنگ، لایت و براشینگ حرفه‌ای مو در سالن زیبایی لونا',
    indexNumber: '01',
    iconName: 'content_cut'
  },
  {
    id: 'makeup',
    category: 'makeup',
    title: 'میکاپ و گریم',
    tagline: 'جلوه باشکوه',
    description: 'آرایش حرفه‌ای برای مهمانی‌ها و مراسم ویژه، با توجه به سبک و سلیقه شما. تکنیک‌های کانتورینگ ارگونومیک و استفاده از برندهای درجه‌یک جهانی.',
    features: [
      'میکاپ لایت اروپایی و نچرال گلاسی',
      'گریم سینمایی و کانتورینگ سه‌بعدی مقاوم به تعریق',
      'آرایش ویژه مراسم و محافل فرمالیته'
    ],
    startingFrom: 'بسته انتخابی',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhA6mH_fYU5VeEwiFH74dyf1ActSZ7zFNmf51CRqABMohgsAyCBiGaTiuvm0LDYn67AoU0GcaU9KUk4GpcBboZMMk06ZlBJARI7xC1eRYI-3pAafzeHGthtRN3IxvuVUaj7wtYm2f8LCokoV2aWP0ZwsL4uPMkWj_fgvENPvkldgvZ0mcJLnSoxtU87gpR8lYmywJoq5mJZX6QihJ9JQZl-swZnJMVRIUVkQk2UWnVmiFw2zYVfKMo',
    imageAlt: 'میکاپ و گریم هنرمندانه در سالن لونا با ماندگاری بالا',
    indexNumber: '02',
    iconName: 'brush'
  },
  {
    id: 'nails',
    category: 'nails',
    title: 'ناخن',
    tagline: 'ظرافت و مراقبت',
    description: 'مانیکور، پدیکور و طراحی ناخن با ظاهری ظریف و آراسته. بهداشت بی‌نقص با پک‌های یکبارمصرف و ابزار استریل کلینیکی.',
    features: [
      'مانیکور روسی دقیق و پدیکور اسپا با نمک‌های معدنی',
      'لمینت، ژلیش و کاور طبیعی ناخن با متریال ژل',
      'دیزاین‌های مینیمال و متالیک ویژه لونا'
    ],
    startingFrom: 'بسته درمانی و زیبایی',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC770Ib_TvFK97cY8NhVNuCb8JD09rGXcyd5_K-1Cv9VkhmJoQHPmCZAn9fa0AvB1JyXojYBQT3N6TxSX3pjRQ0NGsvzH8JaqI7A2DrzfTDjak1t0dOwv-wYDriiaLeLYlYftKKgvYnQX_zNyiQ9v7eOEBrMnEudxPArxINZxZsAHQJXPIGlG85SFLffsDQs6Q6E1NYvAsbsD5usr5BAPKGq70Ke_ovdkJjqZno1XP8n4e0zwvVMsOd',
    imageAlt: 'مانیکور، طراحی و استایل ظریف ناخن در سالن لونا',
    indexNumber: '03',
    iconName: 'palette'
  },
  {
    id: 'lashes',
    category: 'lashes',
    title: 'ابرو و مژه',
    tagline: 'هماهنگی طبیعی',
    description: 'اصلاح ابرو، لیفت و خدمات مژه برای جلوه‌ای هماهنگ و طبیعی. فرم‌دهی اصولی با در نظر گرفتن ساختار هندسی چشم و چهره شما.',
    features: [
      'لیفت و لمینت مژه و ابرو با بوتاکس تقویتی',
      'اکستنشن تار به تار با ابریشم ارگانیک',
      'طراحی، قرینه‌سازی و اصلاح تخصصی ابرو'
    ],
    startingFrom: 'بسته نچرال',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyPafp3PmbymtSlTmEtSd6_aK5kjxFpGFUzvjPpTcqhcgzBNL6Q_XwzsJ2PMho6_9TrEYOgclGsXtWbCl8T1J_q2mzos7OCwopzBiLxSENI2ovdSW9IsFi3FYy-vtU-wDL329DiGeYubI93E6IHdjGVHF9l3jTrof3qENMOu24oLY4Q1EJ4oAvyEIV3Eqqq6Skhl6hhfdIgdEnCiTIoIskFo94rI2IzzuBUW5sKNMjteFxjzM-eHUc',
    imageAlt: 'لیفت و لمینت ابرو و مژه با ظرافت طبیعی در لونا',
    indexNumber: '04',
    iconName: 'visibility'
  },
  {
    id: 'skincare',
    category: 'skincare',
    title: 'مراقبت از پوست',
    tagline: 'احیا و درخشش',
    description: 'پاک‌سازی و مراقبت تخصصی پوست متناسب با نیازهای مراقبتی شما. فیشیال‌های عمقی، هیدراتاسیون و درمان‌های ضد پیری با فرمول‌های بالینی.',
    features: [
      'فیشیال کلاسیک، هیدرودرمی و اکسیژن‌تراپی',
      'پیلینگ آنزیمی و مزونیدلینگ جوانساز',
      'ماساژ لنفاوی صورت با سنگ یشم و گوآشا'
    ],
    startingFrom: 'آنالیز پوست',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChaMKDPmm5Ubn18kmM--l2Tlix_LV0mHsPHj_T_llUrMucDJWPmgEdP47-U-e9oVDJZExPzcZuOIwu2MFIQMbjSi-LrSl_92qNA1T8Rd2IujmCnG5rhjVg2Uw4vDSt1bJFjVftHjZK6Fdl9jUQHQXhJlPmz0d-0ZVKZbHgzlhJPXeFJAVwUXeOid6I5T92I8wJGqXIpCPpO4UXjWA15SB-mmqv6hbV6bIIsvVIOHrSw_3ybPfyaLZI',
    imageAlt: 'پاک‌سازی عمقی، هیدراتاسیون و فیشیال تخصصی پوست در سالن لونا',
    indexNumber: '05',
    iconName: 'water_drop'
  },
  {
    id: 'bridal',
    category: 'bridal',
    title: 'زیبایی و عروس',
    tagline: 'روز رویایی',
    description: 'خدمات ویژه عروس و آرایش مراسم با توجه به سبک دلخواه شما. پکیج‌های اختصاصی VIP همراه با اتاق استراحت خصوصی و پذیرایی لوکس.',
    features: [
      'مشاوره و تست میکاپ و شینیون قبل از مراسم',
      'فیشیال آماده‌سازی پوست و ماساژ ریلکسی عروس',
      'همراهی تیم پشتیبانی و میکاپ تا زمان عکاسی'
    ],
    startingFrom: 'مشاوره حضوری',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1QlXZdWvstXZBW5BdZoGdf5ySu1w1062INFV2KdxCfSBqKE8TSUXMCpX3n3BeBnJb1_QId6iP4zSPOnlsYoICm1t4JECjAZ5p8OhwiI9Hkmr3T1cUNps4_wek5D1vlRIdodtdHioSY2MaYrGRkepNqKbA-id78NQbTox6LvX0tbjXQyxCAbSEpduoLfNygOYFb506fHgzV4m8sJnb_AycJ-mYRdHkB4wA5VTGfa64kNdES2ZncpWP',
    imageAlt: 'پکیج تشریفاتی عروس و شینیون سلطنتی در سالن لونا',
    indexNumber: '06',
    iconName: 'diamond'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'item-skin-glass',
    category: 'skin',
    categoryLabel: 'پوست و فیشیال',
    badge: 'پوست و احیا',
    title: 'پوست شفاف و درخشان (Glass Skin)',
    subtitle: 'آیین فیشیال تخصصی هیدراگلو با سرم‌های غنی از اسید هیالورونیک',
    description: 'احیای عمقی لایه‌های کلاژن با اکسیژن‌تراپی و عصاره‌های گیاهی، ویژه ایجاد شفافیت پایدار و طراوت طبیعی صورت.',
    meta: 'مدت اثرگذاری: ماندگاری بالا',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAEjpfW7wTAIBNWFaeMb3RRCen5N_DrZcQTbFRLD3dv1krsYnQEBmHZuBEey6RMksrCerbDZ2WTJl2KjZjjWcIgdA6XJAOZRraM7AtbKIwvsNIutnoAsmwc6hjsp2c6yOxXqSQVUYQPm7AQt-PNrxvCQvCKklcbPUBTh9hOA4exa2BLWsyxc0eErJIapD6tYeYqWEE8aXUjNlbKszo4nHz-0vlAgl26uTvcMUGo183PoXCqZOFkkpb',
    imageAlt: 'چهره درخشان با فیشیال تخصصی گلس اسکین سالن لونا'
  },
  {
    id: 'item-makeup-nude',
    category: 'makeup',
    categoryLabel: 'میکاپ و آرایش',
    badge: 'میکاپ آرتیستی',
    title: 'میکاپ مینی‌مال نود و کرمی',
    subtitle: 'تکنیک برجسته‌سازی استخوان گونه و پلک‌ها با بافت‌های کرمی و ساتن',
    description: 'طراحی چهره بدون حس سنگینی مواد آرایشی با تلفیق سایه‌های مونوکروم گرم، ایجاد تقارن نرم و تاکید بر گیرایی نگاه.',
    meta: 'نوع پوست: متناسب با انواع پوست',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBZgO6suYHX-JIWcf0lxSB2P7yQkL9Ge4QJvTbDSHSY4IGRyzInHM5A3dDESoBgNFCoMtcN8gO49hTQCN4-p5e25elklwFS3LV83_IBLcERQ27Tl9pdkDRdHK3Bs8k4PM4ZQ6zLCxOO_4Yz3WDH3COmBjKJsFpR3PufKZdKE-FrTQXxoTgmTQcgESS1JW88j_i_IUdHChUWhlx-vcQMqedu9rdOqU90Q5zn6mH15j21E4Y37AIa2Wc',
    imageAlt: 'میکاپ نود ابریشمی با تناژ هلویی و گرم سالن لونا'
  },
  {
    id: 'item-bridal-royal',
    category: 'bridal',
    categoryLabel: 'عروس و نامزدی',
    badge: 'رویال و عروس',
    title: 'پکیج تشریفاتی عروس لونا',
    subtitle: 'آرایش ماندگار ضدآب، شینیون ساختاریافته نرم همراه با آماده‌سازی ۴۸ ساعته پوست',
    description: 'ترکیب همگون آراستگی کلاسیک و ظرافت معاصر به گونه‌ای که ماندگاری زیبایی شما تا پایان مراسم بی‌عیب‌ونقص بماند.',
    meta: 'شامل مشاوره حضوری و تست فرم',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNuRFidtazMAR0Hfox2IhuZI_ZemMVWXETe_vlBLFfV0Z4aOAC0_aKLCYGC4roIWhxyuA-0BKcw-KUfW-IOBWW0bY2WIdFtNBqFdCgKGLT6m9A4zLBF3YoTHk6Ot4IT0iiZDWwzDEfc8fvF-gCzywcnZQkJnhazkQpAeRvQG26OKzXz4gCcP8f_b5eX4e_nFCdBfegkFrwMZRVvbrxox4kYScSrCO_I1KexUlaLTwxyhdNrQSUVYG0',
    imageAlt: 'عروس باشکوه لونا با تور ابریشمی و میکاپ درخشان'
  },
  {
    id: 'item-hair-balayage',
    category: 'hair',
    categoryLabel: 'مو و بافت',
    badge: 'رنگ و بالیاژ',
    title: 'بالیاژ کاراملی چندبعدی',
    subtitle: 'رنگ‌آمیزی بدون آسیب با پیگمنت‌های گیاهی ارگانیک و کراتین‌تراپی ابریشمی',
    description: 'ایجاد سایه‌روشن‌های هارمونیک متناسب با تناژ رنگ پوست، همراه با پلکس‌تراپی جهت حفظ استحکام و درخشندگی تارهای مو.',
    meta: 'تکنیک: فویلیاژ و سایه ریشه',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9cZGR3CN_oGiECYlTYLRBifySm1AK3oFpEzvZfrHGg-J1XwL8x9Uwc_8S5ky-pKFBlUQjUNNjqcJJjIdBAtlNcGvjKKSlQ_z_TfDdVVECHAdMPxx-3oNB_c4FsAmzK89psOHTSdkFBfZXw9b160S1BZBTrkkn5qgao1ajDOx38QmdTiB_hOIICPdY6gS9-ckWRLEs2_1TeBUdZhtLpPUcGw36DbKuamRJ-HWzHTxNmvU1pyzNjls6',
    imageAlt: 'بالیاژ کاراملی شنی با موج‌های درخشان و ابریشمی مو'
  },
  {
    id: 'item-nails-donut',
    category: 'nails',
    categoryLabel: 'ناخن و اسپا',
    badge: 'اسپا و مانیکور',
    title: 'مانیکور شیک Glazed Donut',
    subtitle: 'مانیکور روسی دقیق با پوشش صدفی و روغن‌های معطر گیاهی آرگان',
    description: 'مانیکور مهندسی‌شده همراه با ماساژ ریلکسی کف دست و اسکراب نمک دریایی برای بازگرداندن نرمی و شکوه پوست دست.',
    meta: 'مواد مصرفی: ژل پولیش ارگانیک و بدون آلرژی',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHT9TphWfvxJ9fbyfoo2J7hYffawbK6dSRI0Q9JIYw8KV5QC_0Vn0sYtpY6Ii6Pd4rN4CQxUkoprGNHvZwwFZSbRbH35DXdhbnI3I8atfr8GNC6OiTssQSKBzGyHvB2vQG16Dw6q3Kf5TjSqnH0aGPWiGZOf5YWcOi4xIC1wGd9r2E9YzUV5zONNh_fKAK0uwpP9OD2FRKJ0bIQXvxwslh53BYJ34CPoqi9nwtsnMZwoCl1Y7oI155',
    imageAlt: 'طراحی مینیمال ناخن صدفی کروم گلیزد دونات در سالن لونا'
  },
  {
    id: 'item-skin-spa',
    category: 'skin',
    categoryLabel: 'پوست و فیشیال',
    badge: 'اسپا و آرامش',
    title: 'آیین اسپا و سم‌زدایی تن',
    subtitle: 'پاکسازی جامع سم‌زدای بدن در اتاق‌های سنگی ارگونومیک با رایحه‌درمانی اسطوخودوس',
    description: 'تجربه‌ای غوطه‌ورکننده در آرامش با استفاده از ماساژ روغن‌های گرم و لایه‌برداری ارگانیک برای تجدید حیات بافت‌های خسته.',
    meta: 'محیط: اتاق اختصاصی VIP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYYMVCdq57qPGP1nFkHsPUj3HCZo3ppgBXKsN-cRxAPUxuhq1t_XvmAI_wv12fNT3suQAunFBh4eLCEi8XKL3L6GtLi05pZHJO4fJCKVR5YJ8JFuQLhn5-knoEb_bi13IIJpjUWBDsoigej8D2sLgE7P5TfNcFR9Gnbmwu3rTqzQ2JpCZdoa78PEOj0Pjsejy58AdE8DfgH3YScc_uq_KRYqHWPvvKEOy8_L-k_5qo0AXAjledqql1',
    imageAlt: 'سوئیت اختصاصی اسپا و مراقبت‌های آرامش‌بخش پوست در سالن لونا'
  }
];

export const GALLERY_HIGHLIGHTS = [
  {
    id: 'gallery-salon-1',
    category: 'salon',
    badge: 'فضای اختصاصی',
    title: 'فضای آرامش‌بخش اسپا و لابی',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxjg6LuVTsjm_7yWzNWdRQge0VUFM3Gtnf5IRa-9h5lixufeN2NnmyWGVLw8KXs8CdpAFJqR8e3gf7mn6yODKS2pN9SRDrMvBh7VUC2s6R5-aebayVglEYcce52hjgM9NUyeEEqfLDkRP-H8BzJqIFV5KB3GhjZPx8697KNeQ0Kdg2IC6SdJpgZ-78KkDev838kqa_o-w8ys8wSz22EfEiaAKov0xUH1cXESn299w0KBorhBcvkiwO',
    alt: 'فضای لابی و پذیرش لوکس سالن زیبایی لونا با المان‌های تراورتن و طاق‌های کرمی',
    span: 'md:col-span-2'
  },
  {
    id: 'gallery-skin-1',
    category: 'skin',
    badge: 'کابین تخصصی',
    title: 'اتاق اختصاصی فیشیال و پوست',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmZLRRDYRoO-6yDOuNUXMcknw1bga0imntaLO0jdXH1oy7jKvVoolWPcWS6xY-x_uhtOTG8yY4iNcZ-W5DrSe7rrc-lcZ4GrWH4J3SsGHkHpqGNnTd607lcSd5Og_B7w4-tocR37-u5hjzvbK_Xpla5Gq7cxhL01Ef4BlMRwAOMrVk2PwDyJjexXr5ty2DD6r0dJKu3Mul5aY00TEvNut8OGfbLdBRJqCY8LydI1hiZwukSeucHHWf',
    alt: 'کابین فیشیال و اسپا با ملحفه‌های لنین و نور ملایم توکار در سالن لونا',
    span: 'col-span-1'
  },
  {
    id: 'gallery-styling-1',
    category: 'styling',
    badge: 'طراحی ظریف',
    title: 'طراحی ناخن و آرایش دست',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeVDUL7RmnSZkHo_xUf_Haqk2OfnwgfMVt5NpmON8O6k7gqPZxXWTH4N6nLmub21EUQCYab4ALWiMb3JsRS-L1JYS6P5NSor4m8tiweGqzChb35SsOUDFZykPxARN7mzEeycarEbkGODqrVlHldOwSIm7o4Q00qxuePBRXEsKQPJWv2nvbu30XaMtIGGfnPM15Q4hwjlTfRVvcAkUtciAh2wUDYN8MczgQUojNyNfQoWqNkMy79qKo',
    alt: 'میز ناخن بار مینیمال و آرامش‌بخش با صندلی‌های کرم در سالن لونا',
    span: 'col-span-1'
  },
  {
    id: 'gallery-styling-2',
    category: 'styling',
    badge: 'استایلینگ',
    title: 'سالن استایلینگ و رنگ مو',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9xQVc8RXGh-053I9Cly0PYA4jI8iogiaYuT0O_aRF6zphoIWLWrhKBL3-t1IAMuwSGFlbCUtPse5CgHSH1_289ECQFkKfC7LJShkw67kp9SxJx70oRDcDqcozJZT2OvWuliERP5DVb95mBWATGZlJL_hgUTbPqE030ivSL1h9T3PzJs-E41aiK_czBFv0M_XlmD8gm0Dj-KtDo4UfANXRsyTGgYZmaQ34h2k4yynZsHzb_AlHmVKt',
    alt: 'سالن آرایش و رنگ مو با آینه‌های قوسی و نورپردازی ملایم',
    span: 'col-span-1'
  },
  {
    id: 'gallery-salon-2',
    category: 'salon',
    badge: 'سوئیت رویایی',
    title: 'سوئیت اختصاصی عروس و میکاپ VIP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD0qT7ShSYm5B-tBgW5LJzGGt1WZWZCka6e9T1xhHXIhSVxOAa-0I-UfkzKO-V08FsPMNsNoZIu0qUiGEVyuhJb4-W31ZUcWojcY-PqVD5kS1mt4bnYRDzZuzXAO835HaWqoxKwRKyd0DWseujmXDETPlp-xF6QTGrM4OttbV10bcVYbYg7CCk5afEw11ve9SyxSa_HY61KyIfTRxML51Sk6ECnug8-d9pkvr8ZFuY3H8j_6CKlGDC',
    alt: 'سوئیت اختصاصی عروس با کاناپه مخمل و نورپردازی مجلل',
    span: 'md:col-span-2 lg:col-span-3'
  }
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: 'چگونه می‌توانم قبل از رزرو خدمات، مشاوره تخصصی دریافت کنم؟',
    answer: 'شما می‌توانید به صورت آنلاین در فرم رزرو نوبت گزینه «مشاوره تخصصی» را انتخاب فرمایید یا از طریق تماس تلفنی با پذیرش لونا، یک جلسه ۱۵ دقیقه‌ای مشاوره رایگان با متخصص مربوطه تنظیم کنید.'
  },
  {
    question: 'چند روز قبل از مراسم باید برای پکیج عروس هماهنگ کرد؟',
    answer: 'پیشنهاد ما برای پکیج‌های عروس، حداقل یک تا دو ماه قبل از تاریخ مراسم است تا مراحل تست میکاپ، مراقبت و پاک‌سازی پوستی و تثبیت استایل مو با آرامش کامل و بدون دغدغه انجام پذیرد.'
  },
  {
    question: 'آیا امکان کنسلی یا تغییر زمان نوبت وجود دارد؟',
    answer: 'بله، تا ۲۴ ساعت قبل از زمان تعیین‌شده امکان جابجایی یا لغو نوبت از طریق تماس با مجموعه یا پنل آنلاین بدون هیچ‌گونه کسر هزینه‌ای میسر می‌باشد.'
  },
  {
    question: 'پروتکل‌های بهداشتی سالن به چه صورت است؟',
    answer: 'تمامی تجهیزات در دستگاه‌های اتوکلاو پزشکی استریل شده، پک‌های بهداشتی فردی یک‌بار مصرف ارائه می‌شوند و محیط سالن با سیستم تهویه مدرن به‌صورت پیوسته هوادهی و ضدعفونی می‌گردد.'
  }
];

export const FAQS = GENERAL_FAQS;

