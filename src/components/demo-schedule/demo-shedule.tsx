import Image, {StaticImageData} from "next/image";
import DemoForm from "./demo-form";
import ContactUs from "./contact-us";

interface DemoScheduleProps {
    content: {
        backgroundImage: {
            src: StaticImageData;
            alt: string;
        };
        heading: string;
        description: string;
        privacyPolicy: {
            title: string;
            text: string;
        };
        demoFormContent: {
            labels: {
                name: string;
                phone: string;
                email: string;
                restaurantName: string;
                branches: string;
                countryPlaceholder: string;
                submit: string;
                successMessage: string;
            };
            branchOptions: {
                value: string;
                label: string;
            }[];
            lang: "en" | "ar"
        };
    };
}


export default function DemoSchedule({ content }: DemoScheduleProps) {
    return (
        <section className="flex flex-col relative justify-start items-center w-full md:h-[876px] mb-10 md:mb-[100px]">
            <div className="flex items-start justify-end w-full h-full absolute" aria-labelledby="demo-form-background">
                <div className="w-full xl:w-[45%] md:w-[550px] background-1 h-[570px] md:h-[750px] absolute z-0 bottom-[270px] md:bottom-auto">
                    <Image 
                        src={content.backgroundImage.src}
                        height={750}
                        width={788}
                        alt={content.backgroundImage.alt}
                        placeholder="blur"
                        priority={true}
                    />
                </div>
            </div>
            <div className="flex flex-col w-[88%] md:max-w-[1200px] justify-center items-start gap-10 md:gap-[80px] z-10 mt-10 md:mt-[80px]" aria-labelledby="Amrk-Demo-Schedule-Form-Body">
                <div className="flex flex-col w-full md:h-[672px] gap-[20px]" aria-labelledby="Amrk-Demo-Schedule-Form">
                    <div className="flex flex-col md:flex-row w-full md:h-[574px] gap-[24px]">
                        <div className="flex flex-col justify-center items-start gap-4 md:gap-[24px] h-full" aria-labelledby="Amrk-Demo-Schedule-Form-Heading">
                            <h2 className="w-full text-xl md:text-5xl font-bold text-primText">
                                {content.heading}
                            </h2>
                            <p className="w-full text-sm md:text-2xl text-primText font-normal">
                                {content.description}
                            </p>
                        </div>

                        <DemoForm content={content.demoFormContent} />
                    </div>

                    <ContactUs lang={content.demoFormContent.lang} />
                </div>

                <article className="flex flex-col gap-4">
                    <h3 className="text-primText font-semibold text-xl">
                        {content.privacyPolicy.title}
                    </h3>
                    <p className="flex flex-row items-center text-base md:text-xl gap-4">
                        {content.privacyPolicy.text}
                    </p>
                </article>
            </div>
        </section>
    );
}
