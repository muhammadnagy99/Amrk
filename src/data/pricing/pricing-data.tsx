import {AccordionData, Package} from "@/src/types/interfaces"

export const heading = {
    title:"باقات مرنة لدعم مستقبل مطبخك",
    description:"ابدأ مجاناً مع إمكانية إضافة الأدوات حسب الحاجة، أو اختر من خططنا الشاملة لتلبية جميع احتياجات مطبخك من البداية.",
    show: {
        more:"عرض المزيد", 
        less:"عرض أقل"
    }

}
export const packagesData: Package[] = [
    {
        title: 'مطعمك الإلكتروني',
        description: 'لتعزيز حضورك على الإنترنت، مع ميزات متكاملة للمبيعات الإلكترونية، وإدارة الطلبات، والدفع الإلكتروني، والتوصيل.',
        buttonText: 'مجاناً',
        buttonVariant: 'primary',  
        highlight: false,
    },
    {
        title: 'الخدمة المتنقلة',
        description: 'للأعمال المتنقلة مثل عربات الطعام والمطاعم المؤقتة، أو بيع الوجبات من المنزل. يوفر حلولاً متنقلة ومبسطة لاستلام الطلبات والمدفوعات.',
        buttonText: 'تواصل مع المبيعات',
        buttonVariant: 'outline', 
        highlight: false,
    },
    {
        title: 'الخدمة السريعة',
        description: 'للمطاعم السريعة والمقاهي، مع ميزات لتعزيز السرعة والكفاءة في خدمة العملاء، وتحديث الطلبات وإدارة الطلبات لحظياً.',
        buttonText: 'تواصل مع المبيعات',
        buttonVariant: 'outline', 
        highlight: false,
    },
    {
        title: 'الخدمة على الطاولة',
        description: 'للمطاعم ذات الخدمة الكاملة، حيث يتم تقديم حلول متقدمة لإدارة الأقسام الداخلية والخارجية للمطعم، لتسهيل معالجة الطلبات وتنسيق تجربة تناول الطعام.',
        buttonText: 'تواصل مع المبيعات',
        buttonVariant: 'outline', 
        highlight: false,
    },
    {
        title: 'المطابخ السحابية',
        description: 'للمطابخ السحابية والمطابخ المركزية، إدارة متكاملة للعمليات التجارية المتعددة من موقع واحد، مثل استقبال الطلبات، وتشغيل العمل في المطبخ، وتنسيق عمليات التوصيل.',
        buttonText: 'تواصل مع المبيعات',
        buttonVariant: 'outline', 
        highlight: true,
    },
];


