import C1 from '@/public/certifications/p1.png';
import C2 from '@/public/certifications/p2.png';
import C3 from '@/public/certifications/p3.png';

import GCloud from '@/public/certifications/field-lists/google-cloud.png';
import Firebase from '@/public/certifications/field-lists/firebase.png';
import NextJs from '@/public/certifications/field-lists/nextjs.png';
import Angular from '@/public/certifications/field-lists/angular.png';
import Flutter from '@/public/certifications/field-lists/flutter.png';


import Stripe from '@/public/certifications/field-lists/stripe.png';
import AmazonPay from '@/public/certifications/field-lists/amazon-pay.png';
import Telr from '@/public/certifications/field-lists/telr.png';
import AU from '@/public/certifications/field-lists/au.png';
import Nami from '@/public/certifications/field-lists/nami.png';
import Xero from '@/public/certifications/field-lists/xero.png';
import Armada from '@/public/certifications/field-lists/armada.png';
import Zakat from '@/public/certifications/field-lists/zakat.png';
import SAP from '@/public/certifications/field-lists/sap.png';
import Oracle from '@/public/certifications/field-lists/oracle.png';
import Ministry from '@/public/certifications/field-lists/ministry.png';

export const sectionIContent = {
    image: {
        src: C1,
        alt: "Amrk Certifications",
    },
    text: "يُعد نظام أمـركـ مزود خدمة مؤهل ومعتمد من هيئة الزكاة والضريبة والجمارك السعودية، وذلك لتقديم خدمات الفوترة الإلكترونية للمرحلتين الأولى والثانية من الفوترة الإلكترونية."
};

export const sectionIIContent = [
    {
        id: 1,
        title: "المرحلة الأولى",
        content: "استوفت شركة أمـركـ المعايير المحددة التي تنطبق مع متطلبات الفوترة الإلكترونية للمرحلة الأولى."
    },
    {
        id: 2,
        title: "المرحلة الثانية",
        content: "استوفت شركة أمـركـ المعايير المحددة التي تنطبق مع متطلبات الفوترة الإلكترونية للمرحلة الثانية (الربط والتكامل) والمرحلة الأولى (الإصدار والحفظ)."
    },
];

export const sectionIIIContent = {
    heading: "دعم الفوترة الإلكترونية لمساعدتك في التحول الرقمي",
    paragraph1: `تقدم هيئة الزكاة والضريبة والجمارك برنامج 
                <strong class="text-PrimBtn font-medium">
                    دعم الفوترة الإلكترونية 
                </strong>
                وهو دعم مالي للمنشآت الصغيرة والمتوسطة، الخاضعة للائحة الفوترة الإلكترونية. بحيث يصل الدعم المالي إلى 2,500 ريال للمنشأة الواحدة، لتشجيع المنشآت للتحويل الرقمي للفوترة.`,
    paragraph2: "يمكن للمنشآت التقدم للحصول على الدعم عبر بوابة هيئة الزكاة والضريبة والجمارك."
};


export const sectionIVContent = {
    text: "نظام أمـركـ مسجل كمنتج تقني محلي حسب تصنيف هيئة الاتصالات والفضاء والتقنية السعودية، حيث تفخر أمـركـ كونها شركة سعودية قامت بتصميم وتطوير تقنيتها محلياً. وتم ادراجها في دليل المنتجات التقنية المحلية.",
    image: {
        src: C2,
        alt: "Amrk Certifications"
    }
};


export const sectionVContent = {
    heading: "تعتمد الأنظمة المستخدمة لتطوير أمرك على تقنيات Google Cloud السحابية من حيث:",
    image: {
        src: C3,
        alt: "This is alt text"
    },
    items: [
        {
            name: "الموثوقية:",
            content: "الاستفادة من مراكز البيانات والبنية التحتية من Google، مما يضمن أقصى وقت تشغيل وأداء."
        },
        {
            name: "القابلية للتوسيع:",
            content: "التعامل بسهولة مع الزيادات المفاجئة في الطلب، بفضل قدرة Google Cloud على ضبط الموارد ديناميكيًا."
        },
        {
            name: "الأمان:",
            content: "حماية البيانات باستخدام إجراءات الأمان المتقدمة من Google، بما في ذلك التشفير، وسهولة الوصول، والمراجعات الدورية."
        },
        {
            name: "السرعة:",
            content: "مع نظام الحوسبة السحابي المدعوم بشبكة الأداء العالي من Google Cloud."
        },
        {
            name: "الابتكار:",
            content: "تمكين Google Cloud من السرعة في طرح خدمات جديدة ومتنوعة، عبر خدمات المبتكرين في Google Cloud."
        }
    ]
};

export const sectionVIContent = {
    heading: "بنية تقنية موثوقة لتجربة سلسة",
    subheading: "تعتمد حلولنا على أحدث التقنيات لضمان أداء عالي وأمان متقدم",
    fieldLists: [
        {
            legendText: 'البنية التحتية والاستضافة',
            images: [
                { src: GCloud, alt: 'Google Cloud', width: 262, height: 40 }
            ]
        },
        {
            legendText: 'قاعدة البيانات',
            images: [
                { src: Firebase, alt: 'Firebase', width: 151, height: 40 }
            ]
        },
        {
            legendText: 'البرمجة',
            images: [
                { src: Flutter, alt: 'Flutter', width: 138, height: 40 },
                { src: NextJs, alt: 'NextJs', width: 138, height: 40 },
                { src: Angular, alt: 'Angular', width: 128, height: 40 }
            ]
        }
    ]
};


export const sectionVIIContent = {
    heading: "بنية تقنية موثوقة لتجربة سلسة",
    subheading: "تعتمد حلولنا على أحدث التقنيات لضمان أداء عالي وأمان متقدم",
    fieldLists: [
        {
            legendText: 'الدفع الإلكتروني',
            images: [
                { src: Telr, alt: 'Telr', width: 88, height: 40 },
                { src: AmazonPay, alt: 'Amazon Pay', width: 211, height: 40 },
                { src: Stripe, alt: 'Stripe', width: 97, height: 40 }
            ]
        },
        {
            legendText: 'أجهزة الدفع',
            images: [
                { src: Nami, alt: 'Nami', width: 162, height: 40 },
                { src: AU, alt: 'AU', width: 64, height: 40 }
            ]
        },
        {
            legendText: 'المحاسبة',
            images: [
                { src: Xero, alt: 'Xero', width: 64, height: 64 }
            ]
        },
        {
            legendText: 'اللوجستيات',
            images: [
                { src: Armada, alt: 'Armada', width: 168, height: 40 }
            ]
        },
        {
            legendText: 'تخطيط موارد المؤسسات',
            images: [
                { src: Oracle, alt: 'Oracle', width: 182, height: 40 },
                { src: SAP, alt: 'SAP', width: 98, height: 40 }
            ]
        },
        {
            legendText: 'الفوترة',
            images: [
                { src: Zakat, alt: 'Zakat, Tax and Customs Authority', width: 220, height: 40 },
                { src: Ministry, alt: 'Ministry of Tax and Customs Authority', width: 64, height: 64 }
            ]
        }
    ]
};
