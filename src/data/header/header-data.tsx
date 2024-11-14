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
        { text: "الربط مع تطبيقات التوصيل", url: "/delivery-app-integration" },
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
        { text: "إدارة المشتريات والموارد", url: "/procurement-management" },
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
      heading: "نظام المطابخ السحابية",
      icon: <Icon4 />,
      links: [
        { text: "علامات متعددة في مطبخك", url: "/kitchen-multi-brand" },
        { text: "شاشة واحدة لمطبخك", url: "/kitchen-display" },
        { text: "مخزون مطبخك", url: "/kitchen-inventory" },
        { text: "قوائم طعام مطبخك", url: "/kitchen-menus" },
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
  { text: "الباقات", url: "/pricing" },
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
    icon: <EnLangSwitcher />,
    url: "/en",
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
          { label: "إدارة المشتريات", url: "/procurement-management" },
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
        title: "تشغيل المطابخ السحابية",
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
    { text: "الباقات", url: "/pricing" },
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
    width="17"
    height="13"
    viewBox="0 0 17 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.937812 12.016C0.777812 12.016 0.665812 11.9733 0.601812 11.888C0.527146 11.8027 0.489812 11.6853 0.489812 11.536V10.272C0.489812 10.1227 0.537812 10.0107 0.633812 9.936C0.719146 9.872 0.841812 9.84 1.00181 9.84H1.40181C2.42581 9.84 3.16181 9.57333 3.60981 9.04C4.05781 8.50667 4.28181 7.76533 4.28181 6.816C4.28181 6.44267 4.24981 6.064 4.18581 5.68C4.12181 5.28533 4.04715 4.90667 3.96181 4.544L3.65781 3.2C3.62581 3.04 3.63648 2.91733 3.68981 2.832C3.75381 2.736 3.88181 2.66133 4.07381 2.608L5.08181 2.368C5.23115 2.32533 5.33781 2.32533 5.40181 2.368C5.47648 2.4 5.52981 2.45867 5.56181 2.544C5.59381 2.61867 5.62048 2.704 5.64181 2.8L6.08981 4.592C6.15381 4.88 6.26581 5.104 6.42581 5.264C6.58581 5.424 6.77248 5.536 6.98581 5.6C7.20981 5.664 7.45515 5.696 7.72181 5.696H8.02581C8.20715 5.696 8.29781 5.776 8.29781 5.936V7.6C8.29781 7.92 8.13781 8.08 7.81781 8.08C7.41248 8.08 7.04981 8.03733 6.72981 7.952C6.40981 7.856 6.20181 7.73867 6.10581 7.6C6.08448 8.18667 5.98315 8.74133 5.80181 9.264C5.62048 9.79733 5.34315 10.2667 4.96981 10.672C4.60715 11.088 4.14315 11.4133 3.57781 11.648C3.01248 11.8933 2.34048 12.016 1.56181 12.016H0.937812ZM7.85044 8.08C7.74377 8.08 7.67444 8.048 7.64244 7.984C7.59977 7.92 7.57844 7.85067 7.57844 7.776V6.112C7.57844 5.96267 7.6211 5.856 7.70644 5.792C7.79177 5.728 7.9091 5.696 8.05844 5.696H10.7944L10.5224 6.352C10.3091 6.24533 10.0904 6.096 9.86644 5.904C9.6531 5.70133 9.47177 5.44533 9.32244 5.136C9.18377 4.82667 9.11444 4.45867 9.11444 4.032C9.11444 3.27467 9.27444 2.63467 9.59444 2.112C9.9251 1.58933 10.3624 1.19467 10.9064 0.927999C11.4504 0.650666 12.0478 0.512 12.6984 0.512C13.0931 0.512 13.4824 0.554666 13.8664 0.64C14.2504 0.714667 14.6131 0.826667 14.9544 0.976C15.0931 1.02933 15.1891 1.09867 15.2424 1.184C15.3064 1.26933 15.3171 1.38133 15.2744 1.52L14.9704 2.736C14.9278 2.91733 14.8584 3.02933 14.7624 3.072C14.6771 3.11467 14.5598 3.104 14.4104 3.04C14.1864 2.93333 13.9144 2.85333 13.5944 2.8C13.2851 2.736 12.9918 2.704 12.7144 2.704C12.1704 2.704 11.7438 2.832 11.4344 3.088C11.1251 3.344 10.9704 3.67467 10.9704 4.08C10.9704 4.336 11.0558 4.576 11.2264 4.8C11.4078 5.01333 11.6531 5.18933 11.9624 5.328C12.2718 5.456 12.6238 5.52 13.0184 5.52C13.1998 5.52 13.3918 5.51467 13.5944 5.504C13.7971 5.48267 14.0584 5.44533 14.3784 5.392L16.0264 5.152C16.1758 5.13067 16.2824 5.14133 16.3464 5.184C16.4211 5.22667 16.4478 5.32267 16.4264 5.472L16.2344 7.008C16.2238 7.14667 16.1918 7.264 16.1384 7.36C16.0851 7.456 15.9624 7.51467 15.7704 7.536L14.0584 7.792C13.4824 7.87733 12.9331 7.94133 12.4104 7.984C11.8984 8.02667 11.3811 8.05333 10.8584 8.064C10.3358 8.07467 9.7651 8.08 9.14644 8.08H7.85044Z"
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
      heading: "Cloud Kitchen System",
      icon: <Icon4 />,
      links: [
        { text: "Kitchen Multi-Brand", url: "/kitchen-multi-brand" },
        { text: "Kitchen Display (KDS)", url: "/kitchen-display" },
        { text: "Kitchen Inventory", url: "/kitchen-inventory" },
        { text: "Kitchen Menu", url: "/kitchen-menus" },
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
  { text: "Pricing", url: "/pricing" },
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
    icon: <ArLangSwitcher />,
    url: "/ar",
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
        title: "Cloud Kitchen System",
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
      { label: "Amrk Updates", url: "/updates" },
    ],
  },
  navLinks: [
    { text: "Sectors We Serve", url: "/business-types" },
    { text: "Pricing", url: "/pricing" },
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
