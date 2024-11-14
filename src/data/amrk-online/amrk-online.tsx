export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "طلبات الاستلام",
            description: "استلام الطلبات وتوصيلها مباشرة إلى السيارة",
            btnText: "احجز موعد للتجربة",
            image: {
                src: PosHero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "تمكين العملاء من الطلب من المنصات المختلفة",
            listItems: [
                { icon: <PosIcon1 />, text: "تجربة استلام أسرع وأكثر راحة." },
                { icon: <PosIcon2 />, text: "متكامل مع نظام نقاط البيع وشاشة المطبخ." },
                { icon: <PosIcon3 />, text: "إشعارات فورية للعملاء." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: PosScreen,
            heading: "تحقيق نتائج مميزة عبر إشعارات لحظية لعملائك بكفاءة",
            listItems: [
                "تقليل متوسط أوقات الانتظار للعملاء عبر الطلب والدفع قبل الوصول، والاستلام من السيارة.",
                "زيادة نسبة الطلبات المستلمة في الوقت المحدد لضمان المعايير العالية للخدمة.",
                "زيادة الكفاءة التشغيلية للموظفين عند استلام واستكمال طلبات العملاء بسرعة أكبر.",
                "تعزيز الرضا العام للعملاء عبر تقديم إشعارات فورية لاستفساراتهم."
            ]
        }
    }
];
