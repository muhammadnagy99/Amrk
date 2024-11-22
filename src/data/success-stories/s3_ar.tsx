import { Row } from "@/src/types/interfaces";

const strory3: Row[] = [
  {
    type: "normalRow",
    props: {
      title: "تحديات إدارة الطلبات وتحسين تجربة العملاء",
      text: "زوايا لاونج، المعروفة بالأجواء الهادئة والخدمة المميزة، كانت تواجه تحديات في إدارة الطلبات ومعالجة الفواتير خلال أوقات الذروة. أدت الطرق التقليدية إلى وقوع أخطاء وبطء الخدمة، مما أثر على رضا العملاء. كان هناك حاجة لحل شامل يسهم في تبسيط العمليات وتحسين تجربة العملاء.",
    },
  },
  {
    type: "rowDottedHighlited",
    props: {
      title: "الحل الشامل لتحسين العمليات وتعزيز رضا العملاء",
      quoteBefore: "للتغلب على هذه التحديات، تعاونت زوايا لاونج مع أمرك لتطبيق حل شامل يضمن:",
      content: [
        {
            text: "نظام الطلب والدفع من الطاولة: ",
            highlight: true,
            description: "من خلال نظام إدارة المطاعم (RMS) الخاص بأمرك، تمكنت زوايا لاونج من إتاحة الطلب ودفع الفواتير مباشرة من أجهزة العملاء عبر  QR على الطاولات. أدى هذا التكامل السلس إلى تحسين العمليات، حيث تم تنفيذ 9% من الطلبات مباشرة من هواتف العملاء."
        },
        {
            text: "إدارة رسوم الحد الأدنى:",
            highlight: true,
            description: "استخدام ميزة إدارة الطاولات من أمرك، تمكنت زوايا لاونج من ضبط وإدارة رسوم الحد الأدنى في طاولات معينة خلال أوقات الذروة، مما ساعد في تحقيق أقصى استفادة من الإيرادات مع الحفاظ على تجربة عملاء سلسة."
        },
        {
            text: "برنامج الولاء:",
            highlight: true,
            description: "مع برنامج الولاء المصمم لزوايا لاونج، قدمت زوايا لاونج نظام مكافآت يعتمد على النقاط، مما يتيح للعملاء جمع النقاط واستبدالها بطلبات مجانية. أسهم هذا النظام في زيادة الزيارات المتكررة وتعزيز ولاء العملاء."
        },
      ],
    },
  },
  {
    type: "rowDottedHighlited",
    props: {
      title: "نتائج ملموسة وتجربة عملاء محسنة",
      quoteBefore: "نتج عن استخدام نظام أمرك تحقيق نتائج مميزة لزوايا لاونج:",
      content: [
        {
            text: "زيادة الكفاءة:",
            highlight: true,
            description: "بسّط نظام أمرك جوانب العمليات اليومية من إدارة المخزون إلى تنظيم الجداول، مما أتاح للإدارة التركيز على تقديم خدمة أفضل."
        },
        {
            text: "تحسين دقة الطلبات:",
            highlight: true,
            description: "قلل الطلب والدفع عبر الإنترنت من الأخطاء وفترات الانتظار، مما رفع مستوى رضا العملاء."
        },
        {
            text: "تعزيز تجربة العملاء:",
            highlight: true,
            description: "استمتع العملاء بسهولة الطلب وتتبع الطلبات ومكافآت الولاء، مما زاد من التقييمات الإيجابية والزيارات المتكررة"
        },
      ],
      quoteAfter: "من خلال تبني خدمات أمرك، نجحت زوايا لاونج في تحسين الكفاءة وتعزيز رضا العملاء، مما رسّخ مكانتها كوجهة مميزة. عبد الله ينصح بشدة باستخدام أمرك لأي مطعم يسعى لتبسيط عملياته وتقديم تجربة فريدة."
    },
  },
];

export default strory3;

export const quote = {
  qoute: "كان التعاون مع أمرك نقطة تحول في عملياتنا - إن الجمع بين نظام QR للطلب من الطاولة، وبرنامج الولاء، ونظام إدارة المطاعم جعل عملياتنا أكثر سلاسة وحسّن من جودة الخدمة، خاصة خلال ساعات الذروة. عملاؤنا يستمتعون بالسهولة التي يوفرها النظام، وقد لاحظنا زيادة في الطلبات والتقييمات الإيجابية.",
  person: "— أ. عبد الله المعيلي، مؤسس زوايا لاونج",
};