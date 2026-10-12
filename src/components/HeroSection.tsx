import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ShieldCheck, CheckCircle2, Building2, Landmark, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="relative bg-gradient-to-br from-[#002b4d] via-[#004B87] to-[#005ea8] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FECC00] overflow-hidden">
      {/* Subtle Background Geometric Nordic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Safe Wording Verification Notice (Mandatory by prompt) */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-[#FECC00]/60 text-[#FECC00] text-xs sm:text-sm font-bold mb-5 shadow-xs">
          <ShieldCheck className="w-4 h-4 shrink-0 text-[#FECC00]" />
          <span>{lang === 'ar' ? 'صياغة آمنة وموثوقة: نعتمد حصراً على المصادر والبيانات السويدية الرسمية' : 'Säker rapportering: Endast verifierade uppgifter från officiella svenska myndigheter'}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight max-w-4xl text-balance">
          {lang === 'ar' ? (
            <>
              مركزك العربي لمتابعة كل جديد في <span className="text-[#FECC00] underline decoration-[#FECC00]/40 decoration-4 underline-offset-6">السويد</span> من قوانين وقرارات
            </>
          ) : (
            <>
              Din officiella guide till lagar, beslut och myndighetsnyheter i <span className="text-[#FECC00]">Sverige</span>
            </>
          )}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-blue-100/90 max-w-3xl leading-relaxed mb-8">
          {lang === 'ar' ? (
            'تحديثات فورية وشروحات مبسطة لقرارات مصلحة الهجرة (Migrationsverket)، الضرائب (Skatteverket)، التأمينات (Försäkringskassan)، مكتب العمل، وهيئة التقاعد، مع روابط المصادر الرسمية وتوضيح من يتأثر وماذا عليك فعله.'
          ) : (
            'Komplett samhällsinformation från Migrationsverket, Skatteverket, Försäkringskassan, Arbetsförmedlingen, 1177 och Riksdagen för arabisktalande invånare och nyanlända.'
          )}
        </p>

        {/* Key Operational Pillars (8 Authorities, Direct Links, Safe Guidance) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl text-slate-100 pt-2">
          
          <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3.5 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-[#FECC00] shrink-0" />
            <div>
              <div className="text-xs text-blue-200">{lang === 'ar' ? 'المؤسسات الرسمية' : 'Myndigheter'}</div>
              <div className="text-sm font-bold text-white">{lang === 'ar' ? '8 جهات مركزية' : '8 Huvudorgan'}</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3.5 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#FECC00] shrink-0" />
            <div>
              <div className="text-xs text-blue-200">{lang === 'ar' ? 'درجة الموثوقية' : 'Källverifiering'}</div>
              <div className="text-sm font-bold text-white">{lang === 'ar' ? '100% مصادر مؤكدة' : '100% Verifierat'}</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3.5 flex items-center gap-3">
            <Landmark className="w-6 h-6 text-[#FECC00] shrink-0" />
            <div>
              <div className="text-xs text-blue-200">{lang === 'ar' ? 'القوانين النافذة' : 'Lagändringar'}</div>
              <div className="text-sm font-bold text-white">{lang === 'ar' ? 'اتفاقية تيدو والبرلمان' : 'Riksdagsbeslut'}</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3.5 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#FECC00] shrink-0" />
            <div>
              <div className="text-xs text-blue-200">{lang === 'ar' ? 'شرح للمقيم' : 'Praktisk guide'}</div>
              <div className="text-sm font-bold text-white">{lang === 'ar' ? 'إجراءات عملية واضحة' : 'Konkreta råd'}</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
