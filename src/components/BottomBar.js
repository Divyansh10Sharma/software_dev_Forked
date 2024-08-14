import React from "react";
import logoSVG from '../assets/Website_content/TR_Website_content-02.svg'
import email from '../assets/Website_content/SocialMedia_icon_email.png'
import facebook from '../assets/Website_content/SocialMedia_iocn_facebook.png'
import insta from '../assets/Website_content/SocialMedia_iocn_insta.png'
import x from '../assets/Website_content/SocialMedia_iocn_x.png'
import AppButton from "./AppButton";
import { logEvent } from 'firebase/analytics';
import { analytics } from '../config/firebase';
import { CallIcon, EmailIcon } from "../assets/WelcomeScreenImage";

function BottomBar() {

    const logSocialMediaClick = (platform) => {
        logEvent(analytics, `social, ${platform}`);
    };

    return (
        <footer className="bg-primary">
            <div id='contact' className="flex flex-col lg:flex-row h-full flex justify-between px-14 lg:px-36">
                {/* Fourth Column: PNG, SVGs in a column, Button */}
                <div className="flex flex-col items-left lg:items-center mb-6">
                    <h2 className="flex font-semibold text-tertiary text-xl lg:text-2xl pt-10 pb-4">REACH OUT TO US</h2>

                    {/* SVGs in a column */}
                    <div className="flex flex-col mb-4 gap-x-4">
                        {/* First SVG */}
                        <a href="mailto:info@trainrex.org" onClick={() => logSocialMediaClick('email')} className="flex flex-row gap-x-1 pb-1">
                            <EmailIcon style={{ marginTop: 4 }}/>
                            <h2 className="text-secondary pl-1 font-semibold">info@trainrex.org</h2>
                        </a>
                        {/* Second SVG */}
                        <a href="tel:+917827145068" onClick={() => logSocialMediaClick('phone')} className="flex flex-row gap-x-1">
                            <CallIcon style={{ marginTop: 4 }}/>
                            <h2 className="text-secondary pl-1 font-semibold">+91 7827145068</h2>
                        </a>
                    </div>
                </div>

                {/* Fourth Column: PNG, SVGs in a column, Button */}
                <div className="flex flex-col items-left mb-6 items-left lg:items-center ">
                    {/* PNG */}
                    {/* <img src={logoSVG} alt="logo" className="mb-4 pt-10 w-48 h-auto"/> */}
                    <h2 className="flex text-xl font-semibold text-tertiary lg:text-2xl pt-10 pb-4">CONNECT WITH US</h2>

                    {/* SVGs in a column */}
                    <div className="flex flex-row mb-4 gap-x-4 items-left lg:items-center ">
                        {/* Second SVG */}
                        <a href="http://www.facebook.com/share/ycAc6CgBiJt5Vfn4/?mibextid=sCpJLy" onClick={() => logSocialMediaClick('FB')}>
                            <img src={facebook} alt="facebook" className="h-10 w-10 object-cover mb-2" />
                        </a>
                        {/* Third SVG */}
                        <a href="http://www.instagram.com/trainrex_official/" onClick={() => logSocialMediaClick('insta')}>
                            <img src={insta} alt="insta" className="h-10 w-10 object-cover mb-2" />
                        </a>
                        {/* Fourth SVG */}
                        <a href="http://twitter.com/Train__Rex" onClick={() => logSocialMediaClick('X')}>
                            <img src={x} alt="x" className="h-10 w-10 object-cover mb-2" />
                        </a>
                    </div>
                </div>

                {/* Fourth Column: PNG, SVGs in a column, Button */}
                <div className="text-center text-white flex flex-col items-left lg:items-center mb-6">
                    <h2 className="flex text-xl font-semibold text-tertiary lg:text-2xl pt-10 pb-4">DOWNLOAD THE APP</h2>

                    <div className="flex flex-row mb-4 gap-x-4">
                        <AppButton
                            hide={false}
                            isDropdownOpen={true}
                        />
                    </div>
                    
                </div>
            </div>
            {/* <div className="container mx-auto px-4 text-center text-gray-300">
                <p>&copy; 2024 {Strings.FullName}. All Rights Reserved.</p>
            </div> */}

            {/* Added Terms % Conditions and routed to correct link */}
            <div className="text-white pb-2">
                <a href="/TCPage">Terms & Conditions</a>
            </div>
        </footer>
  );
}

export default BottomBar;