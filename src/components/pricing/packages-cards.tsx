import PackageCard from "./pckg-card"

interface Package {
    title: string;
    description: string;
    buttonText: string;
    buttonVariant?: 'primary' | 'outline';
    highlight?: boolean;
  }

const packages: Package[] = [
    {
      title: 'مطعمك الإلكتروني',
      description:
        'لتعزيز حضورك على الإنترنت، مع ميزات متكاملة للمبيعات الإلكترونية، وإدارة الطلبات، والدفع الإلكتروني، والتوصيل.',
      buttonText: 'مجاناً',
      buttonVariant: 'primary',
      highlight: false,
    },
    {
      title: 'الخدمة المتنقلة',
      description:
        'للأعمال المتنقلة مثل عربات الطعام والمطاعم المؤقتة، أو بيع الوجبات من المنزل. يوفر حلولاً متنقلة ومبسطة لاستلام الطلبات والمدفوعات.',
      buttonText: 'تواصل مع المبيعات',
      buttonVariant: 'outline',
      highlight: false,
    },
    {
      title: 'الخدمة السريعة',
      description:
        'للمطاعم السريعة والمقاهي، مع ميزات لتعزيز السرعة والكفاءة في خدمة العملاء، وتحديث الطلبات وإدارة الطلبات لحظياً.',
      buttonText: 'تواصل مع المبيعات',
      buttonVariant: 'outline',
      highlight: false,
    },
    {
      title: 'الخدمة على الطاولة',
      description:
        'للمطاعم ذات الخدمة الكاملة، حيث يتم تقديم حلول متقدمة لإدارة الأقسام الداخلية والخارجية للمطعم، لتسهيل معالجة الطلبات وتنسيق تجربة تناول الطعام.',
      buttonText: 'تواصل مع المبيعات',
      buttonVariant: 'outline',
      highlight: false,
    },
    {
      title: 'المطابخ السحابية',
      description:
        'للمطابخ السحابية والمطابخ المركزية، إدارة متكاملة للعمليات التجارية المتعددة من موقع واحد، مثل استقبال الطلبات، وتشغيل العمل في المطبخ، وتنسيق عمليات التوصيل.',
      buttonText: 'تواصل مع المبيعات',
      buttonVariant: 'outline',
      highlight: true,
    },
];

  
export default function PackagesCards() {
    return(
        <div className="flex flex-row xl:justify-end p-2 md:p-0 gap-2 xl:gap-4 sticky pt-4 md:pt-7 top-[64px] md:top-[104px] z-10 bg-white">
            {packages.map((pkg, index) => (
                <PackageCard
                    key={index}
                    title={pkg.title}
                    description={pkg.description}
                    buttonText={pkg.buttonText}
                    buttonVariant={pkg.buttonVariant}
                    highlight={pkg.highlight}
                />
            ))}
        </div>
    );
}