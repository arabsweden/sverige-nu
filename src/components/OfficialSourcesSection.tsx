import React from 'react';
import { AuthorityId, Language } from '../types';
import { authoritiesData } from '../data/authoritiesData';
import { translations } from '../data/translations';
import { ExternalLink, Phone, MessageSquareQuote, Filter, Building2, CheckCircle2 } from 'lucide-react';

interface OfficialSourcesSectionProps {
  lang: Language;
  onFilterByAuthority: (id: AuthorityId) => void;
}

export const OfficialSourcesSection: React.FC<OfficialSourcesSectionProps> = ({
  lang,
  onFilterByAuthority
}) => {
  const t = translations[lang];

  return (
    <section id="sources-section" className="my-16 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004B87] bg-blue-50 px-3 py-1 rounded-md mb-2">
          <Building2 className="w-3.5 h-3.5 text-[#004B87]" />
          <span>{lang === 'ar' ? 'المؤسسات الحكومية والخدمية' : 'Svenska myndigheter'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
          {t.officialSourcesHeading}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          {t.officialSourcesSubheading}
        </p>
      </div>

      {/* Grid of 8 Swedish Authorities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {authoritiesData.map((auth) => {
          const desc = lang === 'ar' ? auth.descriptionAr : auth.descriptionSv;
          const arabicSupport = lang === 'ar' ? auth.arabicAssistanceAr : auth.arabicAssistanceSv;

          return (
            <div
              key={auth.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Official Agency Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-extrabold text-[#004B87] uppercase tracking-wider">
                    {auth.nameSv}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {lang === 'ar' ? 'معتمد' : 'Officiell'}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                  {auth.nameAr}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {desc}
                </p>

                {/* Telephone */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2 rounded-lg mb-3">
                  <Phone className="w-3.5 h-3.5 text-[#004B87] shrink-0" />
                  <span className="tabular-nums">{auth.phone}</span>
                </div>

                {/* Arabic Assistance Note */}
                <div className="text-[12px] text-slate-500 mb-4 flex items-start gap-1.5 leading-normal">
                  <MessageSquareQuote className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{arabicSupport}</span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={auth.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-bold text-white bg-[#004B87] hover:bg-[#003366] rounded-lg transition-colors text-center shadow-xs"
                >
                  <span>{lang === 'ar' ? 'الموقع الرسمي' : 'Officiell webbplats'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    onFilterByAuthority(auth.id);
                    document.getElementById('updates-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors cursor-pointer"
                >
                  <Filter className="w-3 h-3 text-slate-500" />
                  <span>{lang === 'ar' ? 'عرض قرارات هذه الجهة' : 'Visa beslut från myndigheten'}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};
