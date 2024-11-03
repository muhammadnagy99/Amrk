import SiteLinks from "./site-links";
import Line from "../assets/line";
import SocialMedia from "./social-media";
import CopyRight from "./copy-right";

export default function MainFooter() {
    return(
      <footer className="flex items-center justify-center w-full bg-FooterBg">
        <div className="flex flex-col items-center w-[95%] xl:w-10/12">
            <SiteLinks />
            <Line />
            <SocialMedia />
            <Line />
            <CopyRight />
        </div>
      </footer> 
    );
}