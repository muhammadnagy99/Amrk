"use client";

interface SubMenuProps {
    title: string;
    items: {
        label: string;
        url: string;
    }[];
    isOpen?: boolean;
}

export default function SubMenu({ title, items, isOpen }: SubMenuProps) {
    return (
        <div className="w-full">
            <div
                className={`w-full h-12 pr-4 pl-4 rounded-xl cursor-pointer transition-colors duration-300 ${
                    isOpen ? 'bg-white' : 'bg-primeHeader'
                }`}
            >
                <div className="relative h-full w-full flex justify-between items-center">
                    <p className="text-sm font-medium text-primText">
                        {title}
                    </p>
                    <p>
                        <svg
                            className={`mb-1 cursor-pointer duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
                            width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1 1.00012L6 6.00049L1 1.00012ZM6 6.00049L11 1.00012L6 6.00049Z" fill="#23314C" />
                            <path d="M1 1.00012L6 6.00049L11 1.00012" stroke="#23314C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                    <span
                        className={`absolute bottom-2 left-0 w-full h-[2px] bg-PrimBtn transform transition-all duration-300 transform-origin-left ${
                            isOpen ? 'scale-x-100' : 'scale-x-0'
                        }`}
                    ></span>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <ul className="p-4 space-y-2">
                    {items.map((item, index) => (
                        <li key={index} className="text-sm text-primText">
                            <a href={item.url} className="hover:text-PrimBtn">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
