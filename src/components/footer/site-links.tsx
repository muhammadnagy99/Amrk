export default function SiteLinks() {
    const navLinks = [
        {
            title: "نظام إدارة المطاعم",
            items: [
                "نظام نقاط البيع",
                "شاشة المطبخ",
                "شاشة الخدمات",
                "إدارة الطاولات",
                "ووكي توكي مدمج",
                "وضع عدم الإتصال",
                "إدارة علاقات العملاء وعمل حملات تسويقية",
                "الربط مع تطبيقات التوصيل"
            ]
        },
        {
            title: "حلول أمـركـ أونلاين",
            items: [
                "الطلب والدفع عبر (QR)",
                "طلبات الاستلام",
                "الطلب عبر وسائل التواصل الاجتماعي",
                "التوصيل إلى المنزل",
                "برامج الولاء",
                "حجوزات الطاولات"
            ]
        },
        {
            title: "إدارة متطورة للمخزون",
            items: [
                "إدارة المشتريات",
                "إدارة المنيو والوصفات",
                "التحكم الشامل في المخزون",
                "إدارة المستودعات، المطابخ المركزية، والمطابخ السحابية",
                "صلاحيات الموافقات الإلكترونية"
            ]
        },
        {
            title: "تشغيل المطابخ السحابية",
            items: [
                "علامات متعددة في مطبخك",
                "شاشة واحدة لمطبخك",
                "مخزون مطبخك",
                "قوائم طعام مطبخك",
                "نظام نقاط بيع مطبخك",
                "دليل تعليمي لمطبخك",
                "مراقبة مطبخك",
                "لوحة تقييم مطبخك",
                "ربط تطبيقات التوصيل بمطبخك",
                ""
            ]
        },
        {
            title: "قطاعات نخدمتها",
            items: [
                "مطاعم ومقاهي",
                "مطابخ سحابية",
                "عربات الطعام",
                "خدمة على الطاولة",
                "الخدمة السريعة",
                "توفير الطعام",
                "مانحي الامتياز",
                "قطاعات التجزئة"
            ]
        },
        {
            title: "الموارد",
            items: [
                "قصص نجاح",
                "المدونة",
                "الاعتمادات",
                "تحديثات أمرك"
            ],
            additionalSection: {
                title: "الباقات",
                items: ["باقات أمرك"]
            }
        }
    ];
    
    return (
        <div className="grid grid-cols-6 gap-[24px] site-links-padding">
            {navLinks.map((nav, index) => (
                <nav key={index} aria-labelledby={`footer footer-links-${index}`} className="flex flex-col gap-[12px]">
                    <h2 className="text-SecTextV1 text-base hover:text-PrimBtn">{nav.title}</h2>
                    <ul className="flex flex-col gap-[12px]">
                        {nav.items.map((item, i) => (
                            <li key={i} className="text-SecTextV2 text-[14px] font-light">
                                {item}
                            </li>
                        ))}
                    </ul>

                    {nav.additionalSection && (
                        <nav className="flex flex-col gap-[12px] pt-[64px]">
                            <h2 className="text-SecTextV1 text-base hover:text-PrimBtn">{nav.additionalSection.title}</h2>
                            <ul className="flex flex-col gap-[12px]">
                                {nav.additionalSection.items.map((item, i) => (
                                    <li key={i} className="text-SecTextV2 text-[14px] font-light">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </nav>
            ))}
        </div>
    );
}
