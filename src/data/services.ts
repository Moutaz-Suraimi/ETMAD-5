import type { LucideIcon } from "lucide-react";
import { Briefcase, Store, Wallet, Building, BookUser } from "lucide-react";
import qiwaImg from "@/assets/service-qiwa.jpg";
import commerceImg from "@/assets/service-commerce.jpg";
import mudadImg from "@/assets/service-mudad.jpg";
import baladyImg from "@/assets/service-balady.jpg";
import passportsImg from "@/assets/service-passports.jpg";

export interface SubService {
  title: string;
  description: string;
}

export interface MainService {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  subServices: SubService[];
}

export const services: MainService[] = [
  {
    id: "qiwa",
    title: "منصة قوى",
    description: "جميع خدمات منصة قوى وحل مشاكلها باحترافية",
    icon: Briefcase,
    image: qiwaImg,
    subServices: [
      { title: "تسجيل منشأة جديدة في منصة قوى", description: "تأسيس وتسجيل المنشآت الجديدة في المنصة" },
      { title: "إصدار تأشيرات عمل", description: "استخراج تأشيرات العمل للمنشآت" },
      { title: "نقل موظف وافد", description: "إجراءات نقل خدمات الموظفين الوافدين" },
      { title: "توظيف سعودي (نطاقات)", description: "رفع نسبة التوطين وتحسين النطاق" },
      { title: "إصدار وتجديد رخص العمل", description: "إصدار وتجديد رخص العمل بسرعة" },
      { title: "تصحيح مهنة أو تغييرها", description: "تعديل المهن وتصحيحها رسمياً" },
      { title: "إدارة عقود عمل الموظفين", description: "توثيق وإدارة عقود العمل" },
      { title: "إنهاء فترة الإشعار", description: "إنهاء فترة الإشعار للموظفين" },
      { title: "إضافة مواقع المنشأة", description: "تسجيل وإضافة فروع ومواقع جديدة" },
      { title: "شطب منشأة", description: "شطب المنشآت من السجلات الرسمية" },
      { title: "فك نسبة نقل عامل", description: "فك القيود على نقل العمالة" },
      { title: "توحيد كروت العمل 100%", description: "توحيد كروت العمل بنسبة كاملة" },
      { title: "تخفيض المقابل المالي", description: "إجراءات تخفيض رسوم المقابل المالي" },
      { title: "تبديل الرصيد للنقل", description: "تبديل الرصيد لخدمات نقل العمالة" },
      { title: "من ملغي إلى تم السداد", description: "تحويل حالة الفواتير من ملغي إلى مسدد" },
      { title: "حل جميع مشاكل قوى", description: "حلول شاملة لكل مشاكل منصة قوى" },
    ],
  },
  {
    id: "commerce",
    title: "المركز السعودي للأعمال (وزارة التجارة)",
    description: "كافة خدمات السجلات التجارية والأسماء التجارية",
    icon: Store,
    image: commerceImg,
    subServices: [
      { title: "إصدار سجل تجاري لمؤسسة فردية", description: "استخراج سجل تجاري جديد للمؤسسات الفردية" },
      { title: "تعديل السجل التجاري", description: "تعديل النشاط، رأس المال، العنوان، والاسم التجاري" },
      { title: "حجز الاسم التجاري لمدة 60 يوم", description: "حجز اسم تجاري بشكل رسمي" },
      { title: "الاستعلام عن حالة طلب الاسم التجاري", description: "متابعة حالة الأسماء التجارية المحجوزة" },
      { title: "طباعة إفادة تجارية", description: "إصدار وطباعة الإفادات التجارية" },
      { title: "شطب سجل تجاري لمؤسسة فردية", description: "شطب السجلات التجارية للمؤسسات" },
      { title: "طباعة سجل تجاري وسجل الأنشطة", description: "طباعة السجلات التجارية وسجلات الأنشطة" },
      { title: "نقل ملكية السجل التجاري", description: "إجراءات نقل ملكية السجلات التجارية" },
    ],
  },
  {
    id: "mudad",
    title: "منصة مدد",
    description: "الاشتراك في مدد وحل ملاحظات حماية الأجور",
    icon: Wallet,
    image: mudadImg,
    subServices: [
      { title: "الاشتراك في منصة مدد", description: "تسجيل المنشآت في منصة مدد" },
      { title: "إزالة ملاحظات حماية الأجور 100%", description: "حل ملاحظات حماية الأجور بشكل كامل" },
    ],
  },
  {
    id: "balady",
    title: "منصة بلدي",
    description: "خدمات الشهادات الصحية والرخص البلدية",
    icon: Building,
    image: baladyImg,
    subServices: [
      { title: "إصدار شهادة صحية", description: "استخراج الشهادات الصحية للعاملين" },
      { title: "تجديد شهادة صحية", description: "تجديد الشهادات الصحية بسهولة" },
      { title: "إصدار رخصة بلدي", description: "إصدار رخص بلدية جديدة للأنشطة" },
      { title: "تجديد رخصة بلدي", description: "تجديد الرخص البلدية بسرعة" },
    ],
  },
  {
    id: "passports",
    title: "إدارة الجوازات",
    description: "جميع خدمات الجوازات والإقامات والتأشيرات",
    icon: BookUser,
    image: passportsImg,
    subServices: [
      { title: "مؤقت منتهي", description: "تجديد التأشيرات المؤقتة المنتهية" },
      { title: "مؤقت ساري بوكالة", description: "تجديد المؤقت الساري عن طريق وكالة" },
      { title: "إصدار إقامة كفيل كبير", description: "إصدار إقامة جديدة للكفيل البالغ" },
      { title: "تجديد إقامة كفيل كبير", description: "تجديد إقامة الكفيل البالغ" },
      { title: "إصدار إقامة كفيل طفل", description: "إصدار إقامة جديدة للطفل" },
      { title: "تجديد إقامة كفيل طفل", description: "تجديد إقامة الطفل" },
      { title: "خروج وعودة", description: "إصدار تأشيرات خروج وعودة" },
      { title: "خروج نهائي ساري", description: "إصدار خروج نهائي للتأشيرات السارية" },
      { title: "نقل معلومات جواز", description: "نقل بيانات الجواز إلى جواز جديد" },
      { title: "نقل معلومات جوازين", description: "نقل بيانات جوازين دفعة واحدة" },
      { title: "نقل مهني مربوط", description: "نقل المهن المربوطة بقيود" },
      { title: "تعديل مهن", description: "تعديل المهن في الإقامات والجوازات" },
    ],
  },
];

