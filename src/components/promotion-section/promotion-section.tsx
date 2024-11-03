import Image from 'next/image';
import BG from '@/public/bg/Mask group.png'

export default function PromoSection() {
    return(
        <div className="flex flex-row w-full justify-center content-center h-[360px] relative" aria-labelledby="Amrk-Demo-Promotion-Section">
             <div className="w-full background-1 h-[360px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0">
                <Image 
                    src={BG}
                    fill
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

                <button className="flex items-center justify-center w-[243px] h-[72px] rounded-[12px] text-xl text-PrimBtn font-semibold secondary-btn-border-2">
                    ابدأ باستخدام أمرك
                </button>
            </div>
            
        </div>
    );
}

