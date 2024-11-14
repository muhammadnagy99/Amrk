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
  

  export const heading_en = {
    title: "Flexible packages for your kitchen's future",
    description: "Start free with add-on tools as needed, or choose from our comprehensive plans to meet all your kitchen's needs from the start.",
    show: {
        more: "Show More",
        less: "Show Less"
    }
}

export const packagesData_en: Package[] = [
    {
        title: 'Online Store',
        description: 'Convenient for expanding your online presence, offering online sales, orders management, online payments, and delivery.',
        buttonText: 'Free',
        buttonVariant: 'primary',
        highlight: false,
    },
    {
        title: 'On-the-Go Service',
        description: 'Convenient for mobile businesses like food trucks, pop-ups, or home-based ventures, offering mobile order and payment solutions.',
        buttonText: 'Contact Sales',
        buttonVariant: 'outline',
        highlight: false,
    },
    {
        title: 'Quick Service',
        description: 'Perfect for busy coffee shops, bakeries, and quick-service restaurants, enhancing speed and efficiency in customer service, order customization, and tracking.',
        buttonText: 'Contact Sales',
        buttonVariant: 'outline',
        highlight: false,
    },
    {
        title: 'Dine-In Service',
        description: 'Ideal for full-service restaurants, providing advanced solutions to streamline operations, simplify order processing, and enhance the dining experience.',
        buttonText: 'Contact Sales',
        buttonVariant: 'outline',
        highlight: false,
    },
    {
        title: 'Cloud Kitchens',
        description: 'Convenient for Cloud or Central Kitchens, managing multiple brands from one location, optimizing online orders, kitchen workflows, and delivery.',
        buttonText: 'Contact Sales',
        buttonVariant: 'outline',
        highlight: true,
    },
];

export const accordionData_en: AccordionData[] = [
  {
    type: "accordion",
    title: "Amrk Online",
    rows: [
      {
        rowTitle: "QR Order and Pay",
        iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "Pickup Orders",
        iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "Social Media Ordering",
        iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "Home Delivery",
        iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "Delivery Area Mapping",
        iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "Online Payment",
        iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "Loyalty Programs",
        iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "Digital Menu",
        iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "Order Management Screen",
        iconStates: [true, true, true, true, true]
      }
    ]
  },
  {
    type: "accordion",
    title: "POS System",
    rows: [
      {
        rowTitle: "Mobile POS",
        iconStates: [false, true, true, true, true]
      },
      {
        rowTitle: "Tablet POS",
        iconStates: [false, true, true, true, true]
      },
      {
        rowTitle: "Web POS",
        iconStates: [false, true, true, true, true]
      }
    ]
  },
  {
    type: "accordion",
    title: "Menu Management",
    rows: [
      {
        rowTitle: "Multi-brand Menu",
        iconStates: [false, false, true, true, true]
      },
      {
        rowTitle: "Menu Editing",
        iconStates: [false, false, true, true, true]
      },
      {
        rowTitle: "Add Menu Options",
        iconStates: [false, true, true, true, true]
      },
      {
        rowTitle: "Combo Meal Creation",
        iconStates: [false, true, true, true, true]
      },
      {
        rowTitle: "Menu Promotions",
        iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "Digital Menu",
        iconStates: [true, true, true, true, true]
      }
    ]
  },
  {
    type: "accordion",
    title: "Table Management",
    rows: [
      {
        rowTitle: "Table Management App",
        iconStates: [false, false, false, true, true]
      },
      {
        rowTitle: "Table Reservations",
        iconStates: [false, false, false, true, true]
      },
      {
        rowTitle: "Customer Waitlist",
        iconStates: [false, false, true, true, true]
      },
      {
        rowTitle: "QR Ordering at Table",
        iconStates: [false, false, false, true, true]
      },
      {
        rowTitle: "QR Split Bill at Table",
        iconStates: [false, false, false, true, true]
      },
      {
        rowTitle: "QR Pay at Table",
        iconStates: [false, false, false, true, true]
      },
      {
        rowTitle: "Table Occupancy Analytics",
        iconStates: [false, false, false, true, true]
      }
    ]
  },
  {
    type: "accordion",
    title: "Advanced Inventory Management",
    rows: [
      {
        rowTitle: "Warehouse and Supplier Management",
        iconStates: [false, false, true, true, true]
      },
      {
        rowTitle: "Menu and Recipe Management",
        iconStates: [false, false, true, true, true]
      },
      {
        rowTitle: "Comprehensive Stock Control",
        iconStates: [false, false, true, true, true]
      },
      {
        rowTitle: "Warehouse, Central Kitchen, and Cloud Kitchen Management",
        iconStates: [false, false, false, true, true]
      },
      {
        rowTitle: "Electronic Approval Process",
        iconStates: [false, false, false, true, true]
      }
    ]
  },
  {
    type: "accordion",
    title: "SMS Alerts for Customers",
    rows: [
      {
        rowTitle: "Order Ready SMS Alerts",
        iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "SMS Digital Receipts",
        iconStates: [true, true, true, true, true]
      }
    ]
  },
  {
    type: "simpleRow",
    rows: [
      {
          rowTitle: "CRM and Marketing Campaigns",
          iconStates: [true, true, true, true, true]
      },
      {
        rowTitle: "Data Analytics Dashboard",
        iconStates: [true, true, true, true, true]
      }
    ]
  },
  {
    type: "accordion",
    title: "Users",
    rows: [
      {
        rowTitle: "Two Users",
        iconStates: [false, true, true, true, true]
      },
      {
        rowTitle: "Unlimited",
        iconStates: [false, false, true, true, true]
      }
    ]
  },
  {
    type: "simpleRow",
    rows: [
      {
          rowTitle: "Delivery App Integrations",
          iconStates: [false, true, true, true, true]
      },
      {
        rowTitle: "API Integration",
        iconStates: [false, true, true, true, true]
      },
      {
        rowTitle: "Support and Training",
        iconStates: [false, true, true, true, true]
      }
    ]
  },
  {
      type: "accordion",
      title: "Cloud Kitchen System",
      rows: [
        {
          rowTitle: "Multi-brand Management",
          iconStates: [false, false, false, false, true]
        },
        {
          rowTitle: "Unified Kitchen Display",
          iconStates: [false, false, false, false, true]
        },
        {
          rowTitle: "Kitchen Inventory Management",
          iconStates: [false, false, false, false, true]
        },
        {
          rowTitle: "Kitchen Menu Management",
          iconStates: [false, false, false, false, true]
        },
        {
          rowTitle: "Kitchen POS System",
          iconStates: [false, false, false, false, true]
        },
        {
          rowTitle: "Kitchen Training Guide",
          iconStates: [false, false, false, false, true]
        },
        {
          rowTitle: "Kitchen Monitoring",
          iconStates: [false, false, false, false, true]
        },
        {
          rowTitle: "Delivery App Integrations for Kitchen",
          iconStates: [false, false, false, false, true]
        },
      ]
    },
];


export const PricingData = {
  heading: heading,
  packages: packagesData,
  accordion: accordionData
}

export const PricingData_en = {
  heading: heading_en,
  packages: packagesData_en,
  accordion: accordionData_en
}