export interface Review {
  name: string;
  rating: number;
  text: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    name: "أحمد العتيبي",
    rating: 5,
    text: "خدمة ممتازة وسرعة في إنجاز المعاملات، أنصح بالتعامل معهم بكل ثقة.",
    verified: true,
  },
  {
    name: "فاطمة القحطاني",
    rating: 5,
    text: "تعاملهم احترافي جداً، أنجزوا معاملتي في وقت قياسي والحمد لله.",
    verified: true,
  },
  {
    name: "خالد الشمري",
    rating: 5,
    text: "أفضل مكتب تعقيب تعاملت معه، فريق محترف ومتعاون وأسعار مناسبة.",
    verified: true,
  },
  {
    name: "نورة السبيعي",
    rating: 5,
    text: "خدمة راقية ومتابعة مستمرة، شكراً لكم على الاحترافية العالية.",
    verified: true,
  },
  {
    name: "عبدالله الدوسري",
    rating: 5,
    text: "سرعة في الرد ودقة في العمل، فعلاً يستحقون الثقة والتعامل.",
    verified: true,
  },
  {
    name: "سارة المطيري",
    rating: 5,
    text: "أنجزوا لي عدة معاملات بسلاسة وبدون أي تعقيد، جزاهم الله خير.",
    verified: true,
  },
  {
    name: "محمد الزهراني",
    rating: 5,
    text: "تعامل راقي وأسعار منافسة، أنصح كل صاحب منشأة بالتعامل معهم.",
    verified: true,
  },
  {
    name: "هند العنزي",
    rating: 5,
    text: "أنجزت معاملات قوى ومدد بكل سهولة، فريق محترف ومتفاعل.",
    verified: true,
  },
  {
    name: "بدر الرشيدي",
    rating: 5,
    text: "سرعة في تخليص الجوازات والإقامات، شكراً لكم على الإتقان.",
    verified: true,
  },
  {
    name: "ريم العسيري",
    rating: 5,
    text: "أفضل تجربة في إصدار الشهادات الصحية ورخص بلدي، احترافية عالية.",
    verified: true,
  },
];

export const WHATSAPP_NUMBER = "966598795336";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const DEFAULT_WHATSAPP_LINK = `${WHATSAPP_URL}?text=${encodeURIComponent("السلام عليكم ورحمة الله وبركاته 👋\n\nأرغب بالتواصل معكم والاستفسار عن خدماتكم.")}`;
export const INSTAGRAM_URL = "https://www.instagram.com/qwa711_?igsh=c2NuYWQ2ZmtybW1x";
export const TIKTOK_URL = "https://www.tiktok.com/@qwa711_?_r=1&_t=ZS-95yEdJHWy2h";
export const EMAIL_URL = "mailto:ettmadcompany@gmail.com";

export type MessageTone = "formal" | "short";

export function buildWhatsAppMessage(opts: {
  mainTitle?: string;
  subTitle?: string;
  subDescription?: string;
  tone?: MessageTone;
}): string {
  const { mainTitle, subTitle, subDescription, tone = "formal" } = opts;
  if (tone === "short") {
    const parts: string[] = ["السلام عليكم،"];
    if (subTitle && mainTitle) {
      parts.push(`أرغب بخدمة: ${subTitle} (${mainTitle}).`);
    } else if (mainTitle) {
      parts.push(`أرغب بالاستفسار عن: ${mainTitle}.`);
    }
    parts.push("شكراً.");
    return parts.join(" ");
  }
  // formal
  const lines: string[] = [
    "السلام عليكم ورحمة الله وبركاته 👋",
    "",
    "أرغب بالاستفسار عن الخدمة التالية من *إعتماد للتعقيب والخدمات العامة*:",
  ];
  if (mainTitle) lines.push(`• الخدمة الرئيسية: ${mainTitle}`);
  if (subTitle) lines.push(`• الخدمة الفرعية: ${subTitle}`);
  if (subDescription) lines.push(`• الوصف: ${subDescription}`);
  lines.push("", "أرجو التواصل معي لإتمام الإجراءات. شكراً لكم 🌿");
  return lines.join("\n");
}

/**
 * Build a WhatsApp deep-link with a pre-filled Arabic message
 * for a specific main service / sub-service selection.
 */
export function buildWhatsAppLink(opts: {
  mainTitle?: string;
  subTitle?: string;
  subDescription?: string;
  tone?: MessageTone;
}) {
  const message = encodeURIComponent(buildWhatsAppMessage(opts));
  return `${WHATSAPP_URL}?text=${message}`;
}
