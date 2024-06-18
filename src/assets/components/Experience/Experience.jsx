import './Experience.css'

import ExperienceCard from "./ExperienceCard/ExperienceCard";
import c from '../../../assets/c.png'
import js from '../../../assets/js.png'
import css from '../../../assets/css.png'


export default function Experience(){

    const statements=[
        "1.A global technology giant specializing in internet-related services and products, including search engines, online advertising, cloud computing, software, and hardware.",
        
        "2.A global technology giant specializing in internet-related services and products, including search engines, online advertising, cloud computing, software, and hardware.",
        
        "3.A global technology giant specializing in internet-related services and products, including search engines, online advertising, cloud computing, software, and hardware.",
        
        "4.A global technology giant specializing in internet-related services and products, including search engines, online advertising, cloud computing, software, and hardware.",
        
        "5.A global technology giant specializing in internet-related services and products, including search engines, online advertising, cloud computing, software, and hardware.",
        
    ];
    const iconImages=[js, c, css]
    return(
        <div className='experience_container'>
            <p className='experience_title'>Experience</p>
            <div className='experience_cards_container'>
                <ExperienceCard
                companyName="ABC Pvt Ltd"
                designation='SDE 1'
                statements={statements}
                iconImages={iconImages}
                />
                <ExperienceCard
                companyName="XYZ Pvt Ltd"
                designation='SDE 2'
                statements={statements}
                iconImages={iconImages}
                
                />
                <ExperienceCard
                companyName="EFG Pvt Ltd"
                designation='SDE 3'
                statements={statements}
                iconImages={iconImages}
                
                />
            </div>
        </div>

    )
}