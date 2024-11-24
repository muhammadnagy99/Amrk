import React from "react";

import { Icon1, Icon2, Icon3, Icon4 } from "./icons";

interface MegaMenuData {
  title: string;
  sections: {
    icon: React.ReactNode;
    heading: string;
    links: { text: string; url: string }[];
  }[];
}

export const ArLogo = () => (
  <svg
    width="110"
    height="32"
    viewBox="0 0 110 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M96.8673 12.6395C94.582 12.6395 93.0524 14.344 91.5864 18.5222L91.545 18.64C91.2639 19.438 90.8694 19.8371 90.3615 19.8371H64.4604C62.9197 19.8371 62.7573 19.5109 62.5535 17.599L62.3547 15.6438L58.7113 16.0797L58.7376 16.2327C59.2501 19.3025 59.4438 20.571 59.4438 21.7309C59.4438 23.3498 58.6215 24.6808 57.5944 25.7117C55.9094 27.4031 53.5918 28.0928 51.2026 28.1351V28.3576L51.129 31.3025H52.9047C54.8531 31.3025 56.761 30.7135 58.3441 29.5798C60.0694 28.3455 61.937 26.3873 62.4304 23.5179C63.1034 23.8038 63.8096 23.8431 64.3625 23.8431H89.5029C90.9023 23.8431 92.0374 23.8471 93.0756 22.5564C94.3378 23.2431 95.929 23.6659 97.2608 23.6659C100.418 23.6659 102.156 22.043 102.156 19.0951C102.156 15.9649 100.303 12.6395 96.8673 12.6395ZM97.7068 19.68C96.8189 19.68 95.703 19.4233 94.695 18.9904C95.5587 16.8066 96.2397 16.3626 97.0509 16.3626C98.3737 16.3626 99.1859 17.7862 99.1859 18.8071C99.1859 19.5672 98.2587 19.68 97.7068 19.68Z"
      fill="#23314C"
    />
    <path
      d="M108.618 4.81084C107.366 5.04341 106.743 4.79372 106.44 4.54303C106.13 4.28529 106.065 3.95607 106.065 3.72551C106.065 3.18788 106.468 2.90397 107.228 2.90397C107.602 2.90397 108.119 3.01572 108.646 3.20903L108.791 3.26239L109.4 1.35149L109.294 1.29309C108.582 0.898431 107.826 0.699085 107.045 0.699085C105.151 0.699085 103.828 1.94348 103.828 3.72551C103.828 4.3749 104.021 5.03032 104.387 5.63339L103.251 5.8267V8.03963L110 6.75295V4.57122L108.619 4.81084H108.618Z"
      fill="#23314C"
    />
    <path
      d="M105.02 23.7484H108.946V8.03838L105.02 8.67468V23.7484Z"
      fill="#23314C"
    />
    <path
      d="M55.6562 20.9256C56.5441 18.4851 54.6866 15.1768 50.5862 11.2684C51.9301 9.86292 54.0762 7.61374 56.4987 5.05446C57.1737 4.34064 57.1394 3.21505 56.42 2.54553C55.7077 1.88205 54.5907 1.91829 53.9218 2.62506C49.8718 6.90495 46.5917 10.318 46.5564 10.3552L46.0539 10.8778C45.5131 11.4406 45.5514 12.3406 46.1387 12.8551L46.6835 13.3333C49.6024 15.8946 50.8455 17.5287 51.3732 18.475C51.6849 19.0338 51.3126 19.7406 50.6719 19.7758C50.6679 19.7758 50.6639 19.7758 50.6608 19.7758H39.084V23.9037H50.7496C51.1441 23.8936 54.6392 23.7275 55.6582 20.9246L55.6562 20.9256Z"
      fill="#23314C"
    />
    <path
      d="M16.0345 0C3.32151 0 0 3.31437 0 16C0 28.6856 3.32151 32 16.0345 32C28.7474 32 32.0689 28.6856 32.0689 16C32.0689 3.31437 28.7474 0 16.0345 0ZM15.5986 12.0785L17.782 9.89982C18.01 9.67229 18.3087 9.55852 18.6073 9.55852C18.906 9.55852 19.2046 9.67229 19.4316 9.89982C19.8877 10.3549 19.8877 11.0919 19.4316 11.5469L17.2492 13.7246C16.7932 14.1797 16.0546 14.1797 15.5986 13.7246C15.1425 13.2706 15.1425 12.5326 15.5986 12.0785ZM10.9553 7.72313C10.9553 7.40196 11.0855 7.10999 11.2964 6.89957C11.5082 6.68915 11.7988 6.55827 12.1217 6.55827C12.7664 6.55827 13.2891 7.07979 13.2891 7.72313V10.8039C13.2891 11.4463 12.7664 11.9678 12.1217 11.9678C11.477 11.9678 10.9553 11.4463 10.9553 10.8039V7.72313ZM4.43238 10.7576C4.43238 10.4596 4.54639 10.1616 4.77341 9.93406C5.22946 9.47898 5.96802 9.47898 6.42407 9.93406L8.60747 12.1128C9.06251 12.5678 9.06251 13.3048 8.60747 13.7599C8.15142 14.2139 7.41286 14.2139 6.95681 13.7599L4.77341 11.5812C4.54639 11.3536 4.43238 11.0556 4.43238 10.7576ZM27.1896 13.4025L15.6389 24.9283C15.307 25.2595 14.8671 25.4417 14.3989 25.4417C13.9308 25.4417 13.4898 25.2595 13.1589 24.9283L10.915 22.6902L10.8857 22.66L10.8736 22.6479C10.3802 22.1616 6.99918 18.8039 6.77116 18.5563C6.61981 18.3861 6.56835 18.2502 6.56835 18.1737C6.56835 18.1636 6.56936 18.1545 6.57138 18.1455C6.58853 18.0659 6.71062 17.928 6.99414 17.8032C7.51678 17.5756 8.07171 17.4609 8.64077 17.4609C9.69917 17.4609 10.697 17.8596 11.4507 18.5824C11.9804 19.0899 12.4879 19.6104 13.0237 20.1621C13.2699 20.4148 13.5221 20.6756 13.7794 20.9363L14.3656 21.5303L24.7216 11.2127C25.1111 10.8241 25.5571 10.6197 26.0121 10.6197C26.2835 10.6197 26.5479 10.6932 26.7971 10.8382C27.245 11.0979 27.5447 11.5318 27.6184 12.0302C27.693 12.5245 27.5366 13.0239 27.1896 13.4025Z"
      fill="#23314C"
    />
  </svg>
);

