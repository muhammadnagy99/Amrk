import Image from "next/image";
import BG from '@/public/bg/Mask group-2.png'
import DemoForm from "./demo-form";
import ContactUs from "./contact-us";
export default function DemoSchedule() {
    return(
        <section className="flex flex-col relative justify-start items-center w-full h-[876px] mb-[100px]">
            <div className="flex items-start justify-end w-full h-full absolute" aria-labelledby="demo-form-background">
                <div className="xl:w-[50%] w-[550px] background-1 h-[750px] absolute z-0">
                    <Image 
                        src={BG}
                        height={750}
                        width={788}
                        alt="Amrk Restaurant Systems"
                        placeholder="blur"
                        priority={true}
                    />
                </div>
            </div>
            <div className="flex flex-col md:w-[95%] w-special justify-center items-start gap-[80px] z-10 mt-[80px]" aria-labelledby="Amrk-Demo-Schedule-Form-Body">

                <div className="flex flex-col w-full h-[672px] gap-[24px]" aria-labelledby="Amrk-Demo-Schedule-Form">
                    <div className="flex flex-row w-full h-[574px] gap-[24px]">
                        <div className="flex flex-col justify-center items-start gap-[24px] h-full" aria-labelledby="Amrk-Demo-Schedule-Form-Heading">
                            <h2 className="text-5xl font-bold text-primText">
                                استمتع ببساطة أمـركـ    
                            </h2>
                            <p className="text-2xl text-primText font-normal">
                                جرب نظامنا الآن واختبر بنفسك سهولة استخدامه.
                                <br />
                                 فريقنا يسعد بالإجابة على استفساراتك في أي وقت.
                            </p>
                        </div>

                        <DemoForm />
                    </div>

                    <ContactUs />

                </div>
            

                <article className="flex flex-col gap-4">
                    <h3 className="text-primText font-semibold text-xl">
                        سياسة الخصوصية                    
                    </h3>
                    <p className="flex flex-row items-center text-xl gap-4">
                        تلتزم أمرك بحماية خصوصيتك. لن نقوم بأي حال من الأحوال بمشاركة معلوماتك الشخصية مع أي طرف ثالث دون موافقتك.
                    </p>
                </article>
            </div>
        </section>
    );
}