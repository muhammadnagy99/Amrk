import countriesData from './ar-countries.json';

export default function DemoForm() {
    return(
        <div className="flex items-center justify-start h-full">
            <form action="" className="flex flex-col w-[588px] bg-white form-shadow rounded-3xl p-10 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-primText text-s">
                        الاسم   
                    </label>
                    <input
                        className="w-full h-[40px] bg-InputColor input-border rounded-[12px] p-2"
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-primText text-s">
                    رقم الهاتف
                    </label>
                    <div className="flex flex-col md:flex-row w-full justify-between gap-2">
                        <div className="relative w-full md:w-5/12 ">
                            <select
                                className="w-full h-[40px] bg-InputColor input-border rounded-[12px] p-2 appearance-none cursor-pointer"
                                id="country"
                                name="country"
                                required
                                aria-required="true"
                            >
                                {countriesData.map((country, index) => (
                                <option key={index} value={country.code} className="rounded-sm" >
                                    {country.name_ar}
                                </option>
                                ))}
                            </select>
                            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.49947 9.97411e-07L0.499468 1.78422e-06C0.408347 0.000268821 0.31903 0.0237669 0.24113 0.0679664C0.16323 0.112165 0.0996975 0.175392 0.0573705 0.25084C0.0150436 0.326289 -0.00447426 0.411103 0.000916866 0.496152C0.00630799 0.581201 0.036405 0.663265 0.0879683 0.73351L4.58797 6.81101C4.77447 7.063 5.22347 7.063 5.41047 6.81101L9.91047 0.733509C9.96256 0.66341 9.9931 0.581306 9.99879 0.496115C10.0045 0.410924 9.98508 0.325906 9.94271 0.250297C9.90035 0.174689 9.83663 0.111381 9.75849 0.0672536C9.68034 0.0231262 9.59076 -0.000133479 9.49947 9.97411e-07Z" fill="#B0438A"/>
                            </svg>
                        </div>

                        <input
                            className="w-full md:w-[55%] h-[40px] bg-InputColor input-border rounded-[12px] p-2"
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            aria-required="true"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-primText text-s">
                        البريد الإلكتروني
                    </label>
                    <input
                        className="w-full h-[40px] bg-InputColor input-border rounded-[12px] p-2"
                        type="text"
                        id="email"
                        name="email"
                        required
                        aria-required="true"
                    />
                </div>

                <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                    <div className="flex flex-col gap-2 w-full md:w-[65%]">
                        <label htmlFor="restaurant-name" className="text-primText text-s">
                            اسم المطعم  
                        </label>
                        <input
                            className="w-full h-[40px] bg-InputColor input-border rounded-[12px] p-2"
                            type="text"
                            id="restaurant-name"
                            name="restaurant-name"
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-[30%]">
                        <label htmlFor="branches" className="text-primText text-s">
                            عدد الفروع
                        </label>
                        <div className="relative w-full">
                            <select
                                className="w-full h-[40px] bg-InputColor input-border rounded-[12px] p-2 appearance-none cursor-pointer"
                                id="branches"
                                name="branches"
                                required
                                aria-required="true"
                            >
                                {[...Array(5)].map((_, index) => (
                                    <option key={index + 1} value={index + 1} className="rounded-sm">
                                    {index + 1}
                                    </option>
                                ))}
                                <option key={6} value={`more`} className="rounded-sm">
                                    {`أكثر`}
                                </option>

                            </select>
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M9.49947 9.97411e-07L0.499468 1.78422e-06C0.408347 0.000268821 0.31903 0.0237669 0.24113 0.0679664C0.16323 0.112165 0.0996975 0.175392 0.0573705 0.25084C0.0150436 0.326289 -0.00447426 0.411103 0.000916866 0.496152C0.00630799 0.581201 0.036405 0.663265 0.0879683 0.73351L4.58797 6.81101C4.77447 7.063 5.22347 7.063 5.41047 6.81101L9.91047 0.733509C9.96256 0.66341 9.9931 0.581306 9.99879 0.496115C10.0045 0.410924 9.98508 0.325906 9.94271 0.250297C9.90035 0.174689 9.83663 0.111381 9.75849 0.0672536C9.68034 0.0231262 9.59076 -0.000133479 9.49947 9.97411e-07Z"
                                fill="#B0438A"
                            />
                            </svg>
                        </div>
                    </div>

                </div>

                <button className="flex items-center bg-PrimBtn w-[139px] h-[48px] rounded-xl text-white submit-btn mt-[40px] mb-2">
                    إرسال   
                </button>

            </form>
        </div>
    );
}