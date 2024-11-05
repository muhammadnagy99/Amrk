import React from "react";
import AccordionElement from "./accordion-element";
import AccordionRow from "./accordion-row";

export default function AccordionContainer() {
    const accordionData = [
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
      

  return (
    <div className="flex flex-col gap-4">
      {accordionData.map((item, index) => {
        if (item.type === "accordion") {
          // Render as an accordion section
          return (
            <AccordionElement key={index} title={item.title} rows={item.rows} />
          );
        } else if (item.type === "simpleRow") {
          // Render standalone rows
          return (
            <div key={index} className="flex flex-col gap-2">
              {item.rows.map((row, rowIndex) => (
                <AccordionRow
                  key={rowIndex}
                  rowTitle={row.rowTitle}
                  iconStates={row.iconStates}
                  type="simpleRow"
                />
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
