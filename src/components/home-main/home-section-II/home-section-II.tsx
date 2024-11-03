import Image from "next/image";
import screen1 from '@/public/screens/pos_screen.png';
import BG from '@/public/bg/BG.png'

export default function HomeSectionII() {
    return(
<<<<<<< HEAD
        <div className="flex flex-col md:w-[95%] w-special h-[880px] justify-center items-center gap-[56px]" aria-labelledby="Amrk-Served-Sectors">
=======
        <div className="flex flex-col md:w-[95%] w-special h-[880px] justify-center items-center gap-[56px]">
>>>>>>> 3ee2b89 (Home Page V1)
             <div className="flex flex-col w-full justify-center items-center text-primText gap-[24px]">
                <h1>
                    قطاعات نختص بخدمتها
                </h1>
                <p>
                    حلول مصممة خصيصًا لتلبية احتياجاتكم وتعزيز نجاح أعمالكم  
                </p>
            </div>

            <div className="flex flex-col w-full gap-[80px]">
                <div className="section-bar flex flex-row items-center w-full h-[80px] rounded-[80px] p-4 gap-[16px]">
                    <button className="w-[183px] h-[48px] text-xl md:text-lg text-SecTextV2 bg-primText font-medium rounded-[40px]">
                        مطاعم ومقاهي
                    </button>

                    <button className="w-[183px] h-[48px] text-xl md:text-lg text-gray-500 rounded-[40px]">
                        مطابخ سحابية    
                    </button>

                    <button className="w-[183px] h-[48px] text-xl md:text-lg text-gray-500 rounded-[40px]">
                        عربات الطعام     
                    </button>

                    <button className="w-[183px] h-[48px] text-xl md:text-lg text-gray-500 rounded-[40px]">
                        خدمة على الطاولة
                    </button>

                    <button className="w-[183px] h-[48px] text-xl md:text-lg text-gray-500 rounded-[40px]">
                        الخدمة السريعة
                    </button>

                    <button className="w-[183px] h-[48px] text-xl md:text-lg text-gray-500 rounded-[40px]">
                        توريد الطعام
                    </button>
                </div>

                <div className="relative h-[480px]">
                    <div className="w-full bg-primText h-[320px] rounded-3xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0">
                            <Image 
                                src={BG}
                                fill
                                alt="Amrk Restaurant Systems"
                                placeholder="blur"
                                priority={false}
                            />
                    </div>
                    <div className="flex flex-row absolute z-1 h-full justify-around w-full">
                        
                        <div className="flex h-full items-end pb-[42px]">
                            <section className="screen-card rounded-3xl w-[440px] h-[255px] bg-white">
                                <article className="flex flex-col p-[24px] gap-[16px]">
                                    <h2 className="text-primText">
                                        مطاعم ومقاهي    
                                    </h2>
                                    <p className="text-primText">
                                        تبسيط العمليات من خلال نظام نقاط البيع وإدارة المخزون، وتوفير تجربة ممتعة للعملاء، مع حلول إدارة المطاعم الشاملة من أمرك.
                                    </p>
                                </article>

                                <div className="flex flex-row items-center justify-end pl-[24px] text-PrimBtn">
                                    <span className="text-base font-medium">
                                        معرفة المزيد      
                                    </span>
                                    
                                    <svg className="m-special" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.26389 5.3517C0.0949211 5.52072 -2.73199e-07 5.74993 -2.62752e-07 5.98892C-2.52306e-07 6.22792 0.0949212 6.45713 0.26389 6.62615L5.36258 11.7248C5.44573 11.8109 5.54518 11.8796 5.65514 11.9268C5.76511 11.9741 5.88338 11.9989 6.00305 12C6.12273 12.001 6.24141 11.9782 6.35218 11.9329C6.46294 11.8876 6.56358 11.8206 6.6482 11.736C6.73283 11.6514 6.79975 11.5508 6.84507 11.44C6.89039 11.3292 6.9132 11.2105 6.91216 11.0909C6.91112 10.9712 6.88625 10.8529 6.83902 10.743C6.79178 10.633 6.72311 10.5335 6.63703 10.4504L3.07687 6.89023L19.0987 6.89023C19.3377 6.89023 19.567 6.79527 19.736 6.62624C19.905 6.45722 20 6.22796 20 5.98892C20 5.74988 19.905 5.52063 19.736 5.3516C19.567 5.18258 19.3377 5.08762 19.0987 5.08762L3.07687 5.08762L6.63703 1.52745C6.80121 1.35747 6.89206 1.12979 6.89 0.893475C6.88795 0.657156 6.79316 0.431096 6.62605 0.263986C6.45894 0.0968768 6.23288 0.00208637 5.99656 3.31165e-05C5.76024 -0.00202013 5.53257 0.0888259 5.36258 0.253007L0.26389 5.3517Z" fill="#B0438A"/>
                                    </svg>
                                </div>

                            </section>
                        </div>
                        
                        <figure>
                            <Image 
                                src={screen1}
                                width={480}
                                height={490}
                                alt="Amrk Restaurant Systems"
                                placeholder="blur"
                                priority={false}
                            />
                            <figcaption className="hidden">Amrk Restaurant Systems</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            
        </div>
    );
}