export const EnLangSwitcher = () => (
  <svg
    width="20"
    height="12"
    viewBox="0 0 20 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.841813 12C0.724479 12 0.628479 11.9627 0.553813 11.888C0.479146 11.8133 0.441813 11.7173 0.441813 11.6V1.2C0.441813 1.08267 0.479146 0.986666 0.553813 0.912C0.628479 0.837333 0.724479 0.799999 0.841813 0.799999H8.08981C8.20715 0.799999 8.30315 0.837333 8.37781 0.912C8.45248 0.986666 8.48981 1.08267 8.48981 1.2V2.48C8.48981 2.58667 8.45248 2.67733 8.37781 2.752C8.30315 2.82667 8.20715 2.864 8.08981 2.864H2.90581V5.376H7.73781C7.85515 5.376 7.95115 5.41333 8.02581 5.488C8.10048 5.56267 8.13781 5.65867 8.13781 5.776V6.96C8.13781 7.06667 8.10048 7.15733 8.02581 7.232C7.95115 7.30667 7.85515 7.344 7.73781 7.344H2.90581V9.936H8.21781C8.33515 9.936 8.43115 9.97333 8.50581 10.048C8.58048 10.1227 8.61781 10.2187 8.61781 10.336V11.6C8.61781 11.7173 8.58048 11.8133 8.50581 11.888C8.43115 11.9627 8.33515 12 8.21781 12H0.841813ZM10.9199 12C10.8026 12 10.7066 11.9627 10.6319 11.888C10.5573 11.8133 10.5199 11.7173 10.5199 11.6V1.2C10.5199 1.08267 10.5573 0.986666 10.6319 0.912C10.7066 0.837333 10.8026 0.799999 10.9199 0.799999H12.3759C12.5359 0.799999 12.6533 0.837333 12.7279 0.912C12.8026 0.986666 12.8506 1.04533 12.8719 1.088L17.1439 7.76V1.2C17.1439 1.08267 17.1813 0.986666 17.2559 0.912C17.3306 0.837333 17.4213 0.799999 17.5279 0.799999H19.1599C19.2773 0.799999 19.3733 0.837333 19.4479 0.912C19.5226 0.986666 19.5599 1.08267 19.5599 1.2V11.6C19.5599 11.7067 19.5226 11.8027 19.4479 11.888C19.3733 11.9627 19.2773 12 19.1599 12H17.6879C17.5279 12 17.4106 11.9627 17.3359 11.888C17.2719 11.8027 17.2239 11.744 17.1919 11.712L12.9359 5.248V11.6C12.9359 11.7173 12.8986 11.8133 12.8239 11.888C12.7493 11.9627 12.6533 12 12.5359 12H10.9199Z"
      fill="#23314C"
    />
  </svg>
);

