import { Row } from "@/src/types/interfaces";

const strory1: Row[] = [
  {
    type: "normalRow",
    props: {
      title: "كيف تحوّلت العلامة الوطنية لإدارة فروعها بفعالية أكبر",
      text: "علامة تجارية معروفة في مجال بيع العصائر بالتجزئة في منطقة الخليج، تمتلك أكثر من 45 فرعًا وتخدم عملاءها منذ عام 1978. منذ بداياتها، نمت لتصبح رمزًا وطنيًا، تقدم خدمات التجزئة، التموين، والتوصيل. لكن إدارة العمليات بسلاسة عبر الفروع باستخدام انظمة قديمة ومعقدة أصبحت مكلفة وغير فعّالة.",
    },
  },
  {
    type: "normalRow",
    props: {
      title: "التحديات التي واجهتها عصير الضاحية قبل الشراكة مع أمـركـ",
      text: "قبل الشراكة مع أمرك، كانت عصير الضاحية تستخدم نظامًا معقد ومكلف. بجانب التكاليف التشغيلية العالية (Opex) و تحديات في خدمة العملاء والدعم الفني، كانت تشكل عبئًا على الشركة. بالإضافة إلى ذلك، كانت متطلبات الامتثال لمعايير المرحلة الثانية ZATCA تزيد من تعقيد العمليات. كانت عصير الضاحية بحاجة إلى نظام يقلل التكاليف، يحسن التحكم في المخزون، ويقدم خدمات أفضل لما بعد البيع",
    },
  },
  {
    type: "normalRow",
    props: {
      title: "لماذا أمـركـ؟",
      text: "اختارت عصير الضاحية أمرك بسبب تواجدها القوي محليًا والتزامها المستمر بالدعم بعد البيع. قدمت أمرك نموذج SaaS اقتصادي بالإضافة إلى دعم فني مباشر وحل سريع للمشكلات، مما جعلها الشريك المثالي للتحول التكنولوجي لعصير الضاحية.",
    },
  },
  {
    type: "rowDottedWithIntro",
    props: {
      title: "رحلة التحول والنتائج",
      quoteBefore: "تمكنت أمرك من تحقيق تحول ناجح لعصير الضاحية في غضون شهر واحد دون أي تعطيل للعمليات. تضمنت عملية التحول إعداد إدارة متقدمة للمخزون، تكامل مع برنامج المحاسبة، الامتثال لمعايير ZATCA، وتقديم خدمات إلكترونية وبرامج ولاء مخصصة.",
      introText: "منذ اعتماد أمرك، حققت عصير الضاحية النتائج التالية:",
      content: [
        "تقليل التكاليف التشغيلية بنسبة %4",
        "تحسين إدارة المخزون والسيطرة على التكاليف",
        "تقديم برنامج ولاء جديد وخدمات إلكترونية متقدمة"
      ],
      quoteAfter: "مع دعم أمرك المستمر، توسعت عصير الضاحية بسهولة، حيث يتم تفعيل الفروع الجديدة في غضون دقائق.",
    },
  },
];

export default strory1;

export const quote = {
  qoute: "أمرك قامت بتحويل عملياتنا، حيث خفضت تكاليفنا بنسبة 4٪ وساعدتنا على التوسع بشكل أسرع من أي وقت مضى. دعمهم المباشر ومنصتهم الموفرة للتكلفة جعلتهم شريكًا لا يقدر بثمن في رحلتنا.",
  person: "— مدير التحول التكنولوجي، عصير الضاحية",
};