export const accordionData: AccordionData[] = [
    {
      type: "accordion",
      title: "أمـركـ أون لاين",
      rows: [
        {
          rowTitle: "الطلب والدفع عبر QR",
          iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "طلبات الاستلام",
          iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "الطلب عبر وسائل التواصل الاجتماعي",
          iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "التوصيل إلى المنزل",
          iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "تحديد مناطق التوصيل الجغرافية",
          iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "الدفع الإلكتروني",
          iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "برامج الولاء",
          iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "منيو رقمي",
          iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "شاشة استلام الطلبات",
          iconStates: [true, true, true, true, true]
        }
      ]
    },
    {
      type: "accordion",
      title: "نظام نقاط البيع",
      rows: [
        {
          rowTitle: "نقاط البيع المتنقل",
          iconStates: [false, true, true, true, true]
        },
        {
          rowTitle: "نقاط البيع للأجهزة اللوحية",
          iconStates: [false, true, true, true, true]
        },
        {
          rowTitle: "نقاط البيع لصفحات الويب",
          iconStates: [false, true, true, true, true]
        }
      ]
    },
    {
      type: "accordion",
      title: "إدارة المنيو",
      rows: [
        {
          rowTitle: "منيو للطلبات التجارية المتعددة",
          iconStates: [false, false, true, true, true]
        },
        {
          rowTitle: "تعديل قوائم الطعام",
          iconStates: [false, false, true, true, true]
        },
        {
          rowTitle: "إضافة خيارات لقوائم الطعام",
          iconStates: [false, true, true, true, true]
        },
        {
          rowTitle: "إنشاء وجبات كومبو",
          iconStates: [false, true, true, true, true]
        },
        {
          rowTitle: "عروض قوائم الطعام",
          iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "منيو رقمي",
          iconStates: [true, true, true, true, true]
        }
      ]
    },
    {
      type: "accordion",
      title: "إدارة الطاولات",
      rows: [
        {
          rowTitle: "تطبيق لادارة الطاولات",
          iconStates: [false, false, false, true, true]
        },
        {
          rowTitle: "حجوزات الطاولات",
          iconStates: [false, false, false, true, true]
        },
        {
          rowTitle: "قائمة انتظار العملاء",
          iconStates: [false, false, true, true, true]
        },
        {
          rowTitle: "QR للطلب على الطاولة",
          iconStates: [false, false, false, true, true]
        },
        {
          rowTitle: "QR لتقسيم على الطاولة",
          iconStates: [false, false, false, true, true]
        },
        {
          rowTitle: "QR للدفع على الطاولة",
          iconStates: [false, false, false, true, true]
        },
        {
          rowTitle: "تحليلات لإشغال الطاولات",
          iconStates: [false, false, false, true, true]
        }
      ]
    },
    {
      type: "accordion",
      title: "إدارة متطورة المخزون",
      rows: [
        {
          rowTitle: "إدارة المستودعات والموردين",
          iconStates: [false, false, true, true, true]
        },
        {
          rowTitle: "إدارة المنيو والمواصفات",
          iconStates: [false, false, true, true, true]
        },
        {
          rowTitle: "التحكم الشامل في المخزون",
          iconStates: [false, false, true, true, true]
        },
        {
          rowTitle: "إدارة المستودعات، المطابخ المركزية، والمطابخ السحابية",
          iconStates: [false, false, false, true, true]
        },
        {
          rowTitle: "متابعات المخالفات إلكترونياً",
          iconStates: [false, false, false, true, true]
        }
      ]
    },
    {
      type: "accordion",
      title: "تنبيهات SMS للعملاء",
      rows: [
        {
          rowTitle: "تنبيهات SMS عند جاهزية الطلب",
          iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "فواتير رقمية SMS",
          iconStates: [true, true, true, true, true]
        }
      ]
    },
    {
      type: "simpleRow",
      rows: [
        {
            rowTitle: "إدارة علاقات العملاء (CRM) والحملات التسويقية",
            iconStates: [true, true, true, true, true]
        },
        {
          rowTitle: "لوحة تحليلات البيانات",
          iconStates: [true, true, true, true, true]
        }
      ]
    },
    {
      type: "accordion",
      title: "المستخدمين",
      rows: [
        {
          rowTitle: "مستخدمين اثنين",
          iconStates: [false, true, true, true, true]
        },
        {
          rowTitle: "لا محدود",
          iconStates: [false, false, true, true, true]
        }
      ]
    },
    {
      type: "simpleRow",
      rows: [
        {
            rowTitle: "ربط تطبيقات التوصيل",
            iconStates: [false, true, true, true, true]
        },
        {
          rowTitle: "واجهة الربط البرمجي",
          iconStates: [false, true, true, true, true]
        },
        {
          rowTitle: "الدعم والتدريب",
          iconStates: [false, true, true, true, true]
        }
      ]
    },
    {
        type: "accordion",
        title: "نظام المطابخ السحابية",
        rows: [
          {
            rowTitle: "علامات متعددة في مطبخك",
            iconStates: [false, false, false, false, true]
          },
          {
            rowTitle: "شاشة موحدة لمطبخك",
            iconStates: [false, false, false, false, true]
          },
          {
            rowTitle: "مخزون مطبخك",
            iconStates: [false, false, false, false, true]
          },
          {
            rowTitle: "منيو مطبخك",
            iconStates: [false, false, false, false, true]
          },
          {
            rowTitle: "نظام نقاط بيع مطبخك",
            iconStates: [false, false, false, false, true]
          },
          {
            rowTitle: "دليل تعليمي لمطبخك",
            iconStates: [false, false, false, false, true]
          },
          {
            rowTitle: "مراقبة مطبخك",
            iconStates: [false, false, false, false, true]
          },
          {
            rowTitle: "ربط تطبيقات التوصيل بمطبخك",
            iconStates: [false, false, false, false, true]
          },
        ]
      },
  ];
  