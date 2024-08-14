import React, {useEffect, useState} from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../config/firebase';
import { Arrow } from '../assets/WelcomeScreenImage';
import { themeColors } from '../theme';

function AppButton (props){

    // console.log(props)

    const [isDropdownOpen, setIsDropdownOpen] = useState(props.isDropdownOpen? props.isDropdownOpen : false);

    const toggleDropdown = () => {
        // console.log("toggleDropdown",);
        logEvent(analytics, 'Start Button')
        setIsDropdownOpen(!isDropdownOpen);
    };

    const logAppStoreClick = (store) => {
        logEvent(analytics, `Store, ${store}`);
    };

   return (
    <div>
            {!isDropdownOpen ? (
                <button 
                    onClick={toggleDropdown} 
                    // changed the hover effect from colors changing to scaling
                    className={`${props.bg==='bg-tertiary' ? 'bg-tertiary hover:scale-110 text-secondary' : 'bg-secondary hover:bg-primary text-tertiary'} 
                        flex w-fit p-2 px-3 rounded-3xl text-center transition duration-300 ease-in-out focus:outline-none focus:shadow-outline`}
                    style={{ position: 'relative', marginRight: props.style ? props.style.marginRight : 0 }}
                >
                    <span className={`${props.hide === false ? null : 'hidden'} lg:inline text-lg font-semibold`}>
                        {props.name ? props.name : 'START TODAY'}
                    </span>
                    <Arrow style={{marginTop: 5}} color={props.bg === 'bg-tertiary' ? themeColors.fg : themeColors.lightAccent} />
                </button>
            ) : (
                // changed to justify start because buttons on sign up section of homepage were on the extremes 
                <div className={'flex justify-start gap-x-2'} style={{ marginBottom: props.style ? props.style.marginBottom : 0 }}>
                    <a 
                        href="https://apps.apple.com/gb/app/train-rex/id6476014470" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${props.bg==='bg-tertiary' ? 'bg-tertiary hover:scale-105 text-secondary' : 'bg-secondary hover:bg-primary text-tertiary'} 
                            w-54 py-2 px-4 lg:px-4 rounded-3xl text-center text-lg border-none transition duration-300 ease-in-out focus:outline-none focus:shadow-outline flex flex-row`}
                        style={{ marginRight: props.style ? props.style.marginRight + 28 : 0 }}
                        onClick={logAppStoreClick('Apple')}
                    >
                        <span style={{ fontSize: '0.2rem' }}><AppleIcon/></span>
                        <span className="hidden lg:inline mx-1">Apple</span>
                    </a>
                    <a 
                        href="https://play.google.com/store/apps/details?id=com.arnav1224.gym_bro" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${props.bg==='bg-tertiary' ? 'bg-tertiary hover:scale-105 text-secondary' : 'bg-secondary hover:bg-primary text-tertiary'} 
                            w-54 py-2 px-4 lg:px-4 rounded-3xl text-center text-lg border-none transition duration-300 ease-in-out focus:outline-none focus:shadow-outline flex flex-row`}
                        style={{ marginRight: props.style ? props.style.marginRight : 0 }}
                        onClick={logAppStoreClick('Android')}
                    >
                        <span style={{ fontSize: '0.2rem' }}><AndroidIcon/></span>
                        <span className="hidden lg:inline mx-1">Android</span>
                    </a>
                </div>
            )}

        </div>
   );
}

export default AppButton;