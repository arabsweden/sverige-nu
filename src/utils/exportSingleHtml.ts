import { newsUpdates } from '../data/newsData';
import { authoritiesData } from '../data/authoritiesData';
import { practicalGuides } from '../data/guidesData';

/**
 * Generates and triggers the download of a self-contained, standalone single-file HTML version
 * of "سويدنا الآن" (Sweden Now) containing all styles, scripts, data, and search/filter logic.
 * This can be opened directly in any browser (file:// or double click) or uploaded to any hosting service.
 */
export function exportSingleFileHtml(lang: 'ar' | 'sv' = 'ar'): void {
  const isRtl = lang === 'ar';
  const title = lang === 'ar' ? 'سويدنا الآن - Sverige Nu | دليل وتحديثات السويد الرسمية' : 'Sverige Nu - سويدنا الآن | Officiell Myndighetsguide';

  const htmlContent = `<!DOCTYPE html>
<html lang="${lang}" dir="${isRtl ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="المنصة العربية المعتمدة لمتابعة أحدث القوانين، القرارات الرسمية، وتحديثات مصلحة الهجرة، الضرائب، والتأمينات في السويد.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --sweden-blue: #004B87;
      --sweden-blue-dark: #003366;
      --sweden-yellow: #FECC00;
      --sweden-yellow-dark: #D4A700;
      --bg-canvas: #f8fafc;
      --card-bg: #ffffff;
      --text-main: #0f172a;
      --text-muted: #475569;
      --border-color: #e2e8f0;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: ${isRtl ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif"};
      background-color: var(--bg-canvas);
      color: var(--text-main);
      line-height: 1.6;
      text-rendering: optimizeLegibility;
      direction: ${isRtl ? 'rtl' : 'ltr'};
    }
    a { color: var(--sweden-blue); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }
    
    /* Top Bar */
    .topbar {
      background: #ffffff;
      border-bottom: 2px solid #e2e8f0;
      position: sticky;
      top: 0;
      z-index: 50;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .topbar-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }
    .brand-box {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .flag-emblem {
      width: 36px;
      height: 24px;
      background: var(--sweden-blue);
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    }
    .flag-cross-v {
      position: absolute;
      left: 11px;
      top: 0;
      width: 5px;
      height: 100%;
      background: var(--sweden-yellow);
    }
    .flag-cross-h {
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      height: 5px;
      background: var(--sweden-yellow);
    }
    .brand-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--sweden-blue);
      letter-spacing: -0.02em;
    }
    .brand-sub {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-weight: 500;
    }
    .nav-links {
      display: flex;
      gap: 1.5rem;
      font-size: 0.95rem;
      font-weight: 600;
    }
    .nav-links a { color: var(--text-muted); }
    .nav-links a:hover { color: var(--sweden-blue); text-decoration: none; }
    
    /* Hero */
    .hero {
      background: linear-gradient(135deg, #003366 0%, #004B87 60%, #005ea8 100%);
      color: #ffffff;
      padding: 3.5rem 0;
      position: relative;
      overflow: hidden;
      border-bottom: 4px solid var(--sweden-yellow);
    }
    .hero h1 {
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 0.75rem;
      line-height: 1.3;
    }
    .hero p {
      font-size: 1.1rem;
      color: #e2e8f0;
      max-width: 800px;
      margin-bottom: 1.75rem;
    }
    .safe-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(254, 204, 0, 0.15);
      border: 1px solid var(--sweden-yellow);
      color: var(--sweden-yellow);
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    /* Search & Filter Box */
    .search-section {
      margin-top: -1.75rem;
      margin-bottom: 2.5rem;
      position: relative;
      z-index: 20;
    }
    .search-card {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      padding: 1.25rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
    }
    .search-input-wrapper {
      position: relative;
      margin-bottom: 1rem;
    }
    .search-input {
      width: 100%;
      padding: 0.85rem 1rem;
      border: 2px solid #cbd5e1;
      border-radius: 8px;
      font-size: 1.05rem;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s;
    }
    .search-input:focus {
      border-color: var(--sweden-blue);
      box-shadow: 0 0 0 3px rgba(0, 75, 135, 0.15);
    }
    .filter-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
    }
    .filter-btn {
      padding: 0.45rem 0.85rem;
      font-size: 0.85rem;
      font-weight: 600;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      background: #f8fafc;
      color: var(--text-muted);
      cursor: pointer;
      font-family: inherit;
      transition: all 0.15s;
    }
    .filter-btn:hover {
      background: #e2e8f0;
      color: var(--text-main);
    }
    .filter-btn.active {
      background: var(--sweden-blue);
      color: #ffffff;
      border-color: var(--sweden-blue);
    }

    /* Grid of Cards */
    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3.5rem;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
      display: flex;
      flex-direction: column;
      transition: transform 0.2s, box-shadow 0.2s;
      position: relative;
    }
    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px -3px rgba(0,0,0,0.08);
      border-color: #cbd5e1;
    }
    .card-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
      color: var(--text-muted);
    }
    .auth-badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--sweden-blue);
      background: #e0f2fe;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }
    .status-badge {
      font-size: 0.72rem;
      font-weight: 700;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      background: #f1f5f9;
      color: #334155;
    }
    .status-enacted { background: #dcfce7; color: #166534; }
    .status-under_review { background: #fef3c7; color: #92400e; }
    .card-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 0.75rem;
      line-height: 1.4;
    }
    .card-summary {
      font-size: 0.95rem;
      color: #334155;
      margin-bottom: 1.25rem;
      line-height: 1.6;
    }
    .card-box {
      background: #f8fafc;
      border-right: ${isRtl ? '3px solid var(--sweden-blue)' : 'none'};
      border-left: ${isRtl ? 'none' : '3px solid var(--sweden-blue)'};
      padding: 0.75rem 0.9rem;
      border-radius: 4px;
      margin-bottom: 0.85rem;
      font-size: 0.88rem;
    }
    .card-box-label {
      font-weight: 700;
      color: var(--sweden-blue);
      margin-bottom: 0.25rem;
      display: block;
    }
    .card-actions {
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .official-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.85rem;
      font-weight: 700;
      color: #ffffff;
      background: var(--sweden-blue);
      padding: 0.5rem 0.9rem;
      border-radius: 6px;
      text-decoration: none;
      transition: background 0.15s;
    }
    .official-btn:hover {
      background: #003366;
      text-decoration: none;
    }
    
    /* Section Headers */
    .section-header {
      margin-bottom: 1.75rem;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 0.75rem;
    }
    .section-title {
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--sweden-blue);
      margin-bottom: 0.35rem;
    }
    .section-desc {
      font-size: 1rem;
      color: var(--text-muted);
    }
    
    /* Guides Accordion */
    .guides-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 3.5rem;
    }
    .guide-item {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .guide-header {
      padding: 1.25rem;
      background: #ffffff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
    }
    .guide-header:hover { background: #f8fafc; }
    .guide-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--sweden-blue);
    }
    .guide-content {
      padding: 1.25rem;
      border-top: 1px solid #e2e8f0;
      background: #fafafa;
    }
    .points-list {
      list-style-type: square;
      padding-right: ${isRtl ? '1.5rem' : '0'};
      padding-left: ${isRtl ? '0' : '1.5rem'};
      margin: 0.75rem 0;
      font-size: 0.95rem;
    }
    .points-list li { margin-bottom: 0.4rem; }

    /* Authorities Directory */
    .authorities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 1.25rem;
      margin-bottom: 3.5rem;
    }
    .authority-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
    }
    .authority-name-sv {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--sweden-blue);
      margin-bottom: 0.2rem;
    }
    .authority-name-ar {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
    }
    .authority-desc {
      font-size: 0.88rem;
      color: #334155;
      margin-bottom: 1rem;
      flex-grow: 1;
    }

    /* Footer */
    footer {
      background: #0f172a;
      color: #94a3b8;
      padding: 3rem 0 2rem;
      font-size: 0.88rem;
      margin-top: 3rem;
      border-top: 4px solid var(--sweden-yellow);
    }
    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .emergency-box {
      background: #1e293b;
      padding: 1rem;
      border-radius: 8px;
      border-right: ${isRtl ? '3px solid var(--sweden-yellow)' : 'none'};
      border-left: ${isRtl ? 'none' : '3px solid var(--sweden-yellow)'};
    }
    .emergency-title {
      color: var(--sweden-yellow);
      font-weight: 700;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }
    .emergency-nums { list-style: none; line-height: 1.8; color: #f8fafc; font-weight: 600; }
    
    @media (max-width: 768px) {
      .hero h1 { font-size: 1.6rem; }
      .news-grid { grid-template-columns: 1fr; }
      .footer-content { grid-template-columns: 1fr; }
      .nav-links { display: none; }
    }
  </style>
</head>
<body>

  <!-- Top Bar -->
  <header class="topbar">
    <div class="container topbar-inner">
      <div class="brand-box">
        <div class="flag-emblem" aria-hidden="true">
          <div class="flag-cross-v"></div>
          <div class="flag-cross-h"></div>
        </div>
        <div>
          <div class="brand-title">${lang === 'ar' ? 'سويدنا الآن' : 'Sverige Nu'}</div>
          <div class="brand-sub">${lang === 'ar' ? 'المركز الإخباري والقانوني الموثق' : 'Officiell informationsportal'}</div>
        </div>
      </div>
      <nav class="nav-links">
        <a href="#updates">${lang === 'ar' ? 'أحدث القرارات' : 'Senaste beslut'}</a>
        <a href="#guides">${lang === 'ar' ? 'ماذا يعني هذا للمقيم؟' : 'Vad betyder det?'}</a>
        <a href="#authorities">${lang === 'ar' ? 'الجهات الرسمية' : 'Myndigheter'}</a>
        <a href="#emergency">${lang === 'ar' ? 'أرقام الطوارئ' : 'Viktiga nummer'}</a>
      </nav>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <button onclick="shareSite()" style="padding: 0.4rem 0.8rem; font-weight: bold; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; color: #004B87; cursor: pointer;">
          🔗 ${lang === 'ar' ? 'مشاركة' : 'Dela'}
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="safe-badge">
        <span style="font-size:1.1rem;">🏛️</span>
        <span>${lang === 'ar' ? 'أخبار وقرارات حكومية مؤكدة 100%' : '100% Verifierade Myndighetsuppgifter'}</span>
      </div>
      <h1>${lang === 'ar' ? 'سويدنا الآن | كل جديد في السويد من قوانين وقرارات رسمية' : 'Sverige Nu | Lagar, officiella beslut och uppdateringar'}</h1>
      <p>
        ${lang === 'ar'
          ? 'مركز عربي متكامل لمتابعة قرارات مصلحة الهجرة (Migrationsverket)، الضرائب (Skatteverket)، التأمينات الاجتماعية (Försäkringskassan)، مكتب العمل، وهيئة التقاعد، مع روابط المصادر الرسمية وتوضيحات عملية.'
          : 'En komplett svensk-arabisk informationsportal med uppdateringar från Migrationsverket, Skatteverket, Försäkringskassan, Arbetsförmedlingen, 1177 och Riksdagen.'}
      </p>
    </div>
  </section>

  <!-- Search & Filter Area -->
  <main class="container">
    <div class="search-section">
      <div class="search-card">
        <div class="search-input-wrapper">
          <input 
            type="text" 
            id="searchInput" 
            class="search-input" 
            placeholder="${lang === 'ar' ? 'ابحث عن أي قرار (مثال: راتب العمل، الجنسية، إعانة السكن، الضرائب، العنوان)...' : 'Sök beslut (t.ex. arbetstillstånd, lön, medborgarskap, bostadsbidrag)...'}"
            oninput="filterArticles()"
          >
        </div>
        <div class="filter-row" id="filterContainer">
          <button class="filter-btn active" onclick="setAuthorityFilter('all')">${lang === 'ar' ? 'جميع الجهات (8)' : 'Alla myndigheter'}</button>
          <button class="filter-btn" onclick="setAuthorityFilter('migrationsverket')">Migrationsverket (الهجرة)</button>
          <button class="filter-btn" onclick="setAuthorityFilter('skatteverket')">Skatteverket (الضرائب)</button>
          <button class="filter-btn" onclick="setAuthorityFilter('forsakringskassan')">Försäkringskassan (التأمينات)</button>
          <button class="filter-btn" onclick="setAuthorityFilter('arbetsformedlingen')">Arbetsförmedlingen (العمل)</button>
          <button class="filter-btn" onclick="setAuthorityFilter('1177')">1177 (الرعاية الصحية)</button>
          <button class="filter-btn" onclick="setAuthorityFilter('regeringen_riksdagen')">Riksdagen (القوانين)</button>
        </div>
      </div>
    </div>

    <!-- Official Updates Section -->
    <div id="updates" class="section-header">
      <h2 class="section-title">${lang === 'ar' ? 'أحدث القرارات والتحديثات الرسمية' : 'Senaste officiella beslut och uppdateringar'}</h2>
      <p class="section-desc">${lang === 'ar' ? 'جميع البطاقات تتضمن ملخصاً بسيطاً، من يتأثر، الإجراء المطلوب، ورابط المصدر السويدي المعتمد' : 'Varje kort innehåller sammanfattning, berörd målgrupp, åtgärder och officiell källänk'}</p>
    </div>

    <div class="news-grid" id="newsGrid">
      ${newsUpdates.map(news => `
        <article class="card" data-authority="${news.authorityId}" data-title="${(news.titleAr + ' ' + news.titleSv).toLowerCase()}" data-summary="${(news.summaryAr + ' ' + news.whoIsAffectedAr).toLowerCase()}">
          <div class="card-meta">
            <span class="auth-badge">${news.authorityNameSv}</span>
            <span class="status-badge ${news.status === 'enacted' ? 'status-enacted' : 'status-under_review'}">
              ${lang === 'ar' ? news.statusLabelAr : news.statusLabelSv}
            </span>
            <span>${news.date}</span>
          </div>

          <h3 class="card-title">${lang === 'ar' ? news.titleAr : news.titleSv}</h3>
          <p class="card-summary">${lang === 'ar' ? news.summaryAr : news.summarySv}</p>

          <div class="card-box">
            <span class="card-box-label">${lang === 'ar' ? '👥 من يتأثر بهذا القرار؟' : '👥 Vem berörs?'}</span>
            <p>${lang === 'ar' ? news.whoIsAffectedAr : news.whoIsAffectedSv}</p>
          </div>

          <div class="card-box" style="border-color: #f59e0b; background: #fffbeb;">
            <span class="card-box-label" style="color: #b45309;">${lang === 'ar' ? '⚡ ماذا عليك أن تفعل الآن؟' : '⚡ Vad bör du göra nu?'}</span>
            <p>${lang === 'ar' ? news.whatToDoAr : news.whatToDoSv}</p>
          </div>

          <div class="card-actions">
            <a href="${news.officialSourceUrl}" target="_blank" rel="noopener noreferrer" class="official-btn">
              <span>${lang === 'ar' ? 'المصدر الرسمي ↗' : 'Officiell källa ↗'}</span>
            </a>
            <span style="font-size: 0.75rem; color: #64748b;">${lang === 'ar' ? 'بحسب المصدر الرسمي' : 'Enligt officiell källa'}</span>
          </div>
        </article>
      `).join('')}
    </div>

    <!-- What this means section -->
    <div id="guides" class="section-header">
      <h2 class="section-title">${lang === 'ar' ? 'ماذا يعني هذا للمقيم العربي في السويد؟' : 'Vad betyder detta för dig som bor i Sverige?'}</h2>
      <p class="section-desc">${lang === 'ar' ? 'شروحات قانونية وإجرائية موثوقة لأكثر الأسئلة تكراراً حول الإقامات والضرائب والمعيشة' : 'Praktiska vägledningar för vanliga frågor kring uppehållstillstånd, skatt och vardagsliv'}</p>
    </div>

    <div class="guides-list">
      ${practicalGuides.map((guide, idx) => `
        <div class="guide-item">
          <div class="guide-header" onclick="toggleGuide('guide-body-${idx}')">
            <h3 class="guide-title">${idx + 1}. ${lang === 'ar' ? guide.titleAr : guide.titleSv}</h3>
            <span style="font-size: 1.25rem; font-weight: bold; color: var(--sweden-blue);">▾</span>
          </div>
          <div class="guide-content" id="guide-body-${idx}">
            <p style="font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; font-weight: 600;">
              ${lang === 'ar' ? guide.summaryAr : guide.summarySv}
            </p>
            <ul class="points-list">
              ${(lang === 'ar' ? guide.keyPointsAr : guide.keyPointsSv).map(point => `<li>${point}</li>`).join('')}
            </ul>
            <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 6px; margin: 0.75rem 0;">
              <strong style="color: #991b1b;">⚠️ ${lang === 'ar' ? 'شائعة خاطئة وتصحيحها:' : 'Missuppfattning:'}</strong>
              <p style="color: #7f1d1d; font-size: 0.9rem; margin-top: 0.25rem;">
                ${lang === 'ar' ? guide.commonMisconceptionAr : guide.commonMisconceptionSv}
              </p>
            </div>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem;">
              <strong style="color: #166534;">✅ ${lang === 'ar' ? 'النصيحة القانونية المعتمدة:' : 'Officiellt råd:'}</strong>
              <p style="color: #14532d; font-size: 0.9rem; margin-top: 0.25rem;">
                ${lang === 'ar' ? guide.officialAdviceAr : guide.officialAdviceSv}
              </p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Official Sources Directory -->
    <div id="authorities" class="section-header">
      <h2 class="section-title">${lang === 'ar' ? 'دليل المصادر والجهات السويدية الرسمية' : 'Officiella svenska myndighetskällor'}</h2>
      <p class="section-desc">${lang === 'ar' ? 'روابط معتمدة وأرقام هواتف لجميع الدوائر الحكومية السويدية الرئيسية' : 'Officiella webbplatser och telefonnummer till centrala myndigheter'}</p>
    </div>

    <div class="authorities-grid">
      ${authoritiesData.map(auth => `
        <div class="authority-card">
          <div class="authority-name-sv">${auth.nameSv}</div>
          <div class="authority-name-ar">${auth.nameAr}</div>
          <p class="authority-desc">${lang === 'ar' ? auth.descriptionAr : auth.descriptionSv}</p>
          <div style="margin-bottom: 0.75rem; font-size: 0.85rem; color: #475569;">
            <strong>${lang === 'ar' ? 'الهاتف:' : 'Telefon:'}</strong> ${auth.phone}
          </div>
          <a href="${auth.officialUrl}" target="_blank" rel="noopener noreferrer" class="official-btn" style="text-align: center; justify-content: center;">
            ${lang === 'ar' ? 'زيارة الموقع الرسمي ↗' : 'Besök webbplats ↗'}
          </a>
        </div>
      `).join('')}
    </div>

    <!-- Newsletter Signup Section -->
    <div id="newsletter-section" style="margin: 3.5rem 0; background: linear-gradient(135deg, #003366 0%, #004B87 60%, #005ea8 100%); color: #ffffff; padding: 2.5rem; border-radius: 1.5rem; border: 2px solid #FECC00; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);">
      <div style="max-width: 750px; margin: 0 auto; text-align: center;">
        <span style="display: inline-block; padding: 0.25rem 0.75rem; background: rgba(254, 204, 0, 0.2); border: 1px solid #FECC00; color: #FECC00; font-size: 0.8rem; font-weight: 700; border-radius: 9999px; margin-bottom: 1rem;">
          🔔 ${lang === 'ar' ? 'نشرة سويدنا الآن الأسبوعية' : 'Sverige Nu – Veckobrev'}
        </span>
        <h2 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 0.75rem;">
          ${lang === 'ar' ? 'اشترك في النشرة الأسبوعية لقوانين وقرارات الهجرة في السويد' : 'Få veckovisa uppdateringar om svensk lag och migration'}
        </h2>
        <p style="font-size: 0.95rem; color: #e2e8f0; margin-bottom: 1.5rem; line-height: 1.6;">
          ${lang === 'ar'
            ? 'ملخص أسبوعي موثق يصل إلى بريدك الإلكتروني كل صباح جمعة، يضم أهم قرارات مصلحة الهجرة (Migrationsverket)، وتعديلات الضرائب، ومشاريع القوانين البرلمانية مع شروحات عملية بدون شائعات.'
            : 'En verifierad veckosammanfattning varje fredagsmorgon med de senaste besluten från Migrationsverket, Skatteverket och Riksdagen direkt till din inkorg.'}
        </p>
        <form onsubmit="event.preventDefault(); alert('${lang === 'ar' ? 'شكراً لاشتراكك في النشرة الأسبوعية لـ سويدنا الآن!' : 'Tack för att du prenumererar på Sverige Nu veckobrev!'}');" style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; max-width: 550px; margin: 0 auto;">
          <input type="email" required placeholder="${lang === 'ar' ? 'أدخل بريدك الإلكتروني...' : 'Ange din e-postadress...'}" style="flex: 1; min-width: 250px; padding: 0.85rem 1rem; border-radius: 0.75rem; border: none; font-size: 1rem; outline: none; font-family: inherit;">
          <button type="submit" style="background: #FECC00; color: #0f172a; font-weight: 800; font-size: 1rem; padding: 0.85rem 1.5rem; border: none; border-radius: 0.75rem; cursor: pointer; font-family: inherit;">
            ${lang === 'ar' ? 'اشترك مجاناً' : 'Prenumerera gratis'}
          </button>
        </form>
        <div style="font-size: 0.78rem; color: #cbd5e1; margin-top: 1rem;">
          🔒 ${lang === 'ar' ? 'نحترم خصوصيتك بالكامل. يمكنك إلغاء الاشتراك بنقرة واحدة في أي وقت.' : 'Vi respekterar din integritet. Avsluta prenumerationen när som helst.'}
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer id="emergency">
    <div class="container">
      <div class="footer-content">
        <div>
          <h4 style="color: #ffffff; font-size: 1.15rem; font-weight: 700; margin-bottom: 0.75rem;">سويدنا الآن - Sverige Nu</h4>
          <p style="margin-bottom: 1rem; line-height: 1.6;">
            ${lang === 'ar'
              ? 'مركز عربي لمتابعة كل جديد في السويد من قوانين، أخبار رسمية، قرارات جديدة، وتحديثات مهمة للمقيمين العرب. نلتزم بالحياد والصياغة الآمنة المعتمدة حصراً على المصادر الرسمية.'
              : 'Officiell svensk-arabisk informationsportal. Vi publicerar endast verifierad samhällsinformation från svenska myndigheter.'}
          </p>
          <p style="color: #64748b; font-size: 0.8rem;">
            تنويه: الموقع ليس بديلاً عن الاستشارة القانونية الخاصة من محامٍ مرخص أو مراجعة مصلحة الهجرة والجهات المعنية مباشرة.
          </p>
        </div>
        <div class="emergency-box">
          <div class="emergency-title">🚨 ${lang === 'ar' ? 'أرقام الطوارئ السويدية' : 'Viktiga nummer'}</div>
          <ul class="emergency-nums">
            <li><strong>112</strong>: ${lang === 'ar' ? 'طوارئ الشرطة والإسعاف والحريق' : 'Akut nödsituation'}</li>
            <li><strong>1177</strong>: ${lang === 'ar' ? 'الاستشارات الطبية والرعاية الصحية' : 'Sjukvårdsrådgivning dygnet runt'}</li>
            <li><strong>114 14</strong>: ${lang === 'ar' ? 'الشرطة للحالات غير الطارئة' : 'Polisen icke-akut'}</li>
            <li><strong>113 13</strong>: ${lang === 'ar' ? 'معلومات الحوادث والأزمات الكبرى' : 'Information vid olyckor/kriser'}</li>
          </ul>
        </div>
      </div>
      <div style="text-align: center; border-top: 1px solid #1e293b; padding-top: 1.5rem; font-size: 0.8rem;">
        جميع الحقوق محفوظة © سويدنا الآن - Sverige Nu ${new Date().getFullYear()} · تم التحديث بحسب المصادر السويدية الرسمية
      </div>
    </div>
  </footer>

  <script>
    let currentAuthority = 'all';

    function setAuthorityFilter(authId) {
      currentAuthority = authId;
      const buttons = document.querySelectorAll('#filterContainer .filter-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      filterArticles();
    }

    function filterArticles() {
      const query = (document.getElementById('searchInput').value || '').toLowerCase().trim();
      const cards = document.querySelectorAll('#newsGrid .card');
      let visibleCount = 0;

      cards.forEach(card => {
        const auth = card.getAttribute('data-authority');
        const title = card.getAttribute('data-title');
        const summary = card.getAttribute('data-summary');

        const matchesAuth = (currentAuthority === 'all' || auth === currentAuthority);
        const matchesQuery = (!query || title.includes(query) || summary.includes(query));

        if (matchesAuth && matchesQuery) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
    }

    function toggleGuide(id) {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
      }
    }

    async function shareSite() {
      const shareData = {
        title: document.title,
        text: '${lang === 'ar' ? 'سويدنا الآن - Sverige Nu | دليل وتحديثات السويد الرسمية' : 'Sverige Nu - Officiella lagar och beslut i Sverige'}',
        url: window.location.href
      };
      if (navigator.share) {
        try {
          await navigator.share(shareData);
          return;
        } catch (e) {}
      }
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('${lang === 'ar' ? 'تم نسخ رابط الموقع بنجاح!' : 'Länk kopierad till urklipp!'}');
      } catch (e) {
        prompt('${lang === 'ar' ? 'انسخ رابط الموقع:' : 'Kopiera länk:'}', window.location.href);
      }
    }
  </script>
</body>
</html>`;

  // Create a Blob and trigger a direct download in the user's browser
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `sweden-now-singlefile-${lang}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
