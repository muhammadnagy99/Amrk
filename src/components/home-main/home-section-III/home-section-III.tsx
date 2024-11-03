import React from "react";
import PrimaryLine from "../../assets/primary-line";

export default function HomeSectionIII() {
    const articlesData = [
        {
            id: 1,
            title: "نظام إدارة المطاعم الشامل",
            content: [
                { text: "منصة موحدة", highlight: true },
                { text: " لإدارة العمليات، الطلبات، المخزون، والمزيد. تدمج أمرك وظائف متعددة في ", highlight: false },
                { text: "نظام سهل الاستخدام", highlight: true },
                { text: " ، مما يسمح لأصحاب المطاعم بالتركيز على أعمالهم الأساسية دون الحاجة للتعامل مع عدة حلول برمجية.", highlight: false }
            ]
        },
        {
            id: 2,
            title: "تيسير العمليات",
            content: [
                { text: "دمج جميع أدوات التشغيل", highlight: true },
                { text: " في منصة أمرك الشاملة لتعزيز الإنتاجية وتقليل التكاليف. كلما كان لديك نقطة اتصال واحدة للمخزون، وخدمات التوصيل يضمن ", highlight: false },
                { text: "سر العمليات بسلاسة", highlight: true },
                { text: " وتحسين تجربة العملاء.", highlight: false }
            ]
        },
        {
            id: 3,
            title: "حلول قابلة للتخصيص",
            content: [
                { text: "قم بتخصيص أدواتك", highlight: true },
                { text: " لتلبية احتياجات أعمالك، سواء كنت تدير مطعماً، أو مقهى، أو مطبخ سحابي. يوفر أمرك حلولاً على درجة عالية من التكيف مع متطلباتك الخاصة، مما يجعل عملية تشغيل سلسة.", highlight: false }
            ]
        },
        {
            id: 4,
            title: "واجهة سهلة الاستخدام",
            content: [
                { text: "تصميم بديهي سهل على الموظفين التعامل معه، تقليل الحاجة إلى منحنى التعلم للموظفين الجدد، مما ", highlight: false },
                { text: "يرفع إنتاجيتهم", highlight: true },
                { text: " ويسرع أداء العمل.", highlight: false }
            ]
        },
        {
            id: 5,
            title: "مناسب للمطابخ السحابية",
            content: [
                { text: "مصمم لدعم العمليات متعددة القنوات المباشرة وتوسيع إدارة المطابخ السحابية، يوفر أدوات لتنسيق الطلبات على مستوى عالٍ، في جميع نقاط الطلب. مع سهولة ", highlight: false },
                { text: "سير العمل", highlight: true },
                { text: " وزيادة المرونة في البيانات ذات الطلب العالي.", highlight: false }
            ]
        },
        {
            id: 6,
            title: "إدارة متقدمة للمخزون",
            content: [
                { text: "تتبع المخزون والسيطرة عليه بسهولة عبر أدوات مخصصة للمطاعم والمطابخ السحابية، مما يساعد على ", highlight: false },
                { text: "الحفاظ على مستويات مخزون مثالية", highlight: true },
                { text: " وتقليل الهدر وتخفيض تكاليف المواد على مدار العام.", highlight: false }
            ]
        },
        {
            id: 7,
            title: "أدوات CRM مخصصة",
            content: [
                { text: "بناء علاقات دائمة مع ", highlight: false },
                { text: "أدوات تفاعل العملاء", highlight: true },
                { text: " المخصصة. تتيح لك أدوات CRM هذه المرونة بحيث يمكنك ", highlight: false },
                { text: "بناء خدمات متميزة", highlight: true },
                { text: " لتعزيز ولاء العملاء، وتعزيز أداء أعمالك عبر استهداف أوسع للعملاء وتكرارهم.", highlight: false }
            ]
        }
    ];
    
    
    return(
        <div className="flex flex-col md:w-[95%] w-special justify-center items-center gap-[80px] mb-[100px]" aria-labelledby="Amrk-solution-and-advantages">
            <header className="flex flex-row w-full justify-center">
                <h1 className="w-1/2 text-5xl md:text-4xl font-medium leading-normal text-primText">
                    حل شامل لإدارة وتبسيط جميع جوانب مطعمك.
                </h1>

                <p className="flex font-normal items-baseline w-1/2 text-primText">
                    نظام أمرك يقدم حلاً متكاملاً لتسهيل إدارة عمليات مطعمك بمرونة وكفاءة. من استلام الطلبات إلى إدارة المخزون والمدفوعات، كل ما تحتاجه في مكان واحد.
                </p>
            </header>
            <section className="flex flex-col w-full gap-[32px]">
                <PrimaryLine />
                {articlesData.map((article) => (
                    <React.Fragment key={article.id}>
                        <article className="flex flex-row w-full">
                            <div className="flex flex-row items-baseline gap-[24px] w-1/2">
                                <div className="flex items-center justify-center w-8 h-8 rounded border-2 border-[#b0438a] bg-white text-PrimBtn">
                                    <p className="text-xl">{article.id}</p>
                                </div>
                                <h2 className="text-[32px] font-normal text-primText">
                                    {article.title}
                                </h2>
                            </div>
                            <p className="items-center w-1/2 text-primText">
                                {article.content.map((part, index) => 
                                    part.highlight ? (
                                        <strong key={index} className="text-PrimBtn">
                                            {part.text}
                                        </strong>
                                    ) : (
                                        <span key={index}>{part.text}</span>
                                    )
                                )}
                            </p>
                        </article>
                        <PrimaryLine />
                    </React.Fragment>
                ))}
                <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row items-center pl-[24px] text-PrimBtn gap-4">
                        <span className="text-base font-medium">
                            عرض أقل 
                        </span>
                                            
                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L1 0.999999" stroke="#B0438A" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M13 1L1 0.999999" stroke="#B0438A" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
            </section>

        </div>
    );
}