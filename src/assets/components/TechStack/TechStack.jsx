import './TechStack.css';
import TechStackIconContainer from './TechStackIconContainer/TechStackIconContainer';
import c from '../../../assets/c.png'
import js from '../../../assets/js.png'
import css from '../../../assets/css.png'

function TechStack(){
    const techstackRowOne = [
        {
            iconName:'c',
            iconImage: c,
            iconAltProperty:'cimage'
        },
        {
    
            iconName: 'javascript',
            iconImage: js,
            iconAltProperty:'jsimage'
        },

        {
            iconName:'CSS',
            iconImage:css,
            iconAltProperty:'cssimage'
        }
    ];
    const techstackRowTwo = [
        {
            iconName:'c',
            iconImage: c,
            iconAltProperty:'cimage'
        },
        {
    
            iconName: 'javascript',
            iconImage: js,
            iconAltProperty:'jsimage'
        },

        {
            iconName:'CSS',
            iconImage:css,
            iconAltProperty:'cssimage'
        }
    ];
   
    
    return(
        <div className='techstack_container'>
            <p className='techstack_title'>Tech Stack</p>
            <div className='techstack_icon_container'>
                {
                    techstackRowOne.map(function(element, index){
                        console.log('t is :',element)
                        console.log('i is :',index)

                        return(
                            <TechStackIconContainer 
                            title={element.iconName}
                            altProperty={element.iconAltProperty}
                            image={element.iconImage}
                            />
                        )
                    })
                }
                
            </div>
            <div className='techstack_icon_container'>
                {
                    techstackRowTwo.map(function(element, index){
                        console.log('t is :',element)
                        console.log('i is :',index)

                        return(
                            <TechStackIconContainer 
                            title={element.iconName}
                            altProperty={element.iconAltProperty}
                            image={element.iconImage}
                            />
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default TechStack;