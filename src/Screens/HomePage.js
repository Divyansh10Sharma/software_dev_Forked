import React from 'react';
import '../App.css';
import match from "../assets/Website_content/TR_Website_content-05.svg";
import match_light from "../assets/Website_content/TR_Website_content-06.svg";
import track from "../assets/Website_content/TR_Website_content-07.svg";
import consult from "../assets/Website_content/TR_Website_content-09.svg";
import consult_light from "../assets/Website_content/TR_Website_content-10.svg";
import iphone_home from "../assets/Website_content/iphone_home.png";
import iphone_profile from "../assets/Website_content/iphone_Profile.png";
import iphone_match1 from "../assets/Website_content/iphone_match-01.png";
import iphone_match2 from "../assets/Website_content/iphone_match-02.png";
import iphone_match3 from "../assets/Website_content/iphone_match-03.png";
import iphone_track1 from "../assets/Website_content/iphone_track-01.png";
import iphone_track2 from "../assets/Website_content/iphone_track-02.png";
import iphone_track3 from "../assets/Website_content/iphone_track-03.png";
import iphone_consult1 from "../assets/Website_content/iphone_consult-01.png";
import iphone_consult2 from "../assets/Website_content/iphone_consult-02.png";
import iphone_consult3 from "../assets/Website_content/iphone_consult-03.png";
import iphone_appstore from "../assets/Website_content/iphone_appstore.png";
import iphone_qr from "../assets/Website_content/TR_QR_Code.png";
import iphone_banner from "../assets/Website_content/TR_Website_content-121.png";
import ps_qr from "../assets/Website_content/PS_QR.png";
import ps_banner from "../assets/Website_content/PS_Sticker.png";
import AppButton from '../components/AppButton';
import { MonthlyExpertPlan } from '../assets/WelcomeScreenImage';