export const megaMenuData = {
  title: "الخدمات",
  sections: [
    {
      heading: "نظام إدارة المطاعم",
      icon: <Icon1 />,
      links: [
        { text: "نظام نقاط البيع", url: "/pos-system" },
        { text: "شاشة المطبخ", url: "/kitchen-display" },
        { text: "شاشة الخدمات", url: "/service-display" },
        { text: "إدارة الطاولات", url: "/table-management" },
        { text: "ووك توكي مدمج", url: "/integrated-walkie-talkie" },
        { text: "وضع عدم الاتصال", url: "/offline-mode" },
        {
          text: "إدارة علاقات العملاء وعمل حملات تسويقية",
          url: "/crm-marketing",
        },
        { text: "الربط مع تطبيقات التوصيل", url: "/delivery-integration" },
      ],
    },
    {
      heading: "حلول أمرك أون لاين",
      icon: <Icon2 />,
      links: [
        { text: "توصيل الطلبات", url: "/home-delivery" },
        { text: "طلبات الاستلام", url: "/pickup-orders" },
        { text: "الطلب والدفع عبر (QR)", url: "/qr-ordering" },
        {
          text: "الطلب عبر وسائل التواصل الاجتماعي",
          url: "/social-media-ordering",
        },
        { text: "برامج الولاء", url: "/loyalty-programs" },
        { text: "حجز الطاولات", url: "/table-reservations" },
      ],
    },
    {
      heading: "إدارة متطورة للمخزون",
      icon: <Icon3 />,
      links: [
        { text: "إدارة المشتريات والموردين", url: "/procurement-management" },
        { text: "إدارة المينو والوصفات", url: "/menu-recipes-management" },
        { text: "التحكم الشامل في المخزون", url: "/stock-control" },
        {
          text: "إدارة المستودعات، المطابخ المركزية، والمطابخ السحابية",
          url: "/warehouse-management",
        },
        { text: "صلاحيات الموافقات الإلكترونية", url: "/approval-process" },
      ],
    },
    {
      heading: "نظام عمليات العلامات الافتراضية",
      icon: <Icon4 />,
      links: [
        { text: "علامات متعددة في مطبخك", url: "/kitchen-multi-brand" },
        { text: "شاشة واحدة لمطبخك", url: "/kitchen-display" },
        { text: "مخزون مطبخك", url: "/kitchen-inventory" },
        { text: "قوائم طعام مطبخك", url: "/kitchen-menu" },
        { text: "نظام نقاط بيع مطبخك", url: "/kitchen-pos" },
        { text: "دليل تعليمي لمطبخك", url: "/kitchen-navigator" },
        { text: "مراقبة مطبخك", url: "/kitchen-monitor" },
        {
          text: "ربط تطبيقات التوصيل بمطبخك",
          url: "/kitchen-aggregators",
        },
      ],
    },
  ],
};

export const dropListData = {
  title: "الموارد",
  menuItems: [
    { text: "قصص نجاح", url: "/success-stories" },
    { text: "المدونة", url: "/blog" },
    { text: "الاعتمادات", url: "/certifications" },
    { text: "تحديثات أمرك", url: "/updates" },
  ],
};

export const navLinks = [
  { text: "قطاعات نخدمها", url: "/business-types" },
  { text: "الباقات", url: "/licenses" },
];

export const btnGroupData = {
  buttons: [
    {
      type: "secondary" as "secondary",
      text: "أمرك أونلاين",
      url: "/",
    },
    {
      type: "primary" as "primary",
      text: "احجز موعد للتجربة",
      url: "/demo-schedule",
    },
  ],
  icon: {
    url: "/en",
    source: <EnLangSwitcher />,
  },
};

