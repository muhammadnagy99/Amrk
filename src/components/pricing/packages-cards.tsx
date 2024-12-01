import PackageCard from "./pckg-card";
import { Package } from "@/src/types/interfaces";

interface PackagesCardsProps {
    packages: Package[];
}

export default function PackagesCards({ packages }: PackagesCardsProps) {
    return (
        <div className="flex flex-row xl:justify-end md:p-0 gap-2 xl:gap-4 sticky pt-4 md:pt-7 top-[64px] md:top-[104px] z-10 bg-white">
            {packages.map((pkg, index) => (
                <PackageCard
                    key={index}
                    title={pkg.title}
                    description={pkg.description}
                    buttonText={pkg.buttonText}
                    buttonVariant={pkg.buttonVariant}
                    highlight={pkg.highlight}
                    highlightText={pkg.highlightText}
                />
            ))}
        </div>
    );
}
