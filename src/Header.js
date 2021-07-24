import React, { useState } from 'react'
import {Carousel} from '3d-react-carousal';
import './header.css'
import lecture from './lecture';
function Header() {
    const [tab, setTab]=useState(1)
    const changeToggle=(x)=>{
        setTab(x)
    }
    let slides =[
        
        <iframe width="560" height="315" src={lecture[tab].src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        <iframe width="560" height="315" src={lecture[tab].src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> ,
        <iframe width="560" height="315" src={lecture[tab].src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        <iframe width="560" height="315" src={lecture[tab].src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> ,
        <iframe width="560" height="315" src={lecture[tab].src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
     ];
    
        return (
        <div>
            <div className="section-2">
             <p className="p-45">Concepts of Videos</p>
            <p className='p-24'>Select a number</p>
            </div>
            <Carousel slides={slides}  interval={1000}/>
            <div className="section-2">
            <p className="p-45">Live Classes</p>
            <p className='p-24'>Select a number</p>
            <div className="number">
                <div className={tab===0?"tab active-tab":"tab"} onClick={()=>changeToggle(0)}>
                    <p>5</p>
                </div>
                <div className={tab===1?"tab active-tab":"tab"} onClick={()=>changeToggle(1)}>
                    <p>6</p>
                </div>
                <div className={tab===2?"tab active-tab":"tab"} onClick={()=>changeToggle(2)}>
                    <p>7</p>
                </div>
                <div className={tab===3?"tab active-tab":"tab"} onClick={()=>changeToggle(3)}>
                    <p>8</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header
