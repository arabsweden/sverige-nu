import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { authoritiesData } from '../data/authoritiesData';
import { ShieldCheck, Download, ExternalLink, Heart } from 'lucide-react';
import { exportSingleFileHtml } from '../utils/exportSingleHtml';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t-4 border-[#FECC00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Safe Language Policy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-4.5 bg-[#004B87] rounded-xs relative overflow-hidden shrink-0">
                <div className="absolute top-0 bottom-0 left-[30%] w-[18%] bg-[#FECC00]" />
                <div className="absolute left-0 right-0 top-[38%] h-[24%] bg-[#FECC00]" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                {t.siteTitle}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.footerDisclaimer}
            </p>

            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#FECC00] shrink-0 mt-0.5" />
              <span>
                {lang === 'ar'
                  ? 'سياسة الصياغة الآمنة: لا نكتب أو ننقل أي أخبار مجهولة المصدر. جميع قراراتنا مدعومة بالروابط الحكومية السويدية.'
                  : 'Säkerhetspolicy: Vi publicerar enbart verifierade uppgifter med länkar till officiella statliga källor.'}
              </span>
            </div>
          </div>

          {/* Column 2: Official Swedish Authorities Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {lang === 'ar' ? 'الجهات والمصادر الرسمية' : 'Svenska myndigheter'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {authoritiesData.map((auth) => (
                <li key={auth.id}>
                  <a
                    href={auth.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{auth.nameSv}</span>
                    <span className="text-slate-500 font-normal">({auth.nameAr.split(' ')[0]})</span>
                    <ExternalLink className="w-3 h-3 text-slate-600" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Tools & Single-file HTML Download */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
              {lang === 'ar' ? 'أدوات وحفظ الموقع' : 'Verktyg & Export'}
            </h4>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {lang === 'ar'
                ? 'يمكنك تنزيل الموقع كاملاً كملف HTML مستقل لتصفحه أو الاحتفاظ به على جهازك والعمل به دون اتصال.'
                : 'Ladda ner hela webbplatsen som en enda offline-HTML-fil för dator och mobil.'}
            </p>

            <button
              onClick={() => exportSingleFileHtml(lang)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-900 bg-[#FECC00] hover:bg-[#e6b800] rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>{t.exportSingleFileBtn}</span>
            </button>

            <div className="pt-2 text-xs text-slate-500">
              {lang === 'ar'
                ? 'الموقع مصمم بالتوافق التام مع اتجاه اليمين إلى اليسار (RTL) والأجهزة الذكية.'
                : 'Fullt anpassad för mobiler, surfplattor och datorer med stöd för RTL och LTR.'}
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {t.footerRights} {new Date().getFullYear()} · سويدنا الآن
          </div>
          <div className="flex items-center gap-1">
            <span>{lang === 'ar' ? 'معلومات موثوقة لخدمة المجتمع العربي في السويد' : 'Verifierad information för arabisktalande i Sverige'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
