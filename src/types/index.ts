export type Language = 'ar' | 'sv';

export type AuthorityId =
  | 'migrationsverket'
  | 'skatteverket'
  | 'forsakringskassan'
  | 'arbetsformedlingen'
  | 'pensionsmyndigheten'
  | '1177'
  | 'regeringen_riksdagen'
  | 'daily_life';

export type UpdateCategory =
  | 'all'
  | 'residence_citizenship'
  | 'taxes_civil_status'
  | 'social_benefits'
  | 'work_unemployment'
  | 'pensions'
  | 'healthcare'
  | 'laws_parliament'
  | 'daily_travel';

export type UpdateStatus = 'enacted' | 'proposal' | 'procedural' | 'under_review';

export interface NewsUpdate {
  id: string;
  titleAr: string;
  titleSv: string;
  authorityId: AuthorityId;
  authorityNameAr: string;
  authorityNameSv: string;
  date: string; // ISO date format YYYY-MM-DD
  category: UpdateCategory;
  categoryLabelAr: string;
  categoryLabelSv: string;
  status: UpdateStatus;
  statusLabelAr: string;
  statusLabelSv: string;
  summaryAr: string;
  summarySv: string;
  whoIsAffectedAr: string;
  whoIsAffectedSv: string;
  whatToDoAr: string;
  whatToDoSv: string;
  officialSourceUrl: string;
  officialSourceLabel: string;
  safeWordingNoteAr?: string;
  safeWordingNoteSv?: string;
  featured?: boolean;
}

export interface AuthorityInfo {
  id: AuthorityId;
  nameSv: string;
  nameAr: string;
  category: UpdateCategory;
  descriptionAr: string;
  descriptionSv: string;
  officialUrl: string;
  phone: string;
  arabicAssistanceAr: string;
  arabicAssistanceSv: string;
  badgeColor: string;
  topics: string[];
}

export interface PracticalGuide {
  id: string;
  titleAr: string;
  titleSv: string;
  topicAr: string;
  topicSv: string;
  summaryAr: string;
  summarySv: string;
  keyPointsAr: string[];
  keyPointsSv: string[];
  commonMisconceptionAr: string;
  commonMisconceptionSv: string;
  officialAdviceAr: string;
  officialAdviceSv: string;
  authorityId: AuthorityId;
  officialUrl: string;
}
