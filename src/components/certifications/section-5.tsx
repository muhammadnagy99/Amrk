import Image from 'next/image';
import C3 from '@/public/certifications/p3.png'

const contentData = {
    heading: "تعتمد الأنظمة المستخدمة لتطوير أمرك على تقنيات Google Cloud السحابية من حيث:",
    items: [
      {
        name: "الموثوقية:",
        content: "الاستفادة من مراكز البيانات والبنية التحتية من Google، مما يضمن أقصى وقت تشغيل وأداء."
      },
      {
        name: "القابلية للتوسيع:",
        content: "التعامل بسهولة مع الزيادات المفاجئة في الطلب، بفضل قدرة Google Cloud على ضبط الموارد ديناميكيًا."
      },
      {
        name: "الأمان:",
        content: "حماية البيانات باستخدام إجراءات الأمان المتقدمة من Google، بما في ذلك التشفير، وسهولة الوصول، والمراجعات الدورية."
      },
      {
        name: "السرعة:",
        content: "مع نظام الحوسبة السحابي المدعوم بشبكة الأداء العالي من Google Cloud."
      },
      {
        name: "الابتكار:",
        content: "تمكين Google Cloud من السرعة في طرح خدمات جديدة ومتنوعة، عبر خدمات المبتكرين في Google Cloud."
      }
    ]
  };
  

export default function SectionV() {
    return(
        <div className="flex flex-row justify-between w-full h-[450px]">
            <div className="flex items-start w-[30%]">
                <Image
                    src={C3}
                    width={384}
                    height={67}
                    alt={`This is alt text`}
                    placeholder="blur"
                    priority={false}
                />
            </div>

            <div className="flex flex-col justify-between h-full items-start w-[60%]">
                <h2 className="text-primText text-xl font-medium h-[10%]">
                    {contentData.heading}
                </h2>
                <ul className="h-[85%] flex flex-col gap-8 list-disc mr-10">
                    {contentData.items.map((item, index) => (
                    <li key={index} className="custom-list-item text-base font-light text-primText">
                        <span className="text-PrimBtn">{item.name}</span> {item.content}
                    </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}