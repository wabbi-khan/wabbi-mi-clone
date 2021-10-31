import React, { useState,useEffect } from 'react'
import NavCard from "./NavCard.js"
import "../style/NavOptions.css"

const NavOptions = ({miphones,redmiphones,tv,laptop,fitnessandlifestype,home,audio,accessories}) => {

    const [miphonesToggle , setMiPhoneToggle] = useState(false);
    const [redmiPhonesToggle , setRedmiPhoneToggle] = useState(false);
    const [tvToggle , setTvToggle] = useState(false);
    const [laptopToggle , setLaptopToggle] = useState(false);
    const [fitnessToggle , setFitnessToggle] = useState(false);
    const [homeToggle , setHomeToggle] = useState(false);
    const [audioToggle , setAudioToggle] = useState(false);
    const [accessoriesToggle , setAccessoriesToggle] = useState(false);

    useEffect(() => {
        if(window.location.pathname == "/redmiphone"){
            return setMiPhoneToggle(true)
        }
        if(window.location.pathname == "/miphone"){
            return setRedmiPhoneToggle(true)
        }
        if(window.location.pathname == "/tv"){
            return setTvToggle(true)
        }
        if(window.location.pathname == "/laptops"){
            return setLaptopToggle(true)
        }
        if(window.location.pathname == "/fitness&lifestyle"){
            return setFitnessToggle(true)
        }
        if(window.location.pathname == "/home"){
            return setHomeToggle(true)
        }
        if(window.location.pathname == "/radio"){
            return setAudioToggle(true)
        }
        if(window.location.pathname == "/accessories"){
            return setAccessoriesToggle(true)
        }
    }, [])
    return (
        <div className="NavOptions">
            {
               miphonesToggle? miphones.map((item)=>(
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                ))  : null
            }

            {
                redmiPhonesToggle? redmiphones.map((item)=>(
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                ))  : null
            }

            {
                tvToggle? tv.map((item)=>(
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                ))  : null
            }

            {
                laptopToggle? laptop.map((item)=>(
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                ))  : null
            }

            {
                fitnessToggle? fitnessandlifestype.map((item)=>(
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                ))  : null
            }

            {
                homeToggle? home.map((item)=>(
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                ))  : null
            }

            {
                audioToggle? audio.map((item)=>(
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                ))  : null
            }
            

            {
                accessoriesToggle? accessories.map((item)=>(
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                ))  : null
            }
            
        </div>
    )
}

export default NavOptions
