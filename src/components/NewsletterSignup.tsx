import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, BellRing, Sparkles } from 'lucide-react';

interface NewsletterSignupProps {
  lang: Language;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ lang }) => {
  const [email, setEmail] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['immigration', 'laws']);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null);

  // Check if previously subscribed from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sweden_now_newsletter_email');
      if (saved) {
        setSubscribedEmail(saved);
      }
    } catch {
      // Ignore localStorage access failures
    }
  }, []);

  const toggleTopic = (topicKey: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicKey) ? prev.filter((t) => t !== topicKey) : [...prev, topicKey]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed) {
      setErrorMessage(
        lang === 'ar' ? 'يرجى إدخال عنوان بريدك الإلكتروني.' : 'Vänligen ange din e-postadress.'
      );
      return;
    }

    if (!emailRegex.test(trimmed)) {
      setErrorMessage(
        lang === 'ar'
          ? 'صيغة البريد الإلكتروني غير صحيحة، يرجى التحقق وإعادة المحاولة.'
          : 'Ogiltigt e-postformat. Kontrollera och försök igen.'
      );
      return;
    }

    setStatus('loading');

    // Simulate reliable subscription submission
    setTimeout(() => {
      try {
        localStorage.setItem('sweden_now_newsletter_email', trimmed);
        localStorage.setItem(
          'sweden_now_newsletter_topics',
          JSON.stringify(selectedTopics)
        );
      } catch {
        // Fallback for storage errors
      }

      setSubscribedEmail(trimmed);
      setStatus('success');
      setEmail('');
    }, 600);
  };

  const handleUnsubscribe = () => {
    try {
      localStorage.removeItem('sweden_now_newsletter_email');
      localStorage.removeItem('sweden_now_newsletter_topics');
    } catch {
      // Ignore
    }
    setSubscribedEmail(null);
    setStatus('idle');
  };

  const isRtl = lang === 'ar';

  return (
    <section className="my-14 scroll-mt-24" id="newsletter-section">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#003366] via-[#004B87] to-[#005293] text-white p-6 sm:p-10 lg:p-12 shadow-lg border-2 border-[#FECC00]">
        
        {/* Subtle background decorative shapes */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FECC00 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          
          {/* Header pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECC00]/20 border border-[#FECC00]/50 text-[#FECC00] text-xs font-bold mb-4">
            <BellRing className="w-3.5 h-3.5 text-[#FECC00]" />
            <span>
              {lang === 'ar' ? 'نشرة "سويدنا الآن" الأسبوعية الموثقة' : 'Sverige Nu – Officiellt veckobrev'}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
            {lang === 'ar'
              ? 'تابع كل جديد في قوانين وقرارات السويد أولاً بأول'
              : 'Få veckovisa uppdateringar om svensk lag och migration'}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6">
            {lang === 'ar'
              ? 'ملخص أسبوعي موثق يصل إلى بريدك الإلكتروني كل صباح جمعة، يتضمن أحدث قرارات مصلحة الهجرة (Migrationsverket)، وتعديلات الضرائب، ومشاريع القوانين البرلمانية الجديدة مع شروحات عملية بدون شائعات.'
              : 'En verifierad veckosammanfattning varje fredagsmorgon med de senaste besluten från Migrationsverket, Skatteverket och Riksdagen direkt till din inkorg.'}
          </p>

          {/* If already subscribed state */}
          {subscribedEmail ? (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <div className="font-bold text-base text-white">
                    {lang === 'ar' ? 'أنت مشترك بالفعل في النشرة الأسبوعية!' : 'Du prenumererar redan på veckobrevet!'}
                  </div>
                  <div className="text-xs text-blue-200">
                    {lang === 'ar'
                      ? `يتم إرسال الملخص إلى: ${subscribedEmail}`
                      : `Uppdateringar skickas till: ${subscribedEmail}`}
                  </div>
                </div>
              </div>

              <button
                onClick={handleUnsubscribe}
                className="text-xs font-semibold text-blue-200 hover:text-white underline underline-offset-4 cursor-pointer whitespace-nowrap"
              >
                {lang === 'ar' ? 'تغيير البريد أو إلغاء الاشتراك' : 'Byt e-post eller avsluta'}
              </button>
            </div>
          ) : (
            /* Subscription Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Topic Selectors */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-wider block">
                  {lang === 'ar' ? 'اختر مجالات الاهتمام المفضلة لديك:' : 'Välj dina intresseområden:'}
                </span>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'immigration', labelAr: 'الهجرة والإقامات (Migrationsverket)', labelSv: 'Migration & Uppehållstillstånd' },
                    { id: 'taxes', labelAr: 'الضرائب والعناوين (Skatteverket)', labelSv: 'Skatter & Folkbokföring' },
                    { id: 'benefits', labelAr: 'التأمينات والأسرة (Försäkringskassan)', labelSv: 'Socialförsäkring & Bidrag' },
                    { id: 'laws', labelAr: 'القوانين والبرلمان (Riksdagen)', labelSv: 'Lagar & Riksdagsbeslut' }
                  ].map((topic) => {
                    const isSelected = selectedTopics.includes(topic.id);
                    return (
                      <button
                        type="button"
                        key={topic.id}
                        onClick={() => toggleTopic(topic.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#FECC00] text-slate-950 border-[#FECC00] shadow-xs'
                            : 'bg-white/10 text-white border-white/20 hover:bg-white/15'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {lang === 'ar' ? topic.labelAr : topic.labelSv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Email Input & Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      isRtl ? 'right-3.5' : 'left-3.5'
                    } text-slate-400 pointer-events-none`}
                  >
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder={
                      lang === 'ar'
                        ? 'أدخل بريدك الإلكتروني (مثال: name@example.com)'
                        : 'Ange din e-postadress (t.ex. namn@exempel.se)'
                    }
                    className={`w-full h-12.5 ${
                      isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'
                    } bg-white text-slate-900 rounded-xl text-sm font-medium border border-transparent focus:outline-none focus:ring-3 focus:ring-[#FECC00] shadow-sm placeholder:text-slate-400`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="h-12.5 px-6 rounded-xl bg-[#FECC00] hover:bg-[#e6b800] text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shrink-0 disabled:opacity-75"
                >
                  {status === 'loading' ? (
                    <span>{lang === 'ar' ? 'جاري الاشتراك...' : 'Registrerar...'}</span>
                  ) : (
                    <>
                      <span>{lang === 'ar' ? 'اشترك مجاناً' : 'Prenumerera gratis'}</span>
                      {isRtl ? (
                        <ArrowLeft className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </>
                  )}
                </button>
              </div>

              {/* Error Feedback */}
              {errorMessage && (
                <div className="text-xs font-semibold text-amber-200 bg-amber-950/60 border border-amber-500/40 p-2.5 rounded-lg">
                  {errorMessage}
                </div>
              )}

              {/* Privacy and Anti-spam Guarantee */}
              <div className="flex items-center gap-2 text-xs text-blue-200/80 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#FECC00] shrink-0" />
                <span>
                  {lang === 'ar'
                    ? 'نحترم خصوصيتك تماماً. لا إعلانات ولا رسائل غير مرغوب فيها، ويمكنك إلغاء الاشتراك بنقرة واحدة في أي وقت.'
                    : 'Vi värnar om din integritet. Inget spam, och du kan avregistrera dig med ett klick när som helst.'}
                </span>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
