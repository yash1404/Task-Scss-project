import React from 'react'
import { GrHomeRounded } from "react-icons/gr"
import { BiMessageDots } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { BiUserCircle } from "react-icons/bi"
import { FiClock } from "react-icons/fi"
import "../Styles/Sidenavbar.css"

function Sidenavbar() {
    return (
        <React.Fragment>
            <div className="sidenavbar">
                <div className="icons">
                    <span className='active'><GrHomeRounded /></span>
                    <span><BiMessageDots /></span>
                    <span><FiSearch /></span>
                    <span><BiUserCircle /></span>
                    <span><FiClock /></span>
                </div>


            </div>
        </React.Fragment>
    )
}

export default Sidenavbar