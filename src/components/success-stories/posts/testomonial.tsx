import Image from "next/image";
import Bg from "@/public/bg/testomonial.png"

interface props {
  qoute: string;
  person: string;
  lang: string
}

export default function Testmonial({ qoute, person, lang }: props) {
  return (
    <div className="relative w-full h-[134px] md:h-[213px]">
      <div className={`absolute w-full z-0 h-full ${lang == 'en' ? 'transform scale-x-[-1]' : 'none'}`}>
        <Image
          src={Bg}
          fill
          alt={`bg`}
          placeholder="blur"
          priority={false}
          className="object-fill"
        />
      </div>

      <div className="flex flex-col justify-center p-5 md:pr-14 md:pl-14 gap-4 h-full ">
        <p className="text-primText text-xs md:text-xl font-light">{qoute}</p>

        <p className="text-primText text-[10px] md:text-sm font-light">{person}</p>
      </div>
    </div>
  );
}
