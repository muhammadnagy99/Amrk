import Image from "next/image";
import Bg from "@/public/bg/testomonial.png";

interface props {
  qoute: string;
  person: string;
}

export default function Testmonial({ qoute, person }: props) {
  return (
    <div className="relative w-full h-[134px] md:h-[213px]">
      <div className="absolute w-full z-0 h-full">
        <Image
          src={Bg}
          fill
          alt={`bg`}
          placeholder="blur"
          priority={false}
          className="object-fill"
        />
      </div>

      <div className="flex flex-col justify-start p-5 md:p-14 gap-4">
        <p className="text-primText text-xs md:text-xl">{qoute}</p>

        <p className="text-primText text-[10px] md:text-sm">{person}</p>
      </div>
    </div>
  );
}