function HomePage() {
    // // Sample array of cover images

    // const [coverImages, setCoverImages] = useState([cover1, cover2, cover3]);
    // // shuffle the cover images array every 5 seconds
    // useEffect(() => {
    //     const shuffleArray = (array) => {
    //         const newArray = array.slice();
    //         for (let i = newArray.length - 1; i > 0; i--) {
    //             const j = Math.floor(Math.random() * (i + 1));
    //             [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    //         }
    //         return newArray;
    //     }
    //     const interval = setInterval(() => {
    //         const shuffledImages = shuffleArray(coverImages);
    //         setCoverImages(shuffledImages);
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [coverImages]);

    return (
        <div className="bg-tertiary">
            {/* Main cover slideshow */}

            {/* Slideshow */}

            {/* <img src={coverImages[0]} alt="Cover" className="object-cover w-screen h-20"/> */}

            {/* Home Page- First block */}
            <div id='about' className="bg-tertiary">
                <div className="container mx-auto flex flex-col lg:flex-row md:flex-col items-center justify-between">
                    {/* Left Column with SVGs and Text */}
                    <div className="lg:w-1/2 lg:pr-8 text-white flex flex-col items-center">
                        {/* Row of SVGs */}
                        <div className="flex mb-4 gap-x-4 mt-10">
                            {/* First SVG */}
                            <img src={match} alt="Match" className="h-16" />
                            {/* Second SVG */}
                            <img src={track} alt="Track" className="h-16" />
                            {/* Third SVG */}
                            <img src={consult} alt="Consult" className="h-16" />
                        </div>
                        {/* Text */}
                        <h2 className="text-black lg:text-4xl font-semibold mb-4">{'MATCH. TRACK. CONSULT.'}</h2>
                        <p className="text-lg text-secondary lg:text-3xl mb-4 px-1">Your Personal Trainer in your pocket,<br /> waiting to find your person, track your progress and provide professional guidance.</p>
                        {/* Button */}
                        {/* <a href="https://apps.apple.com/gb/app/train-rex/id6476014470" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-primary text-tertiary font-semibold text-xl py-2 px-8 rounded-3xl border border-gray-300 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
                            START TODAY <span style={{ fontSize: '1.5rem' }}>&#8250;</span>
                        </a> */}
                        <AppButton
                            hide={false}
                        />
                    </div>

                    {/* Right Column with Image */}
                    <div className="lg:w-1/3 py-16 lg:py-24 px-12">
                        {/* <div className="relative h-0 lg:h-auto"> */}
                            <img
                                src={iphone_home}
                                alt="Home Image"
                                className="w-72 h-auto"
                            />
                        {/* </div> */}
                    </div>
                </div>
            </div>

            {/* Describing Train Rex- Second block */}
            <div className="flex flex-col justify-center items-center bg-secondary text-white py-16">
                <h1 className="text-4xl lg:text-5xl font-bold p-4">{'TRAIN REX IS A ONE STOP FITNESS SOLUTION'}</h1>
                <AppButton
                    hide={false}
                    bg={'bg-tertiary'}
                />
            </div>

            {/* Creating Profile- Third block */}
            <div className="bg-tertiary">
                <div className="container mx-auto flex flex-col lg:flex-row md:flex-col items-center justify-between">

                    {/* Left Column with Image */}
                    <div className="lg:w-1/3 py-8 lg:py-24 px-12 h-auto">
                            <img
                                src={iphone_profile}
                                alt="Profile Image"
                                className="w-72 h-auto"
                            />
                    </div>

                    {/* Right Column with SVGs and Text */}
                    <div className="lg:w-2/3 lg:pr-8 text-white flex flex-col justify-end h-full py-24 gap-y-4 px-4">
                        {/* Text */}
                        <h2 className="text-secondary text-2xl lg:text-4xl font-semibold mb-4 text-left  lg:mt-[-40px]">SIGN UP & CREATE<br/> YOUR PROFILE</h2>
                        <p className="text-lg text-secondary md:text-xl lg:text-2xl mb-4 text-left">Say goodbye to the solo workouts and uninspiring fitness routines! 
                                    <br/>Train Rex is here to revolutionalize your fitness journey and match you 
                                    <br/> with your perfect workout buddy, all based on your schedule.</p>
                        <p className="text-lg text-secondary md:text-2xl lg:text-4xl mb-4 text-left">Just add in a short Bio and select your place of workout!</p>
                        {/* Button */}
                        {/* <a href="https://apps.apple.com/gb/app/train-rex/id6476014470" target="_blank" rel="noopener noreferrer"
                            className="w-60 bg-secondary hover:bg-primary text-tertiary text-xl py-2 px-8 rounded-3xl border border-gray-300 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
                            START TODAY <span style={{ fontSize: '1.5rem' }}>&#8250;</span>
                        </a> */}
                        <AppButton
                            hide={false}
                            noLeft={true}
                        />
                    </div>
                </div>
            </div>

            {/* Features- Match*/}
            <div id='features' className="bg-secondary">  
                {/* SVG and Text at the Bottom Left Corner */}
                <div className="flex items-start gap-x-4 px-8 pt-10">
                    <img src={match_light} alt="SVG" className="w-6 lg:w-12 h-auto mt-2" />
                    <p className="text-2xl lg:text-6xl md:text-2xl font-bold text-tertiary">Match</p>
                </div>
                <div className="text-white flex flex-col lg:flex-row justify-center items-center h-full pb-24 pt-12 py-4 px-8 gap-x-32 gap-y-6">
                    
                    {/* Picture and Text Columns */}
                    <div className="w-72 flex flex-col items-center px-8 lg:px-0">
                        <p className="text-base lg:text-lg md:text-xs text-primary w-100">1. Select date and start scheduling workout Time and Type.</p>
                        <img src={iphone_match1} alt="Match 1" className="h-auto mt-2" />
                    </div>
                    <div className="w-72 flex flex-col items-center px-8 lg:px-0">
                        <p className="text-base lg:text-lg md:text-xs text-primary">2. Find places based on your place of workout and schedule.</p>
                        <img src={iphone_match2} alt="Match 1" className="h-auto mt-2" />
                    </div>
                    <div className="w-72 flex flex-col items-center px-8 lg:px-0">
                        <p className="text-base lg:text-lg md:text-xs text-primary">3. Checkout user profiles of your matches and start chatting.</p>
                        <img src={iphone_match3} alt="Match 1" className="h-auto  mt-2" />
                    </div>   
                </div>
                {/* there should be a button to redirect to the match page */}
            </div>

            {/* Features- Track*/}
            <div className="bg-tertiary">  
                <div className="flex items-start gap-x-4 px-8 pt-10">
                    <img src={track} alt="SVG" className="w-6 lg:w-12 h-auto mt-2 lg:mt-4" />
                    <p className="text-2xl lg:text-6xl md:text-2xl font-bold text-secondary">Track</p>
                </div>
                <div className="text-white flex flex-col lg:flex-row justify-center items-center h-full pb-24 pt-12 py-4 px-8 gap-x-32 gap-y-6">
                    
                    {/* Picture and Text Columns */}
                    <div className="w-72 flex flex-col items-center px-8 lg:px-0">
                        <p className="text-base lg:text-lg md:text-xs text-primary text-2xl w-100">1. Use Calendar feature to track workouts.</p>
                        <img src={iphone_track1} alt="Track 1" className="w-full h-auto mt-2" />
                    </div>
                    <div className="w-72 flex flex-col items-center px-8 lg:px-0">
                        <p className="text-base lg:text-lg md:text-xs text-primary text-2xl">2. Track progress with Workout Analytics.</p>
                        <img src={iphone_track2} alt="Track 1" className="w-full h-auto mt-2" />
                    </div>
                    <div className="w-72 flex flex-col items-center px-8 lg:px-0">
                        <p className="text-base lg:text-lg md:text-xs text-primary text-2xl">3. Journal your thought and workout details.</p>
                        <img src={iphone_track3} alt="Track 1" className="w-full h-auto  mt-2" />
                    </div>   
                </div>
            </div>

            {/* Features- Consult*/}
            <div className="bg-secondary">  
                <div className="flex items-start gap-x-4 px-8 pt-10">
                    <img src={consult_light} alt="SVG" className="w-6 lg:w-12 h-auto mt-2" />
                    <p className="text-2xl lg:text-6xl md:text-2xl font-bold text-tertiary">Consult</p>
                </div>
                <div className="text-white flex flex-col lg:flex-row justify-center items-center h-full pb-24 pt-12 py-4 px-8 gap-x-32 gap-y-6">
                    
                    {/* Picture and Text Columns */}
                    <div className="w-72 flex flex-col items-center px-8 lg:px-0">
                        <p className="text-base lg:text-lg md:text-xs text-primary text-2xl w-100">1. Check your REXpert menu for consults.</p>
                        <img src={iphone_consult2} alt="Consult 1" className="h-auto mt-2" />
                    </div>
                    <div className="w-72 flex flex-col items-center px-8 lg:px-0">
                        <p className="text-base lg:text-lg md:text-xs text-primary text-2xl mb-7">2. Find expert fitness consultations.</p>
                        <img src={iphone_consult1} alt="Consult 1" className="h-auto mt-2" />
                    </div>
                    <div className="w-72 flex flex-col items-center px-8 lg:px-0">
                        <p className="text-base lg:text-lg md:text-xs text-primary text-2xl">3. Use REX (AI Chatbot) for quick queries.</p>
                        <img src={iphone_consult3} alt="Consult 1" className="h-auto mt-2" />
                    </div>   
                </div>
            </div>

            {/* Download */}
            <div className="bg-tertiary">
                <div className="container mx-auto flex flex-col lg:flex-row md:flex-col items-center justify-between">
                    {/* Left Column with Image */}
                    <div className="lg:pr-0 py-16 lg:py-24 px-24 h-full">
                        <img
                            src={iphone_appstore}
                            alt="AppStore Image"
                            className="w-72 h-auto"
                        />
                    </div>

                    {/* Right Column with SVGs and Text */}
                    <div className="flex flex-col lg:w-1/2 lg:pr-24 text-tertiary h-full py-8 lg:py-24 gap-y-4 items-center">
                        <div className="flex flex-row">
                            <div className="flex flex-col px-4">
                                <a href="https://apps.apple.com/gb/app/train-rex/id6476014470"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                >
                                    <img
                                        src={iphone_banner}
                                        alt="AppStore Image"
                                        className="w-60 h-auto pb-6"
                                    />
                                </a>
                                <img
                                    src={iphone_qr}
                                    alt="AppStore QR"
                                    className="w-60 h-auto"
                                />
                            </div>
                            
                            <div className="flex flex-col px-4">
                                <a href="https://play.google.com/store/apps/details?id=com.arnav1224.gym_bro"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                >
                                    <img
                                        src={ps_banner}
                                        alt="PlayStore Image"
                                        className="w-60 h-auto pb-6"
                                    />
                                </a>
                                <img
                                    src={ps_qr}
                                    alt="PlayStore QR"
                                    className="w-60 h-auto"
                                />
                            </div>
                        </div>
                        <h2 className="text-black text-2xl mb-4 text-center">Scan the QR code to<br/> download the Train Rex App!</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
