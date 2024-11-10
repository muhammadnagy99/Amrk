import PrimaryBtn from "../../buttons/primary-button";
import SecondaryBtn from "../../buttons/secondary-button";
import LoginBtn from "./login-btn";

export default function Sidebar() {
    return(
        <div className="fixed top-[64px] flex justify-center inset-y-104 left-0 z-40 w-full h-full bg-white shadow-lg transition-transform transform -translate-x-full peer-checked:translate-x-0 duration-300">
            <div className="w-full h-full p-6 flex flex-col gap-4">
                <a href="/demo-schedule">
                    <PrimaryBtn text={`احجز موعد للتجربة`} />
                </a>
                <a href="/">
                    <SecondaryBtn text={`أمـركـ أونلاين`} />
                </a>
                <LoginBtn />
            </div>
        </div>
    );
}