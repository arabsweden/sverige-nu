/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Language, AuthorityId, UpdateCategory, UpdateStatus } from './types';
import { newsUpdates } from './data/newsData';
import { translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SearchBarAndFilters } from './components/SearchBarAndFilters';
import { NewsCard } from './components/NewsCard';
import { WhatItMeansSection } from './components/WhatItMeansSection';
import { OfficialSourcesSection } from './components/OfficialSourcesSection';
import { EmergencyRibbon } from './components/EmergencyRibbon';
import { NewsletterSignup } from './components/NewsletterSignup';
import { Footer } from './components/Footer';
import { ShieldCheck, Info, RotateCcw, Heart } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAuthority, setSelectedAuthority] = useState<AuthorityId | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<UpdateCategory>('all');
  const [selectedStatus, setSelectedStatus] = useState<UpdateStatus | 'all'>('all');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);

  // Favorite news IDs persisted in localStorage
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sweden_now_favorite_news_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const t = translations[lang];

  // Keep HTML lang & dir attributes in sync with current language state
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title =
      lang === 'ar'
        ? 'سويدنا الآن - Sverige Nu | دليل وتحديثات السويد الرسمية'
        : 'Sverige Nu - سويدنا الآن | Officiella lagar och beslut i Sverige';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'sv' : 'ar'));
  };

  const handleToggleFavorite = (id: string) => {
    setFavoriteIds((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem(
          'sweden_now_favorite_news_ids',
          JSON.stringify(updated)
        );
      } catch {
        // Ignore localStorage error
      }
      return updated;
    });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedAuthority('all');
    setSelectedCategory('all');
    setSelectedStatus('all');
    setShowOnlyFavorites(false);
  };

  // Filtered news updates computation
  const filteredNews = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return newsUpdates.filter((item) => {
      // 0. Favorites filter
      if (showOnlyFavorites && !favoriteIds.includes(item.id)) {
        return false;
      }

      // 1. Authority match
      if (selectedAuthority !== 'all' && item.authorityId !== selectedAuthority) {
        return false;
      }

      // 2. Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // 3. Status match
      if (selectedStatus !== 'all' && item.status !== selectedStatus) {
        return false;
      }

      // 4. Search query match
      if (q) {
        const titleAr = item.titleAr.toLowerCase();
        const titleSv = item.titleSv.toLowerCase();
        const summaryAr = item.summaryAr.toLowerCase();
        const summarySv = item.summarySv.toLowerCase();
        const whoAr = item.whoIsAffectedAr.toLowerCase();
        const authAr = item.authorityNameAr.toLowerCase();
        const authSv = item.authorityNameSv.toLowerCase();

        const matches =
          titleAr.includes(q) ||
          titleSv.includes(q) ||
          summaryAr.includes(q) ||
          summarySv.includes(q) ||
          whoAr.includes(q) ||
          authAr.includes(q) ||
          authSv.includes(q);

        if (!matches) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedAuthority, selectedCategory, selectedStatus, showOnlyFavorites, favoriteIds]);

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 ${lang === 'ar' ? 'font-sans' : ''}`}>
      {/* 1. Global Navigation Bar */}
      <Navbar lang={lang} onToggleLang={toggleLanguage} />

      {/* 2. Hero Section with Institutional Nordic Theme */}
      <HeroSection lang={lang} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Safety & Non-Rumor Guarantee Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-start gap-3 text-xs sm:text-sm text-[#003366]">
          <ShieldCheck className="w-5 h-5 text-[#004B87] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-bold block sm:inline mb-0.5 sm:mb-0">
              {lang === 'ar' ? 'ميثاق الموثوقية والأمان: ' : 'Vårt pålitlighetslöfte: '}
            </strong>
            {t.safeBannerNotice}
          </p>
        </div>

        {/* 3. Search Bar & Multi-level Filter Controls */}
        <div id="updates-section" className="scroll-mt-24">
          <SearchBarAndFilters
            lang={lang}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedAuthority={selectedAuthority}
            onSelectAuthority={setSelectedAuthority}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedStatus={selectedStatus}
            onSelectStatus={setSelectedStatus}
            showOnlyFavorites={showOnlyFavorites}
            onToggleShowFavorites={() => setShowOnlyFavorites((prev) => !prev)}
            favoriteCount={favoriteIds.length}
            totalResults={filteredNews.length}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* 4. Cards Grid of News & Official Decisions */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredNews.map((newsItem) => (
              <NewsCard
                key={newsItem.id}
                news={newsItem}
                lang={lang}
                isFavorite={favoriteIds.includes(newsItem.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        ) : showOnlyFavorites ? (
          /* Empty Favorites State */
          <div className="p-12 text-center bg-white border border-rose-200/80 rounded-3xl mb-16 shadow-xs">
            <div className="w-14 h-14 mx-auto rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-4">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {t.noFavoritesTitle}
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              {t.noFavoritesDesc}
            </p>
            <button
              onClick={() => setShowOnlyFavorites(false)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-[#004B87] hover:bg-[#003366] transition-colors cursor-pointer"
            >
              <span>{t.showAllNews}</span>
            </button>
          </div>
        ) : (
          /* Empty Search State */
          <div className="p-12 text-center bg-white border border-slate-200 rounded-3xl mb-16 shadow-xs">
            <div className="w-14 h-14 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
              <Info className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {t.noResultsTitle}
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
              {t.noResultsDesc}
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-[#004B87] hover:bg-[#003366] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.resetFilters}</span>
            </button>
          </div>
        )}

        {/* 5. Special Section: "ماذا يعني هذا للمقيم العربي في السويد؟" */}
        <WhatItMeansSection lang={lang} />

        {/* 6. Special Section: "دليل المصادر والجهات السويدية الرسمية" */}
        <OfficialSourcesSection
          lang={lang}
          onFilterByAuthority={(authId) => setSelectedAuthority(authId)}
        />

        {/* 7. Emergency Contacts Ribbon */}
        <EmergencyRibbon lang={lang} />

        {/* 8. Weekly Newsletter Signup on Swedish Law & Immigration */}
        <NewsletterSignup lang={lang} />

      </main>

      {/* 9. Institutional Footer */}
      <Footer lang={lang} />
    </div>
  );
}
