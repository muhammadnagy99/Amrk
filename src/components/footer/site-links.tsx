export default function SiteLinks() {
    const navLinks = [
        {
            title: "نظام إدارة المطاعم",
            items: [
                { label: "نظام نقاط البيع", url: "/pos-system" },
                { label: "شاشة المطبخ", url: "/kitchen-display" },
                { label: "شاشة الخدمات", url: "/service-display" },
                { label: "إدارة الطاولات", url: "/table-management" },
                { label: "ووكي توكي مدمج", url: "/integrated-walkie-talkie" },
                { label: "وضع عدم الإتصال", url: "/offline-mode" },
                { label: "إدارة علاقات العملاء وعمل حملات تسويقية", url: "/crm-marketing" },
                { label: "الربط مع تطبيقات التوصيل", url: "/delivery-integration" }
            ]
        },
        {
            title: "حلول أمـركـ أونلاين",
            items: [
                { label: "الطلب والدفع عبر (QR)", url: "/qr-ordering" },
                { label: "طلبات الاستلام", url: "/pickup-orders" },
                { label: "الطلب عبر وسائل التواصل الاجتماعي", url: "/social-media-ordering" },
                { label: "التوصيل إلى المنزل", url: "/home-delivery" },
                { label: "برامج الولاء", url: "/loyalty-programs" },
                { label: "حجوزات الطاولات", url: "/table-reservations" }
            ]
        },
        {
            title: "تشغيل المطابخ السحابية",
            items: [
                { label: "علامات متعددة في مطبخك", url: "/multi-brands-kitchen" },
                { label: "شاشة واحدة لمطبخك", url: "/single-kitchen-display" },
                { label: "مخزون مطبخك", url: "/kitchen-inventory" },
                { label: "قوائم طعام مطبخك", url: "/kitchen-menu" },
                { label: "نظام نقاط بيع مطبخك", url: "/kitchen-pos-system" },
                { label: "دليل تعليمي لمطبخك", url: "/kitchen-tutorial" },
                { label: "مراقبة مطبخك", url: "/kitchen-monitoring" },
                { label: "لوحة تقييم مطبخك", url: "/kitchen-rating" },
                { label: "ربط تطبيقات التوصيل بمطبخك", url: "/kitchen-delivery-integration" }
            ]
        },
        {
            title: "إدارة متطورة للمخزون",
            items: [
                { label: "إدارة المشتريات", url: "/purchase-management" },
                { label: "إدارة المنيو والوصفات", url: "/menu-recipes-management" },
                { label: "التحكم الشامل في المخزون", url: "/inventory-control" },
                { label: "إدارة المستودعات، المطابخ المركزية، والمطابخ السحابية", url: "/warehouse-management" },
                { label: "صلاحيات الموافقات الإلكترونية", url: "/approval-permissions" }
            ]
        },
        {
            title: "قطاعات نخدمتها",
            items: [
                { label: "مطاعم ومقاهي", url: "/restaurants-cafes" },
                { label: "مطابخ سحابية", url: "/cloud-kitchens" },
                { label: "عربات الطعام", url: "/food-trucks" },
                { label: "خدمة على الطاولة", url: "/table-service" },
                { label: "الخدمة السريعة", url: "/quick-service" },
                { label: "توفير الطعام", url: "/food-provision" },
                { label: "مانحي الامتياز", url: "/franchise" },
                { label: "قطاعات التجزئة", url: "/retail-sectors" }
            ]
        },
        {
            title: "الموارد",
            items: [
                { label: "قصص نجاح", url: "/success-stories" },
                { label: "المدونة", url: "/blog" },
                { label: "الاعتمادات", url: "/certifications" },
                { label: "تحديثات أمرك", url: "/updates" }
            ],
            additionalSection: {
                title: "الباقات",
                items: [
                    { label: "باقات أمرك", url: "/pricing" }
                ]
            }
        }
    ];
    
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[24px] site-links-padding">
            {navLinks.map((nav, index) => (
                <nav key={index} aria-labelledby={`footer footer-links-${index}`} className="flex flex-col gap-[12px]">
                    <h2 className="text-SecTextV1 text-base">{nav.title}</h2>
                    <ul className="flex flex-col gap-[12px]">
                        {nav.items.map((item, i) => (
                            <li key={i} className="text-SecTextV2 text-[14px] font-light">
                                <a href={item.url} className="text-SecTextV2 text-[14px] font-light hover:text-PrimBtn">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {nav.additionalSection && (
                        <nav className="flex flex-col gap-[12px] pt-[64px]">
                            <h2 className="text-SecTextV1 text-base">{nav.additionalSection.title}</h2>
                            <ul className="flex flex-col gap-[12px]">
                                {nav.additionalSection.items.map((item, i) => (
                                    <li key={i} className="text-SecTextV2 text-[14px] font-light">
                                        <a href={item.url} className="text-SecTextV2 text-[14px] font-light hover:text-PrimBtn">
                                            {item.label}
                                        </a>
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
