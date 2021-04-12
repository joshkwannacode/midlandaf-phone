import React from 'react'
import InfoList from './InfoList'

export default function Searchbar() {
    return (
        <>
            <div className="search-bar-main">
            <i className="fa fa-search"></i>
                {/* <button type="submit"><i class="fa fa-search"></i></button> */}
                <input type="text" id="search" name="search" placeholder="Search"/>    
            </div>

            <div className="select-info-main">
                <h3 className="search-info-txt">SELECT A CATEGORY:</h3>
                <h3 className="search-info-txt">GOVERNMENT</h3>
                <h3 className="search-info-txt">RESCURE & REINFORCMENT</h3>
                <h3 className="search-info-txt">COMUNITY SERVICES</h3>
                <h3 className="search-info-txt">POSTAL SERVICES</h3>
                <h3 className="search-info-txt">UTILITIES</h3>
                <h3 className="search-info-txt">NEWSPAPER</h3>
                <h3 className="search-info-txt">VEHICLE</h3>
            </div>

            <InfoList/>
        </>
    )
}
