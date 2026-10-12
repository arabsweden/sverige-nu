import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Download, Globe, Share2, Check } from 'lucide-react';
import { exportSingleFileHtml } from '../utils/exportSingleHtml';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const t = translations[lang];
  const [shared, setShared] = useState(false);

  const handleExport = () => {
    exportSingleFileHtml(lang);
  };

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text:
        lang === 'ar'
          ? 'سويدنا الآن - المنصة العربية لمتابعة القوانين والقرارات الرسمية في السويد'
          : 'Sverige Nu - Officiella lagar och beslut i Sverige',
      url: window.location.href,
    };

    if (
      typeof navigator !== 'undefined' &&
      navigator.share &&
      (typeof navigator.canShare !== 'function' || navigator.canShare(shareData))
    ) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error)?.name === 'AbortError') return;
      }
    }

    // Clipboard fallback
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Zone 1: Brand Wordmark (Strict single-line text element with Swedish emblem) */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            {/* Swedish Flag Stylized Emblem */}
            <div className="w-9 h-6 bg-[#004B87] rounded-sm relative overflow-hidden shadow-xs ring-1 ring-black/10 shrink-0">
              <div className="absolute top-0 bottom-0 left-[30%] w-[18%] bg-[#FECC00]" />
              <div className="absolute left-0 right-0 top-[38%] h-[24%] bg-[#FECC00]" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#004B87] group-hover:text-[#003366] transition-colors leading-none">
                {t.siteTitle}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wider mt-0.5">
                Sverige Nu · الدليل الرسمي
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean text, single line) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a 
              href="#updates-section" 
              className="hover:text-[#004B87] transition-colors hover:underline decoration-2 underline-offset-8"
            >
              {t.navLatestNews}
            </a>
            <a 
              href="#guides-section" 
              className="hover:text-[#004B87] transition-colors hover:underline decoration-2 underline-offset-8"
            >
              {t.navWhatItMeans}
            </a>
            <a 
              href="#sources-section" 
              className="hover:text-[#004B87] transition-colors hover:underline decoration-2 underline-offset-8"
            >
              {t.navAuthorities}
            </a>
            <a 
              href="#emergency-section" 
              className="hover:text-[#004B87] transition-colors hover:underline decoration-2 underline-offset-8"
            >
              {t.navEmergency}
            </a>
            <a 
              href="#newsletter-section" 
              className="hover:text-[#004B87] transition-colors hover:underline decoration-2 underline-offset-8 text-[#004B87]"
            >
              {t.navNewsletter}
            </a>
          </nav>

          {/* Zone 3: Primary Actions (Share Site + Export Single-File HTML + Language Toggle) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Share Site Button (Native Share with Clipboard Fallback) */}
            <button
              onClick={handleShare}
              title={lang === 'ar' ? 'مشاركة رابط الموقع أو إرساله' : 'Dela länk eller sida'}
              aria-label={lang === 'ar' ? 'مشاركة الموقع' : 'Dela webbplatsen'}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-bold rounded-lg border transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                shared
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-[#004B87] hover:border-slate-400'
              }`}
            >
              {shared ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'ar' ? 'تم النسخ!' : 'Kopierad!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#004B87]" />
                  <span className="hidden sm:inline">{lang === 'ar' ? 'مشاركة' : 'Dela'}</span>
                </>
              )}
            </button>

            {/* Single-file HTML Export Button */}
            <button
              onClick={handleExport}
              title={t.exportTooltip}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-bold text-[#004B87] bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all cursor-pointer whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-[#004B87]" />
              <span className="hidden md:inline">{t.exportSingleFileBtn}</span>
              <span className="md:hidden">HTML</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <Globe className="w-4 h-4 text-slate-600" />
              <span>{lang === 'ar' ? 'Svenska' : 'العربية'}</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
