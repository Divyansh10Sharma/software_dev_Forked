import React from 'react';
import '../App.css';
import { ListCard, PillButton, Placard } from '../components/ButtonsLibrary';
import icon from '../assets/Icon-512.png'

function Careers() {
    return (
        <div className="bg-tertiary flex flex-col px-4 lg:px-48 pb-56">
            {/* <div className="flex flex-row lg:py-4">
                <PillButton label="Gyms/Fitness Centres" list={true}/>
                <PillButton label="Fitness Classes" list={true}/>
                <PillButton label="Sports" list={true}/>
            </div> */}
            <div className="flex flex-col py-12">
                <p className="flex text-secondary text-lg lg:text-4xl font-bold px-2">JOBS</p>
                <p className="flex text-secondary text-sm lg:text-2xl font-bold px-2">INTENT MATTERS</p>
                <div>
                {/*corrected props' name */}
                    <ListCard 
                        image= {[icon]}
                        gymDisplayName= "Field Marketing Agent" 
                        cityDisplayName= "Edinburgh, UK"
                        buttonText= "Apply"
                        extraText= "Jobs"/>
                </div>
                <p className="flex text-secondary text-sm lg:text-2xl font-bold"></p>
                
            </div>
        </div>
    );
}

export default Careers;