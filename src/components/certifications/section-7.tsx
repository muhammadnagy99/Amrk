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
import Ministry from '@/public/certifications/field-lists/ministry.png'
import FieldList from './field-list';

const fieldLists = [
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
];

export default function SectionVII() {
    return (
        <div className="flex flex-col w-full gap-8 md:gap-[70px]"> 
            <article className="flex flex-col w-full items-center justify-center gap-2">
                <h2 className="text-xl md:text-[32px] text-center font-semibold text-primText">
                    بنية تقنية موثوقة لتجربة سلسة                
                </h2>
                <p className="text-primText text-center text-sm md:text-base font-normal">
                    تعتمد حلولنا على أحدث التقنيات لضمان أداء عالي وأمان متقدم
                </p>
            </article>

            <div className="w-full flex flex-col gap-4 md:gap-12">
                <div className="flex flex-row w-full mt-[20px]">
                    <FieldList
                        legendText={fieldLists[0].legendText}
                        images={fieldLists[0].images}
                    />
                </div>

                <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                    <div className="w-full md:w-[49%] flex justify-center items-center">
                        <FieldList
                            legendText={fieldLists[1].legendText}
                            images={fieldLists[1].images}
                        />
                    </div>
                    <div className="w-full md:w-[49%] flex justify-between items-center">
                        <div className="w-[49%] flex justify-center items-center">
                            <FieldList
                                legendText={fieldLists[2].legendText}
                                images={fieldLists[2].images}
                            />
                        </div>
                        <div className="w-[49%] flex justify-center items-center">
                            <FieldList
                                legendText={fieldLists[3].legendText}
                                images={fieldLists[3].images}
                            />
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row w-full justify-between">
                    <div className="w-full md:w-[49%] flex justify-center items-center">
                        <FieldList
                            legendText={fieldLists[4].legendText}
                            images={fieldLists[4].images}
                        />
                    </div>
                    <div className="w-full md:w-[49%] flex justify-center items-center">
                        <FieldList
                            legendText={fieldLists[5].legendText}
                            images={fieldLists[5].images}
                        />
                    </div>
                </div>

               
            </div>
        </div>
    );
}
