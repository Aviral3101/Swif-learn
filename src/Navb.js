import React from 'react'
import './Navb.css'
function Navb () {
    return (
        <>
        <div className="nav-bar">
            <div className="menu">
                <p className="p-12">Upcoming</p>
            <p className="p-20">Live Consultation</p>
            </div>
            <p>View Plans</p>
            <p>Buy Plans</p>
            <button>Log In</button>
        </div>
        <div style={{borderBottom:"2px #a0a0a0 solid"}}></div>
        </>
    )
}

export default Navb
