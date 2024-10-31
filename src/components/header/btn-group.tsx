import PrimaryBtn from "../buttons/primary-button";
import SecondaryBtn from "../buttons/secondary-button";

export default function BtnGroup() {
    return(
        <div className="flex items-center justify-end w-btn-group">

            <div className="w-[29.5%] ml-[24px]">
                <SecondaryBtn text={`أمرك أونلاين`} />
            </div>

            <div className="w-[36.5%] ml-[24px]">
                <PrimaryBtn text={`احجز موعد للتجربة`} />
            </div>

            <div className="w-[5%]">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.841813 12C0.724479 12 0.628479 11.9627 0.553813 11.888C0.479146 11.8133 0.441813 11.7173 0.441813 11.6V1.2C0.441813 1.08267 0.479146 0.986666 0.553813 0.912C0.628479 0.837333 0.724479 0.799999 0.841813 0.799999H8.08981C8.20715 0.799999 8.30315 0.837333 8.37781 0.912C8.45248 0.986666 8.48981 1.08267 8.48981 1.2V2.48C8.48981 2.58667 8.45248 2.67733 8.37781 2.752C8.30315 2.82667 8.20715 2.864 8.08981 2.864H2.90581V5.376H7.73781C7.85515 5.376 7.95115 5.41333 8.02581 5.488C8.10048 5.56267 8.13781 5.65867 8.13781 5.776V6.96C8.13781 7.06667 8.10048 7.15733 8.02581 7.232C7.95115 7.30667 7.85515 7.344 7.73781 7.344H2.90581V9.936H8.21781C8.33515 9.936 8.43115 9.97333 8.50581 10.048C8.58048 10.1227 8.61781 10.2187 8.61781 10.336V11.6C8.61781 11.7173 8.58048 11.8133 8.50581 11.888C8.43115 11.9627 8.33515 12 8.21781 12H0.841813ZM10.9199 12C10.8026 12 10.7066 11.9627 10.6319 11.888C10.5573 11.8133 10.5199 11.7173 10.5199 11.6V1.2C10.5199 1.08267 10.5573 0.986666 10.6319 0.912C10.7066 0.837333 10.8026 0.799999 10.9199 0.799999H12.3759C12.5359 0.799999 12.6533 0.837333 12.7279 0.912C12.8026 0.986666 12.8506 1.04533 12.8719 1.088L17.1439 7.76V1.2C17.1439 1.08267 17.1813 0.986666 17.2559 0.912C17.3306 0.837333 17.4213 0.799999 17.5279 0.799999H19.1599C19.2773 0.799999 19.3733 0.837333 19.4479 0.912C19.5226 0.986666 19.5599 1.08267 19.5599 1.2V11.6C19.5599 11.7067 19.5226 11.8027 19.4479 11.888C19.3733 11.9627 19.2773 12 19.1599 12H17.6879C17.5279 12 17.4106 11.9627 17.3359 11.888C17.2719 11.8027 17.2239 11.744 17.1919 11.712L12.9359 5.248V11.6C12.9359 11.7173 12.8986 11.8133 12.8239 11.888C12.7493 11.9627 12.6533 12 12.5359 12H10.9199Z" fill="#23314C"/>
                </svg>
            </div>

        </div>
    );
}