export const sidebarData = {
  switcher: {
    url: "/en",
    source: <EnLangSwitcher />,
  },
  solutionsMenu: {
    title: "حلول أمرك",
    subMenus: [
      {
        title: "نظام إدارة المطاعم",
        items: [
          { label: "نظام نقاط البيع", url: "/pos-system" },
          { label: "شاشة المطبخ", url: "/kitchen-display" },
          { label: "شاشة الخدمات", url: "/service-display" },
          { label: "إدارة الطاولات", url: "/table-management" },
          { label: "ووكي توكي مدمج", url: "/integrated-walkie-talkie" },
          { label: "وضع عدم الإتصال", url: "/offline-mode" },
          {
            label: "إدارة علاقات العملاء وعمل حملات تسويقية",
            url: "/crm-marketing",
          },
          { label: "الربط مع تطبيقات التوصيل", url: "/delivery-integration" },
        ],
      },
      {
        title: "حلول أمـركـ أونلاين",
        items: [
          { label: "الطلب والدفع عبر (QR)", url: "/qr-ordering" },
          { label: "طلبات الاستلام", url: "/pickup-orders" },
          {
            label: "الطلب عبر وسائل التواصل الاجتماعي",
            url: "/social-media-ordering",
          },
          { label: "التوصيل إلى المنزل", url: "/home-delivery" },
          { label: "برامج الولاء", url: "/loyalty-programs" },
          { label: "حجوزات الطاولات", url: "/table-reservations" },
        ],
      },
      {
        title: "إدارة متطورة للمخزون",
        items: [
          { label: "إدارة المشتريات والموردين", url: "/procurement-management" },
          { label: "إدارة المنيو والوصفات", url: "/menu-recipes-management" },
          { label: "التحكم الشامل في المخزون", url: "/stock-control" },
          {
            label: "إدارة المستودعات، المطابخ المركزية، والمطابخ السحابية",
            url: "/warehouse-management",
          },
          {
            label: "صلاحيات الموافقات الإلكترونية",
            url: "/approval-process",
          },
        ],
      },
      {
        title: "نظام عمليات العلامات الافتراضية",
        items: [
          { label: "علامات متعددة في مطبخك", url: "/kitchen-multi-brand" },
          { label: "شاشة واحدة لمطبخك", url: "/kitchen-display" },
          { label: "مخزون مطبخك", url: "/kitchen-inventory" },
          { label: "قوائم طعام مطبخك", url: "/kitchen-menu" },
          { label: "نظام نقاط بيع مطبخك", url: "/kitchen-pos" },
          { label: "دليل تعليمي لمطبخك", url: "/kitchen-navigator" },
          { label: "مراقبة مطبخك", url: "/kitchen-monitor" },
          { label: "لوحة تقييم مطبخك", url: "/kitchen-rating" },
          {
            label: "ربط تطبيقات التوصيل بمطبخك",
            url: "/kitchen-aggregators",
          },
        ],
      },
    ],
  },
  resourcesMenu: {
    title: "الموارد",
    items: [
      { label: "قصص نجاح", url: "/success-stories" },
      { label: "المدونة", url: "/blog" },
      { label: "الاعتمادات", url: "/certifications" },
      { label: "تحديثات أمرك", url: "/updates" },
    ],
  },
  navLinks: [
    { text: "قطاعات نخدمها", url: "/business-types" },
    { text: "الباقات", url: "/licenses" },
    { text: "احجز موعد للتجربة", url: "/demo-schedule" },
    { text: "أمـركـ أون لاين", url: "/online" },
  ],
  login: { text: "تسجيل الدخول", flag: 0 },
};

