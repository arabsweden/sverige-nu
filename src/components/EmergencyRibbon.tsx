import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PhoneCall, HeartPulse, Shield, AlertOctagon } from 'lucide-react';

interface EmergencyRibbonProps {
  lang: Language;
}

export const EmergencyRibbon: React.FC<EmergencyRibbonProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="emergency-section" className="my-14 scroll-mt-24">
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-[#FECC00] shadow-md relative overflow-hidden">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FECC00] mb-1">
              <AlertOctagon className="w-4 h-4 text-[#FECC00]" />
              <span>{lang === 'ar' ? 'خدمات الدعم السريع' : 'Samhällsservice & Trygghet'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {t.emergencyTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            {lang === 'ar'
              ? 'احفظ هذه الأرقام في هاتفك. عند عدم التحدث باللغة السويدية أو الإنجليزية بطلاقة، اطلب من الموظف: "Arabic Tolk" فوراً عند بدء المكالمة.'
              : 'Vid kontakt med SOS Alarm 112 eller sjukvårdsrådgivning 1177 har du rätt att begära tolk.'}
          </p>
        </div>

        {/* 4 Emergency and Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 112 */}
          <div className="bg-red-950/60 border border-red-500/40 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-black text-white font-mono">112</span>
              <span className="p-2 rounded-lg bg-red-600/30 text-red-300">
                <PhoneCall className="w-5 h-5" />
              </span>
            </div>
            <div className="font-bold text-sm text-red-200 mb-1">
              {lang === 'ar' ? 'طوارئ الحياة الفورية' : 'Akut nödsituation'}
            </div>
            <p className="text-xs text-red-100/80 leading-relaxed">
              {lang === 'ar' ? 'للخطر المباشر على الحياة، الحوادث الجسيمة، الحريق، والجرائم الجارية.' : 'Livsfara, allvarliga olyckor, brand och pågående brott.'}
            </p>
          </div>

          {/* 1177 */}
          <div className="bg-blue-950/60 border border-blue-400/40 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-black text-white font-mono">1177</span>
              <span className="p-2 rounded-lg bg-blue-600/30 text-blue-300">
                <HeartPulse className="w-5 h-5" />
              </span>
            </div>
            <div className="font-bold text-sm text-blue-200 mb-1">
              {lang === 'ar' ? 'الاستشارات الطبية 1177' : 'Sjukvårdsrådgivning'}
            </div>
            <p className="text-xs text-blue-100/80 leading-relaxed">
              {lang === 'ar' ? 'تقييم الأعراض الصحية، معرفة المستوصف المناوب، واستشارات الرعاية على مدار 24 ساعة.' : 'Rådgivning dygnet runt om vård och bedömning av sjukdomssymtom.'}
            </p>
          </div>

          {/* 114 14 */}
          <div className="bg-slate-800/80 border border-slate-600 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-black text-white font-mono">114 14</span>
              <span className="p-2 rounded-lg bg-slate-700 text-slate-300">
                <Shield className="w-5 h-5" />
              </span>
            </div>
            <div className="font-bold text-sm text-slate-200 mb-1">
              {lang === 'ar' ? 'الشرطة للحالات غير الطارئة' : 'Polisen icke-akut'}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar' ? 'للإبلاغ عن السرقات، فقدان الوثائق، الاستفسارات، وتحديد مواعيد الجوازات.' : 'Anmäl stölder, förlorade ID-handlingar och icke-akuta ärenden.'}
            </p>
          </div>

          {/* 113 13 */}
          <div className="bg-amber-950/50 border border-amber-500/40 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-black text-white font-mono">113 13</span>
              <span className="p-2 rounded-lg bg-amber-600/30 text-amber-300">
                <AlertOctagon className="w-5 h-5" />
              </span>
            </div>
            <div className="font-bold text-sm text-amber-200 mb-1">
              {lang === 'ar' ? 'معلومات الأزمات الكبرى' : 'Krisinformation'}
            </div>
            <p className="text-xs text-amber-100/80 leading-relaxed">
              {lang === 'ar' ? 'للحصول على معلومات موثقة عند حدوث عواصف ثلجية، انقطاع كهرباء واسع، أو كوارث طبيعية.' : 'Officiell krisinformation vid allvarliga olyckor och samhällskriser.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
