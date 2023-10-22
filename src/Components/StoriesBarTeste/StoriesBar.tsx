import React, {ReactElement, useEffect, useState,useRef} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"
//import "./StoriesSlide.css"



export default function StoriesBar(){
    
    let Storie = {
        image:"../images/users/1.jpg",
        name:"name"
    }
    let Storie2 = {
      image:"../images/users/1.jpg",
      name:"name17"
  }
    const Stories = [
        Storie,Storie,Storie,Storie,Storie,Storie,Storie,
        Storie,Storie,Storie,Storie,Storie,Storie,Storie,
        Storie,Storie,Storie2,Storie2
    ]
    const carousel = useRef<HTMLDivElement | any>(null);
  const [width, setWidth] = useState<HTMLDivElement | number>(0)
  
 useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

    return (
        <>
        <div className="posts__and__stories__wrap">
                    {/*<div className="posts__and__storis">*/}
                    <motion.div ref={carousel} className="posts__and__storis" whileTap={{ cursor: "grabbing" }}>
                    <motion.div className="divslide"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
                    {Stories.map(obj => (
              <motion.div className="user" key={obj.image}>

                            <img src={obj.image} alt=""/>
                            <h6>{obj.name}</h6>
              </motion.div>
            ))}
            </motion.div>
            </motion.div>
            </div>
        </>
    )
}