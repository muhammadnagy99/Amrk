import Image from 'next/image';
import BG from '@/public/bg/Mask group.png'

export default function PromoSection() {
    return(
        <div className="flex flex-row w-full justify-center content-center h-[360px] relative" aria-labelledby="Amrk-Demo-Promotion-Section">
             <div className="w-full background-1 h-[360px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0">
                <Image 
                    src={BG}
                    width={1440}
                    height={360}
                    alt="Amrk Restaurant Systems"
                    placeholder="blur"
                    priority={false}
                />
            </div>
            <div className="flex flex-row md:w-[95%] w-special justify-between content-center items-center z-10">
                <h1 className="text-4xl w-[430px] leading-normal text-primText">
                    اكتشف أمـركـ
                    <br></br>
                    وابدأ إدارة أسهل
                </h1>

                <a href="/demo-schedule" className="hover:before:bg-PrimBtn relative flex items-center justify-center w-[243px] h-[72px] rounded-2xl text-PrimBtn overflow-hidden border-2 border-PrimBtn bg-transparent px-3 transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-PrimBtn before:transition-all before:duration-500 hover:text-white hover:before:right-0 hover:before:w-full">
                    <span className="relative z-10 font-semibold text-xl">
                        ابدأ باستخدام أمرك
                    </span>
                </a>
            </div>
            
        </div>
    );
}

