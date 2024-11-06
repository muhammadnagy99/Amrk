import GCloud from '@/public/certifications/field-lists/google-cloud.png';
import Firebase from '@/public/certifications/field-lists/firebase.png';
import NextJs from '@/public/certifications/field-lists/nextjs.png'
import Angular from '@/public/certifications/field-lists/angular.png';
import Flutter from '@/public/certifications/field-lists/flutter.png';
import FieldList from './field-list';
const fieldLists = [
    {
        legendText: 'البنية التحتية والاستضافة',
        images: [
            { src: GCloud, alt: 'Google Cloud', width: 262, height: 40 }
        ]
    },
    {
        legendText: 'قاعدة البيانات',
        images: [
            { src: Firebase, alt: 'Firebase', width: 151, height: 40 }
        ]
    },
    {
        legendText: 'البرمجة',
        images: [
            { src: Flutter, alt: 'Flutter', width: 138, height: 40 },
            { src: NextJs, alt: 'NextJs', width: 138, height: 40 },
            { src: Angular, alt: 'Angular', width: 128, height: 40 }
        ]
    }
];

export default function SectionVI() {
    return (
        <div className="flex flex-col w-full gap-[70px]"> 
            <article className="flex flex-col w-full items-center justify-center">
                <h2 className="text-[32px] font-semibold text-primText">
                    بنية تقنية موثوقة لتجربة سلسة                
                </h2>
                <p className="text-primText text-base font-normal">
                    تعتمد حلولنا على أحدث التقنيات لضمان أداء عالي وأمان متقدم
                </p>
            </article>

            <div className="w-full flex flex-col gap-9">
                <div className="flex flex-row w-full justify-between">
                    <div className="w-[55%] flex justify-center items-center">
                        <FieldList
                            legendText={fieldLists[0].legendText}
                            images={fieldLists[0].images}
                        />
                    </div>
                    <div className="w-[43%] flex justify-center items-center">
                        <FieldList
                            legendText={fieldLists[1].legendText}
                            images={fieldLists[1].images}
                        />
                    </div>
                </div>

                <div className="flex flex-row w-full mt-[20px]">
                    <FieldList
                        legendText={fieldLists[2].legendText}
                        images={fieldLists[2].images}
                    />
                </div>
            </div>
        </div>
    );
}
