import React, { useState } from 'react';
import { NewsUpdate, Language } from '../types';
import { translations } from '../data/translations';
import { ExternalLink, Users, AlertCircle, Share2, Check, ShieldCheck, Calendar, Building, Heart } from 'lucide-react';

interface NewsCardProps {
  news: NewsUpdate;
  lang: Language;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news, lang, isFavorite, onToggleFavorite }) => {
  const t = translations[lang];
  const [copied, setCopied] = useState(false);

  const title = lang === 'ar' ? news.titleAr : news.titleSv;
  const summary = lang === 'ar' ? news.summaryAr : news.summarySv;
  const whoIsAffected = lang === 'ar' ? news.whoIsAffectedAr : news.whoIsAffectedSv;
  const whatToDo = lang === 'ar' ? news.whatToDoAr : news.whatToDoSv;
  const authorityName = lang === 'ar' ? news.authorityNameAr : news.authorityNameSv;
  const categoryLabel = lang === 'ar' ? news.categoryLabelAr : news.categoryLabelSv;
  const statusLabel = lang === 'ar' ? news.statusLabelAr : news.statusLabelSv;
  const safeWording = lang === 'ar' ? news.safeWordingNoteAr : news.safeWordingNoteSv;

  const handleShare = () => {
    const textToCopy = `${title}\n${summary}\nالمصدر الرسمي: ${news.officialSourceUrl}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getStatusColorClass = () => {
    switch (news.status) {
      case 'enacted':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'under_review':
        return 'text-amber-800 bg-amber-50 border-amber-200';
      case 'proposal':
        return 'text-blue-800 bg-blue-50 border-blue-200';
      default:
        return 'text-slate-700 bg-slate-100 border-slate-200';
    }
  };

  return (
    <article className="bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col overflow-hidden group">
      
      {/* Top Header Strip */}
      <div className="px-5 pt-5 pb-3 border-b border-slate-100">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs text-slate-500">
          
          {/* Authority + Category as clean unboxed metadata with separators (zero pill) */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-[#004B87] inline-flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-[#004B87]" />
              {authorityName}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-600">{categoryLabel}</span>
          </div>

          {/* Date and Favorite Icon Button */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-slate-500 tabular-nums font-medium">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <time dateTime={news.date}>{news.date}</time>
            </div>

            <button
              onClick={() => onToggleFavorite(news.id)}
              className={`p-1.5 rounded-full transition-all cursor-pointer ${
                isFavorite
                  ? 'text-rose-600 bg-rose-50 hover:bg-rose-100 scale-110'
                  : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100'
              }`}
              title={isFavorite ? t.removeFromFavorites : t.addToFavorites}
              aria-label={isFavorite ? t.removeFromFavorites : t.addToFavorites}
            >
              <Heart
                className={`w-4 h-4 transition-transform active:scale-125 ${
                  isFavorite ? 'fill-rose-500 text-rose-500' : 'stroke-current'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-[#004B87] transition-colors leading-snug text-balance">
          {title}
        </h3>

        {/* Status Tag */}
        <div className="mt-2.5">
          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold border ${getStatusColorClass()}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {statusLabel}
          </span>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-5 flex-1 flex flex-col space-y-4">
        
        {/* Simple Summary */}
        <div className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
          {summary}
        </div>

        {/* Box 1: Who is affected? (من يتأثر بهذا القرار؟) */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 font-bold text-[#004B87] mb-1.5">
            <Users className="w-4 h-4 text-[#004B87] shrink-0" />
            <span>{t.whoIsAffected}</span>
          </div>
          <p className="text-slate-700 leading-relaxed">{whoIsAffected}</p>
        </div>

        {/* Box 2: What should the reader do now? (ماذا عليك أن تفعل الآن؟) */}
        <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>{t.whatToDoNow}</span>
          </div>
          <p className="text-amber-950 leading-relaxed font-medium">{whatToDo}</p>
        </div>

        {/* Safe Wording Verification Notice */}
        {safeWording && (
          <div className="text-[12px] text-slate-500 flex items-center gap-1.5 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="italic">{safeWording}</span>
          </div>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
        {/* Official Source Link (Direct & Verified) */}
        <a
          href={news.officialSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-[#004B87] hover:bg-[#003366] rounded-lg transition-colors shadow-xs"
        >
          <span>{t.officialSourceBtn}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {/* Actions: Favorite & Share */}
        <div className="flex items-center gap-1.5">
          {/* Favorite Button */}
          <button
            onClick={() => onToggleFavorite(news.id)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer border ${
              isFavorite
                ? 'text-rose-700 bg-rose-50 border-rose-200 hover:bg-rose-100'
                : 'text-slate-600 bg-white border-slate-200 hover:text-rose-600 hover:border-slate-300'
            }`}
            title={isFavorite ? t.removeFromFavorites : t.addToFavorites}
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-500'
              }`}
            />
            <span>
              {isFavorite
                ? (lang === 'ar' ? 'محفوظ' : 'Sparad')
                : (lang === 'ar' ? 'حفظ' : 'Spara')}
            </span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 rounded-md transition-colors cursor-pointer"
            title={t.share}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">{t.shareCopied}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>{t.share}</span>
              </>
            )}
          </button>
        </div>
      </div>

    </article>
  );
};