export const mainHeaderData_ar = {
  logo: <ArLogo />,
  navData: {
    megaMenuData: megaMenuData,
    dropListData: dropListData,
    links: navLinks,
  },
  btnGroupData: btnGroupData,
  sidebarData: sidebarData,
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Elogo = () => (
  <svg
    width="110"
    height="32"
    viewBox="0 0 110 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0599 0C3.32678 0 0 3.31437 0 16C0 28.6856 3.32678 32 16.0599 32C28.793 32 32.1198 28.6856 32.1198 16C32.1198 3.31437 28.792 0 16.0599 0ZM15.6233 12.0785L17.8092 9.89982C18.0376 9.67229 18.3367 9.55852 18.6358 9.55852C18.935 9.55852 19.2341 9.67229 19.4625 9.89982C19.9192 10.3549 19.9192 11.0919 19.4625 11.5469L17.2756 13.7246C16.8198 14.1797 16.0791 14.1797 15.6233 13.7246C15.1666 13.2706 15.1666 12.5326 15.6233 12.0785ZM10.9717 7.72313C10.9717 7.40196 11.1021 7.10999 11.3143 6.89957C11.5255 6.68915 11.8175 6.55827 12.1409 6.55827C12.7867 6.55827 13.3102 7.07979 13.3102 7.72313V10.8039C13.3102 11.4463 12.7867 11.9678 12.1409 11.9678C11.4952 11.9678 10.9717 11.4463 10.9717 10.8039V7.72313ZM4.4384 10.7576C4.4384 10.4596 4.5526 10.1616 4.78098 9.93406C5.23776 9.47898 5.97749 9.47898 6.43427 9.93406L8.62113 12.1128C9.07689 12.5678 9.07689 13.3048 8.62113 13.7599C8.16435 14.2139 7.42462 14.2139 6.96785 13.7599L4.78098 11.5812C4.5526 11.3536 4.4384 11.0556 4.4384 10.7576ZM27.2317 13.4025L15.6638 24.9283C15.3313 25.2595 14.8907 25.4417 14.4218 25.4417C13.9529 25.4417 13.5102 25.2595 13.1788 24.9283L10.9313 22.6902L10.903 22.66L10.8969 22.6539L10.8898 22.6479C10.3967 22.1616 7.01029 18.8039 6.7819 18.5563C6.63032 18.3861 6.57777 18.2502 6.57777 18.1737C6.57777 18.1636 6.57777 18.1545 6.5808 18.1455C6.59899 18.0659 6.72127 17.928 7.00524 17.8032C7.52871 17.5756 8.08351 17.4609 8.65448 17.4609C9.71456 17.4609 10.714 17.8596 11.4689 18.5824C11.9994 19.0899 12.5078 19.6104 13.0444 20.1621C13.2899 20.4148 13.5436 20.6756 13.8013 20.9363L14.3884 21.5303L24.7609 11.2127C25.1509 10.8241 25.5976 10.6197 26.0534 10.6197C26.3242 10.6197 26.589 10.6932 26.8396 10.8382C27.2883 11.0979 27.5884 11.5318 27.6622 12.0302C27.737 12.5245 27.5803 13.0239 27.2317 13.4025Z"
      fill="#23324C"
    />
    <path
      d="M50.4747 10.7375V12.5618C49.3944 11.1261 47.534 10.4395 45.7938 10.4395C41.6525 10.4395 39.0109 13.9069 39.0109 18.2119C39.0109 22.517 41.6525 25.9854 45.7938 25.9854C47.534 25.9854 49.4247 25.328 50.4747 23.8933V25.6864H54.4058V10.7375H50.4747ZM46.8134 22.2784C44.6529 22.2784 43.0925 20.5739 43.0925 18.2119C43.0925 15.85 44.6529 14.1465 46.8134 14.1465C48.974 14.1465 50.3848 15.8802 50.3848 18.2119C50.3848 20.5437 48.8841 22.2784 46.8134 22.2784Z"
      fill="#23324C"
    />
    <path
      d="M75.3225 10.4395C73.6116 10.4395 71.5409 11.3063 70.4607 13.0994C69.6805 11.4251 68.2101 10.4395 65.8393 10.4395C64.0385 10.4395 62.268 11.3959 61.3979 12.741V10.7375H57.4668V25.6864H61.4878V17.9431C61.4878 15.9698 62.5085 14.2361 64.5488 14.2361C66.7094 14.2361 67.1601 15.701 67.1601 17.6743V25.6864H71.1812V17.7941C71.1812 15.8208 72.2615 14.2361 74.2422 14.2361C76.3725 14.2361 76.8525 15.701 76.8525 17.6743V25.6864H80.8735V17.1659C80.8735 13.339 79.5537 10.4395 75.3225 10.4395Z"
      fill="#23324C"
    />
    <path
      d="M87.4715 13.6078V10.7375H83.5101V25.6864H87.5311V19.9466C87.5311 16.3886 89.242 14.8039 92.7234 14.8039V10.4395C89.4219 10.4395 87.8909 12.3826 87.4715 13.6078Z"
      fill="#23324C"
    />
    <path
      d="M103.157 17.2555L107.286 12.7712C107.606 12.4148 107.749 11.994 107.749 11.5812C107.749 10.6539 107.021 9.77095 105.94 9.77095C105.401 9.77095 104.89 10.0106 104.547 10.4234L98.9565 16.9565V6.0146H94.9345V25.6864H98.9565V22.0096L100.666 19.9758L105.168 25.6864H110L103.157 17.2555Z"
      fill="#23324C"
    />
  </svg>
);

export const ArLangSwitcher = () => (
  <svg
    width="31"
    height="15"
    viewBox="0 0 31 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.82875 11.824C4.02875 11.824 3.33542 11.7013 2.74875 11.456C2.17275 11.2213 1.69275 10.896 1.30875 10.48C0.935417 10.064 0.65275 9.584 0.46075 9.04C0.279417 8.50667 0.18875 7.94133 0.18875 7.344C0.18875 6.832 0.263417 6.29867 0.41275 5.744C0.57275 5.18933 0.818083 4.64533 1.14875 4.112C1.24475 3.952 1.33542 3.856 1.42075 3.824C1.51675 3.792 1.62875 3.80267 1.75675 3.856L2.70075 4.192C2.87142 4.24533 2.96208 4.32533 2.97275 4.432C2.98342 4.528 2.94608 4.656 2.86075 4.816C2.63675 5.232 2.47142 5.616 2.36475 5.968C2.25808 6.32 2.20475 6.68267 2.20475 7.056C2.20475 7.52533 2.30608 7.94667 2.50875 8.32C2.71142 8.704 3.02608 9.00267 3.45275 9.216C3.87942 9.42933 4.42342 9.536 5.08475 9.536H6.23675C6.97275 9.536 7.54342 9.456 7.94875 9.296C8.36475 9.14667 8.57275 8.912 8.57275 8.592C8.57275 8.38933 8.50875 8.22933 8.38075 8.112C8.25275 7.99467 8.08208 7.936 7.86875 7.936H6.95675C6.72208 7.936 6.60475 7.81867 6.60475 7.584V6.048C6.60475 5.81333 6.72208 5.696 6.95675 5.696H10.7328C10.8821 5.696 10.9568 5.776 10.9568 5.936V7.632C10.9568 7.93067 10.8021 8.08 10.4928 8.08H9.82075L9.13275 7.2C9.54875 7.392 9.84742 7.6 10.0288 7.824C10.2101 8.048 10.3008 8.33067 10.3008 8.672C10.3008 9.152 10.2154 9.584 10.0448 9.968C9.87408 10.3627 9.61275 10.6933 9.26075 10.96C8.90875 11.2373 8.47142 11.4507 7.94875 11.6C7.43675 11.7493 6.83408 11.824 6.14075 11.824H4.82875ZM4.66875 14.656C4.61542 14.72 4.54075 14.7467 4.44475 14.736C4.34875 14.736 4.26875 14.704 4.20475 14.64L3.48475 13.92C3.42075 13.856 3.38342 13.776 3.37275 13.68C3.37275 13.5947 3.41008 13.52 3.48475 13.456L4.20475 12.72C4.26875 12.656 4.34342 12.624 4.42875 12.624C4.52475 12.624 4.60475 12.656 4.66875 12.72L5.38875 13.456C5.45275 13.52 5.48475 13.5947 5.48475 13.68C5.49542 13.776 5.46875 13.8613 5.40475 13.936L4.66875 14.656ZM6.89275 14.656C6.83942 14.72 6.76475 14.7467 6.66875 14.736C6.58342 14.736 6.50342 14.704 6.42875 14.64L5.69275 13.92C5.63942 13.856 5.60742 13.776 5.59675 13.68C5.59675 13.584 5.62875 13.5093 5.69275 13.456L6.42875 12.72C6.50342 12.656 6.58342 12.624 6.66875 12.624C6.75408 12.624 6.82342 12.656 6.87675 12.72L7.59675 13.456C7.67142 13.52 7.70875 13.5947 7.70875 13.68C7.71942 13.776 7.68742 13.8613 7.61275 13.936L6.89275 14.656ZM10.4985 8.08C10.4132 8.08 10.3492 8.05333 10.3065 8C10.2638 7.94667 10.2425 7.88267 10.2425 7.808V6.096C10.2425 5.94667 10.2852 5.84533 10.3705 5.792C10.4558 5.728 10.5732 5.696 10.7225 5.696H10.8505C11.2772 5.696 11.5865 5.584 11.7785 5.36C11.9705 5.12533 12.0665 4.77333 12.0665 4.304C12.0665 4.15467 12.0558 4.01067 12.0345 3.872C12.0238 3.72267 12.0025 3.568 11.9705 3.408L11.6985 2.16C11.6665 1.98933 11.6825 1.86667 11.7465 1.792C11.8105 1.70667 11.9172 1.648 12.0665 1.616L13.1225 1.392C13.4318 1.31733 13.6238 1.44533 13.6985 1.776L14.0185 3.376C14.0718 3.61067 14.1092 3.86133 14.1305 4.128C14.1625 4.39467 14.1785 4.61867 14.1785 4.8C14.1785 5.78133 13.9332 6.576 13.4425 7.184C12.9625 7.78133 12.2425 8.08 11.2825 8.08H10.4985ZM12.2265 11.2C12.1625 11.264 12.0825 11.2907 11.9865 11.28C11.8905 11.28 11.8052 11.248 11.7305 11.184L10.9945 10.448C10.9305 10.3733 10.8985 10.288 10.8985 10.192C10.8985 10.1067 10.9305 10.0267 10.9945 9.952L11.7305 9.2C11.8052 9.136 11.8852 9.104 11.9705 9.104C12.0665 9.104 12.1465 9.136 12.2105 9.2L12.9465 9.952C13.0212 10.0267 13.0585 10.1067 13.0585 10.192C13.0692 10.288 13.0372 10.3787 12.9625 10.464L12.2265 11.2ZM14.7269 12.016C14.5669 12.016 14.4549 11.9733 14.3909 11.888C14.3162 11.8027 14.2789 11.6853 14.2789 11.536V10.272C14.2789 10.1227 14.3269 10.0107 14.4229 9.936C14.5082 9.872 14.6309 9.84 14.7909 9.84H15.1909C16.2149 9.84 16.9509 9.57333 17.3989 9.04C17.8469 8.50667 18.0709 7.76533 18.0709 6.816C18.0709 6.44267 18.0389 6.064 17.9749 5.68C17.9109 5.28533 17.8362 4.90667 17.7509 4.544L17.4469 3.2C17.4149 3.04 17.4255 2.91733 17.4789 2.832C17.5429 2.736 17.6709 2.66133 17.8629 2.608L18.8709 2.368C19.0202 2.32533 19.1269 2.32533 19.1909 2.368C19.2655 2.4 19.3189 2.45867 19.3509 2.544C19.3829 2.61867 19.4095 2.704 19.4309 2.8L19.8789 4.592C19.9429 4.88 20.0549 5.104 20.2149 5.264C20.3749 5.424 20.5615 5.536 20.7749 5.6C20.9989 5.664 21.2442 5.696 21.5109 5.696H21.8149C21.9962 5.696 22.0869 5.776 22.0869 5.936V7.6C22.0869 7.92 21.9269 8.08 21.6069 8.08C21.2015 8.08 20.8389 8.03733 20.5189 7.952C20.1989 7.856 19.9909 7.73867 19.8949 7.6C19.8735 8.18667 19.7722 8.74133 19.5909 9.264C19.4095 9.79733 19.1322 10.2667 18.7589 10.672C18.3962 11.088 17.9322 11.4133 17.3669 11.648C16.8015 11.8933 16.1295 12.016 15.3509 12.016H14.7269ZM21.6395 8.08C21.5328 8.08 21.4635 8.048 21.4315 7.984C21.3888 7.92 21.3675 7.85067 21.3675 7.776V6.112C21.3675 5.96267 21.4102 5.856 21.4955 5.792C21.5808 5.728 21.6982 5.696 21.8475 5.696H24.5835L24.3115 6.352C24.0982 6.24533 23.8795 6.096 23.6555 5.904C23.4422 5.70133 23.2608 5.44533 23.1115 5.136C22.9728 4.82667 22.9035 4.45867 22.9035 4.032C22.9035 3.27467 23.0635 2.63467 23.3835 2.112C23.7142 1.58933 24.1515 1.19467 24.6955 0.927999C25.2395 0.650666 25.8368 0.512 26.4875 0.512C26.8822 0.512 27.2715 0.554666 27.6555 0.64C28.0395 0.714667 28.4022 0.826667 28.7435 0.976C28.8822 1.02933 28.9782 1.09867 29.0315 1.184C29.0955 1.26933 29.1062 1.38133 29.0635 1.52L28.7595 2.736C28.7168 2.91733 28.6475 3.02933 28.5515 3.072C28.4662 3.11467 28.3488 3.104 28.1995 3.04C27.9755 2.93333 27.7035 2.85333 27.3835 2.8C27.0742 2.736 26.7808 2.704 26.5035 2.704C25.9595 2.704 25.5328 2.832 25.2235 3.088C24.9142 3.344 24.7595 3.67467 24.7595 4.08C24.7595 4.336 24.8448 4.576 25.0155 4.8C25.1968 5.01333 25.4422 5.18933 25.7515 5.328C26.0608 5.456 26.4128 5.52 26.8075 5.52C26.9888 5.52 27.1808 5.51467 27.3835 5.504C27.5862 5.48267 27.8475 5.44533 28.1675 5.392L29.8155 5.152C29.9648 5.13067 30.0715 5.14133 30.1355 5.184C30.2102 5.22667 30.2368 5.32267 30.2155 5.472L30.0235 7.008C30.0128 7.14667 29.9808 7.264 29.9275 7.36C29.8742 7.456 29.7515 7.51467 29.5595 7.536L27.8475 7.792C27.2715 7.87733 26.7222 7.94133 26.1995 7.984C25.6875 8.02667 25.1702 8.05333 24.6475 8.064C24.1248 8.07467 23.5542 8.08 22.9355 8.08H21.6395Z"
      fill="#23314C"
    />
  </svg>
);

export const megaMenuData_en = {
  title: "Solutions",
  sections: [
    {
      heading: "RMS",
      icon: <Icon1 />,
      links: [
        { text: "Point of Sale System (POS)", url: "/pos-system" },
        { text: "Kitchen Display (KDS)", url: "/kitchen-display" },
        { text: "Service Station Screen", url: "/service-display" },
        { text: "Tables Management", url: "/table-management" },
        { text: "E-Walkie Talkie", url: "/integrated-walkie-talkie" },
        { text: "Offline Mode", url: "/offline-mode" },
        { text: "CRM & Targeted Marketing", url: "/crm-marketing" },
        { text: "Food Aggregators", url: "/delivery-integration" },
      ],
    },
    {
      heading: "Online Service",
      icon: <Icon2 />,
      links: [
        { text: "QR Order & Pay", url: "/qr-ordering" },
        { text: "Pickup Orders", url: "/pickup-orders" },
        { text: "Social Media Ordering", url: "/social-media-ordering" },
        { text: "Delivery", url: "/home-delivery" },
        { text: "Loyalty Programs", url: "/loyalty-programs" },
        { text: "Table Reservations", url: "/table-reservations" },
      ],
    },
    {
      heading: "Inventory Management",
      icon: <Icon3 />,
      links: [
        { text: "Procurement Management", url: "/procurement-management" },
        { text: "Menu and Recipes", url: "/menu-recipes-management" },
        { text: "Stock Control", url: "/stock-control" },
        {
          text: "Warehouse, Central Kitchen, and Cloud Kitchen",
          url: "/warehouse-management",
        },
        { text: "Approval Process", url: "/approval-process" },
      ],
    },
    {
      heading: "Virtual Brand Operations System",
      icon: <Icon4 />,
      links: [
        { text: "Kitchen Multi-Brand", url: "/kitchen-multi-brand" },
        { text: "Kitchen Display (KDS)", url: "/kitchen-display" },
        { text: "Kitchen Inventory", url: "/kitchen-inventory" },
        { text: "Kitchen Menu", url: "/kitchen-menu" },
        { text: "Kitchen POS", url: "/kitchen-pos" },
        { text: "Kitchen Navigator", url: "/kitchen-navigator" },
        { text: "Kitchen Monitor", url: "/kitchen-monitor" },
        {
          text: "Kitchen Aggregators",
          url: "/kitchen-aggregators",
        },
      ],
    },
  ],
};

export const dropListData_en = {
  title: "Resources",
  menuItems: [
    { text: "Success Stories", url: "/success-stories" },
    { text: "Blog", url: "/blog" },
    { text: "Accreditation", url: "/certifications" },
    { text: "Amrk Updates", url: "/updates" },
  ],
};

export const navLinks_en = [
  { text: "Industries We Serve", url: "/business-types" },
  { text: "Licenses", url: "/licenses" },
];

export const btnGroupData_en = {
  buttons: [
    {
      type: "secondary" as "secondary",
      text: "Amrk Online",
      url: "/",
    },
    {
      type: "primary" as "primary",
      text: "Book a Demo",
      url: "/demo-schedule",
    },
  ],
  icon: {
    url: "/ar",
    source: <ArLangSwitcher />,
  },
};

export const sidebarData_en = {
  switcher: {
    url: "/ar",
    source: <ArLangSwitcher />,
  },
  solutionsMenu: {
    title: "Amrk Solutions",
    subMenus: [
      {
        title: "RMS",
        items: [
          { label: "Point of Sale System (POS)", url: "/pos-system" },
          { label: "Kitchen Display (KDS)", url: "/kitchen-display" },
          { label: "Service Station Screen", url: "/service-display" },
          { label: "Tables Management", url: "/table-management" },
          { label: "E-Walkie Talkie", url: "/integrated-walkie-talkie" },
          { label: "Offline Mode", url: "/offline-mode" },
          {
            label: "CRM & Targeted Marketing",
            url: "/crm-marketing",
          },
          { label: "Food Aggregators", url: "/delivery-integration" },
        ],
      },
      {
        title: "Online Service",
        items: [
          { label: "QR Order & Pay", url: "/qr-ordering" },
          { label: "Pickup Orders", url: "/pickup-orders" },
          {
            label: "Social Media Ordering",
            url: "/social-media-ordering",
          },
          { label: "Delivery", url: "/home-delivery" },
          { label: "Loyalty Programs", url: "/loyalty-programs" },
          { label: "Table Reservations", url: "/table-reservations" },
        ],
      },
      {
        title: "Inventory Management",
        items: [
          { label: "Procurement Management", url: "/procurement-management" },
          { label: "Menu and Recipes", url: "/menu-recipes-management" },
          { label: "Stock Control", url: "/stock-control" },
          {
            label: "Warehouse, Central Kitchen, and Cloud Kitchen",
            url: "/warehouse-management",
          },
          {
            label: "Approval Process",
            url: "/approval-process",
          },
        ],
      },
      {
        title: "Virtual Brand Operations System",
        items: [
          { label: "Kitchen Multi-Brand", url: "/kitchen-multi-brand" },
          { label: "Kitchen Display (KDS)", url: "/kitchen-display" },
          { label: "Kitchen Inventory", url: "/kitchen-inventory" },
          { label: "Kitchen Menu", url: "/kitchen-menu" },
          { label: "Kitchen POS", url: "/kitchen-pos" },
          { label: "Kitchen Navigator", url: "/kitchen-navigator" },
          { label: "Kitchen Monitor", url: "/kitchen-monitor" },
          { label: "Kitchen Rating Board", url: "/kitchen-rating" },
          {
            label: "Kitchen Aggregators",
            url: "/kitchen-aggregators",
          },
        ],
      },
    ],
  },
  resourcesMenu: {
    title: "Resources",
    items: [
      { label: "Success Stories", url: "/success-stories" },
      { label: "Blog", url: "/blog" },
      { label: "Accreditation", url: "/certifications" },
      { label: "Amrk Updates", url: "/" },
    ],
  },
  navLinks: [
    { text: "Industries We Serve", url: "/business-types" },
    { text: "Licenses", url: "/licenses" },
    { text: "Book a Demo", url: "/demo-schedule" },
    { text: "Amrk Online", url: "/online" },
  ],
  login: { text: "Log-In to Portal", flag: 1 },
};

export const mainHeaderData_en = {
  logo: <Elogo />,
  navData: {
    megaMenuData: megaMenuData_en,
    dropListData: dropListData_en,
    links: navLinks_en,
  },
  btnGroupData: btnGroupData_en,
  sidebarData: sidebarData_en,
};
