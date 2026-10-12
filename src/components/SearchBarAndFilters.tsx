import React from 'react';
import { AuthorityId, Language, UpdateCategory, UpdateStatus } from '../types';
import { translations } from '../data/translations';
import { authoritiesData } from '../data/authoritiesData';
import { Search, X, RotateCcw, Heart } from 'lucide-react';

interface SearchBarAndFiltersProps {
  lang: Language;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedAuthority: AuthorityId | 'all';
  onSelectAuthority: (auth: AuthorityId | 'all') => void;
  selectedCategory: UpdateCategory;
  onSelectCategory: (cat: UpdateCategory) => void;
  selectedStatus: UpdateStatus | 'all';
  onSelectStatus: (status: UpdateStatus | 'all') => void;
  showOnlyFavorites: boolean;
  onToggleShowFavorites: () => void;
  favoriteCount: number;
  totalResults: number;
  onResetFilters: () => void;
}

export const SearchBarAndFilters: React.FC<SearchBarAndFiltersProps> = ({
  lang,
  searchQuery,
  onSearchChange,
  selectedAuthority,
  onSelectAuthority,
  selectedCategory,
  onSelectCategory,
  selectedStatus,
  onSelectStatus,
  showOnlyFavorites,
  onToggleShowFavorites,
  favoriteCount,
  totalResults,
  onResetFilters
}) => {
  const t = translations[lang];

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedAuthority !== 'all' ||
    selectedCategory !== 'all' ||
    selectedStatus !== 'all' ||
    showOnlyFavorites;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-6 mb-8">
      {/* 1. Search Bar */}
      <div className="relative mb-5">
        <div className={`absolute top-1/2 -translate-y-1/2 ${lang === 'ar' ? 'right-4' : 'left-4'} pointer-events-none text-slate-400`}>
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.searchPlaceholder}
          className={`w-full h-13 ${
            lang === 'ar' ? 'pr-12 pl-10' : 'pl-12 pr-10'
          } bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#004B87] focus:ring-3 focus:ring-blue-100 transition-all`}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className={`absolute top-1/2 -translate-y-1/2 ${
              lang === 'ar' ? 'left-3' : 'right-3'
            } p-1 text-slate-400 hover:text-slate-600 rounded-md cursor-pointer`}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 2. Filter by Official Authority (8 Swedish Agencies) */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t.filterByAuthority}
          </span>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#004B87] hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.resetFilters}</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => onSelectAuthority('all')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              selectedAuthority === 'all'
                ? 'bg-[#004B87] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
            }`}
          >
            {t.allAuthorities}
          </button>

          {authoritiesData.map((auth) => (
            <button
              key={auth.id}
              onClick={() => onSelectAuthority(auth.id)}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedAuthority === auth.id
                  ? 'bg-[#004B87] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {lang === 'ar' ? auth.nameAr.split(' ')[0] + ' (' + auth.nameSv + ')' : auth.nameSv}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Filter by Field & Domain */}
      <div className="mb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          {t.filterByCategory}
        </div>
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
          {(
            [
              'all',
              'residence_citizenship',
              'taxes_civil_status',
              'social_benefits',
              'work_unemployment',
              'pensions',
              'healthcare',
              'laws_parliament',
              'daily_travel'
            ] as UpdateCategory[]
          ).map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {t.categories[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Filter by Decision Status, Favorites Toggle & Results Counter */}
      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Favorites Filter Button */}
          <button
            onClick={onToggleShowFavorites}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer border ${
              showOnlyFavorites
                ? 'bg-rose-50 text-rose-700 border-rose-300 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-rose-600'
            }`}
            title={showOnlyFavorites ? t.showAllNews : t.favoritesTab}
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                showOnlyFavorites || favoriteCount > 0
                  ? 'fill-rose-500 text-rose-500'
                  : 'text-slate-400'
              }`}
            />
            <span>{t.favoritesTab}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] tabular-nums font-bold ${
                showOnlyFavorites
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {favoriteCount}
            </span>
          </button>

          <span className="h-4 w-px bg-slate-200 hidden sm:inline" />

          {/* Status Segmented Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-slate-500">{t.filterByStatus}:</span>
            <div className="inline-flex gap-1 bg-slate-100 p-0.5 rounded-lg">
              {(
                [
                  { id: 'all', label: t.statuses.all },
                  { id: 'enacted', label: t.statuses.enacted },
                  { id: 'under_review', label: t.statuses.under_review }
                ] as const
              ).map((st) => (
                <button
                  key={st.id}
                  onClick={() => onSelectStatus(st.id)}
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    selectedStatus === st.id
                      ? 'bg-white text-slate-900 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="font-semibold text-slate-600">
          <span className="tabular-nums font-bold text-[#004B87]">{totalResults}</span> {t.resultsCount}
        </div>
      </div>
    </div>
  );
};
