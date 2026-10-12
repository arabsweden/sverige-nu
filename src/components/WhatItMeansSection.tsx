import React, { useState } from 'react';
import { Language } from '../types';
import { practicalGuides } from '../data/guidesData';
import { translations } from '../data/translations';
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle, ExternalLink, HelpCircle, BookOpen } from 'lucide-react';

interface WhatItMeansSectionProps {
  lang: Language;
}

export const WhatItMeansSection: React.FC<WhatItMeansSectionProps> = ({ lang }) => {
  const t = translations[lang];
  // Start with the first guide opened by default
  const [openGuideId, setOpenGuideId] = useState<string | null>(practicalGuides[0].id);

  const toggleGuide = (id: string) => {
    setOpenGuideId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="guides-section" className="my-16 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004B87] bg-blue-50 px-3 py-1 rounded-md mb-2">
          <BookOpen className="w-3.5 h-3.5 text-[#004B87]" />
          <span>{lang === 'ar' ? 'دليل الفهم والإجراءات المباشرة' : 'Praktisk vägledning'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
          {t.whatItMeansHeading}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          {t.whatItMeansSubheading}
        </p>
      </div>

      {/* Accordion Cards */}
      <div className="space-y-4">
        {practicalGuides.map((guide, idx) => {
          const isOpen = openGuideId === guide.id;
          const title = lang === 'ar' ? guide.titleAr : guide.titleSv;
          const topic = lang === 'ar' ? guide.topicAr : guide.topicSv;
          const summary = lang === 'ar' ? guide.summaryAr : guide.summarySv;
          const keyPoints = lang === 'ar' ? guide.keyPointsAr : guide.keyPointsSv;
          const misconception = lang === 'ar' ? guide.commonMisconceptionAr : guide.commonMisconceptionSv;
          const officialAdvice = lang === 'ar' ? guide.officialAdviceAr : guide.officialAdviceSv;

          return (
            <div
              key={guide.id}
              className={`border rounded-2xl transition-all overflow-hidden ${
                isOpen
                  ? 'border-[#004B87] bg-white shadow-md'
                  : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
              }`}
            >
              {/* Header Button */}
              <button
                onClick={() => toggleGuide(guide.id)}
                className="w-full text-start p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3.5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#004B87] font-bold text-sm shrink-0 mt-0.5 sm:mt-0">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block mb-0.5">
                      {topic}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {title}
                    </h3>
                  </div>
                </div>

                <div className="text-slate-400 p-1 rounded-full bg-slate-50 shrink-0">
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#004B87]" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {/* Collapsible Content */}
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-5">
                  
                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    {summary}
                  </p>

                  {/* Key Points */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      {t.keyPoints}
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#004B87] mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Misconception Busted */}
                  <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 font-bold text-red-900 mb-1">
                      <AlertTriangle className="w-4 h-4 text-red-700 shrink-0" />
                      <span>{t.commonMisconception}</span>
                    </div>
                    <p className="text-red-950 leading-relaxed font-medium">
                      {misconception}
                    </p>
                  </div>

                  {/* Official Advice & Direct Action */}
                  <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-1">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{t.officialAdvice}</span>
                    </div>
                    <p className="text-emerald-950 leading-relaxed font-semibold">
                      {officialAdvice}
                    </p>
                  </div>

                  {/* Direct Link to the Authority */}
                  <div className="pt-2 flex justify-end">
                    <a
                      href={guide.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#004B87] hover:underline"
                    >
                      <span>{lang === 'ar' ? 'التحقق من تفاصيل هذا الإجراء على الموقع الرسمي' : 'Kontrollera på officiell webbplats'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
