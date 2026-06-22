// بيانات الحملة التسويقية
const impressions = 250000;
const clicks = 12500;
const leads = 1250;
const customers = 250;
const campaignCost = 5000;

const monthlyRevenue = 10; // JOD
const customerLifetime = 24; // Months

// المرحلة الثالثة: حساب مؤشرات التسويق

const CTR = (clicks / impressions) * 100;
const CPC = campaignCost / clicks;
const CPL = campaignCost / leads;
const CAC = campaignCost / customers;

// المرحلة الرابعة: حساب قيمة العميل
const LTV = monthlyRevenue * customerLifetime;

// عرض النتائج
console.log("CTR =", CTR.toFixed(2) + "%");
console.log("CPC =", CPC.toFixed(2), "JOD");
console.log("CPL =", CPL.toFixed(2), "JOD");
console.log("CAC =", CAC.toFixed(2), "JOD");
console.log("LTV =", LTV.toFixed(2), "JOD");
