// import React, { useEffect, useState } from "react";
// import { themeColors } from '../theme';
// import logoSVG from '../assets/Website_content/TR_Website_content-02.svg';
// import AppButton from "./AppButton";
// import { logEvent } from 'firebase/analytics';
// import { analytics } from '../config/firebase';
// import SearchBar from "./SearchBar";

// function NavBar_Marketplace() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [shrinkNav, setShrinkNav] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) { // Adjust the scroll threshold as needed
//                 setShrinkNav(true);
//             } else {
//                 setShrinkNav(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     const logMenuItemClick = (itemName) => {
//         logEvent(analytics, `menuClick, ${itemName}`);
//     };

//     return (
//         <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shrinkNav ? 'py-2 px-8 bg-secondary shadow-lg' : 'py-4 px-16 bg-tertiary'}`}>
//             <div className="flex justify-between items-center">
//                 {/* Hamburger Icon */}
//                 <div className="block lg:hidden">
//                     <button onClick={toggleMenu} className="text-primary focus:outline-none">
//                         <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
//                             />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Logo */}
//                 <a href="/Marketplace" className={`flex items-center transition-all duration-300 ${shrinkNav ? 'w-1/4' : 'w-2/3'}`}>
//                     <img src={logoSVG} alt="Logo" className={`h-8 transition-transform duration-300 ${shrinkNav ? 'transform scale-75' : ''}`} />
//                 </a>

//                 <div className="hidden lg:flex gap-x-4 items-center">
//                     {/* Links */}
//                     <nav className={`flex items-center gap-x-4 ${shrinkNav ? 'flex-row' : 'flex-col'} transition-all duration-300`}>
//                         <a href="/Marketplace" className="text-lg text-tertiary">Home</a>
//                         <a href="/" className="text-lg text-tertiary">Train Rex App</a>
//                         <a href="/TCPage" className="text-lg text-tertiary">Our Blog</a>
//                         <a href="/careers" className="text-lg text-tertiary">Careers</a>
//                         <a href="/PPPage" className="text-lg text-tertiary">About Us</a>
//                     </nav>

//                     {/* App Button */}
//                     <AppButton
//                         name='JOIN US'
//                         style={{ marginBottom: 0 }}
//                         isDropdownOpen={true}
//                     />
//                 </div>
//             </div>

//             {/* Menu on smaller screens */}
//             <nav className={`w-full ${menuOpen ? 'block' : 'hidden'} lg:hidden`}>
//                 <ul className="bg-secondary py-2 px-4">
//                     <li><a href="/Marketplace" className="block py-2 text-tertiary">Home</a></li>
//                     <li><a href="/" className="block py-2 text-tertiary">Train Rex App</a></li>
//                     <li><a href="/BlogList" className="block py-2 text-tertiary">Our Blog</a></li>
//                     <li><a href="/careers" className="block py-2 text-tertiary">Careers</a></li>
//                     <li><a href="/PPPage" className="block py-2 text-tertiary">About Us</a></li>
//                 </ul>
//             </nav>
//         </div>
//     );
// }

// export default NavBar_Marketplace;



// old code

import React, { useEffect, useState } from "react";
import { themeColors } from '../theme';
import logoSVG from '../assets/Website_content/TR_Website_content-02.svg'
import AppButton from "./AppButton";
import { logEvent } from 'firebase/analytics';
import { analytics } from '../config/firebase';
import SearchBar from "./SearchBar";

function NavBar_Marketplace() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            const featuresSection = document.getElementById("features");
            const contactSection = document.getElementById("contact");
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.scrollHeight;

            if (aboutSection && featuresSection && contactSection) {
                if (
                    scrollPosition >= aboutSection.offsetTop &&
                    scrollPosition < featuresSection.offsetTop
                ) {
                    setActiveSection("about");
                } else if (
                    scrollPosition >= featuresSection.offsetTop &&
                    scrollPosition < contactSection.offsetTop-1000
                ) {
                    setActiveSection("features");
                } else if (scrollPosition+windowHeight > bodyHeight-100) {
                    setActiveSection("contact");
                } else {
                    setActiveSection("");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to log menu item clicks
    const logMenuItemClick = (itemName) => {
        logEvent(analytics, `menuClick, ${itemName}`);
    };

    return (
        // <header className="bg-secondary fixed top-0 left-0 right-0 z-50">
        <div className="bg-tertiary fixed top-0 left-0 right-0 z-50">
            {/* Thin banner with Available text */}
            <div className="bg-primary py-4 h-2 flex justify-center items-center">
                <span className="text-xs font-semibold text-tertiary">Available on both iOS</span>
            </div>

            {/* Thick bar containing logo, name, and apply now button */}
            <div className="bg-tertiary py-4 px-16 flex justify-between items-center lg:gap-x-4">
                {/* Hamburger Icon */}
                <div className="block lg:hidden" style={{marginLeft:-40}}>
                    <button onClick={toggleMenu} className="text-primary focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                            />
                        </svg>
                    </button>
                </div>
                
                {/* Logo */}
                <a href="/Marketplace" className="w-2/3 md:w-1/3 flex items-center mb-2 lg:mb-0">
                    <img src={logoSVG} alt="Logo" className="h-8"/>
                </a>

                <AppButton
                    name='JOIN US'
                    style={{marginRight:-30, marginBottom:10, paddingTop: 10}}
                    isDropdownOpen={true}
                />
            </div>

            {/* Menu on larger screens */}
            <nav className={`w-1/3 h-full lg:flex py-0 px-0 lg:w-auto font-bold ${menuOpen ? 'w-auto flex fixed top-24 left-0 right-auto bottom-auto bg-tertiary z-50 rounded-b-2xl border-x-4 border-b-4 border-secondary' : 'hidden'}`}>
                <ul className="md:flex text-sm gap-4 bg-secondary w-full justify-center">
                    <li>
                        <a href="/Marketplace" className={'block py-2 px-4 rounded-md text-left lg:text-center text-lg text-tertiary'} onClick={() => logMenuItemClick('Gyms/Classes')}>Home</a>
                    </li>
                    <li>
                        <a href="/" className={`block py-2 px-4 rounded-md text-left lg:text-center text-lg text-tertiary`} onClick={() => logMenuItemClick('Train Rex App')}>Train Rex App</a>
                    </li>
                    <li>
                        {/* fixed routing to blog list */}
                        <a href="/BlogList" className={`block py-2 px-4 rounded-md text-left lg:text-center text-lg text-tertiary`} onClick={() => logMenuItemClick('Our Blog')}>Our Blog</a>
                    </li>
                    <li>
                        <a href="/careers" className={`block py-2 px-4 rounded-md text-left lg:text-center text-lg text-tertiary`} onClick={() => logMenuItemClick('Careers')}>Careers</a>
                    </li>
                    <li>
                        <a href="/PPPage" className={`block py-2 px-4 rounded-md text-left lg:text-center text-lg text-tertiary`} onClick={() => logMenuItemClick('About Us')}>About Us</a>
                    </li>
                </ul>
            </nav>
        </div>
        // {/* </header> */}
    )
}

export default NavBar_Marketplace;