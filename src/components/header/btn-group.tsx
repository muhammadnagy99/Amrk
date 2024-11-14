import PrimaryBtn from "../buttons/primary-button";
import SecondaryBtn from "../buttons/secondary-button";

interface BtnGroupProps {
    data: {
        buttons: {
            type: 'primary' | 'secondary';
            text: string;
            url: string;
        }[];
        icon?: {
            url: string;
            source: React.ReactNode;
        };
    };
}

export default function BtnGroup({ data }: BtnGroupProps) {
    const { buttons, icon } = data;

    return (
        <div className="hidden lg:flex items-center justify-end gap-6 w-btn-group lg:w-[40%]">
            {buttons.map((button, index) => (
                <a key={index} href={button.url} className={`${button.type === 'primary' ? 'w-[156px]' : 'w-[131px]'}`}>
                    {button.type === 'primary' ? (
                        <PrimaryBtn text={button.text} />
                    ) : (
                        <SecondaryBtn text={button.text} />
                    )}
                </a>
            ))}
             {icon && (
                <a href={icon.url} className="w-[5%]">
                    {icon.source}
                </a>
            )}
        </div>
    );
}
