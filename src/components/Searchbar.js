import React,{useState} from 'react'
import InfoList from './InfoList'
import data from './data'

export default function Searchbar() {
    const [filteredData,setFilteredData] = useState(data)
    const [searchValue,setSearchValue] = useState();

    const handleClick=(id)=>{
        if(id==="ALL"){
            setFilteredData(data)
        }else{
            setFilteredData(data.filter(a=>a.mainName===id))
        }
        
    };
    const handleChange = (event) =>{
        setSearchValue(event.target.value)
    };
    const handleSearch=()=>{
        setFilteredData(data.filter(a=>a.mainName.toLowerCase()===searchValue.toLowerCase()))
    };
    console.log(filteredData)
    return (
        <>
            {/* <div className="search-bar-main">
            <i className="fa fa-search" onClick={handleSearch}></i>
                
                <input type="text" id="search" name="search" placeholder="Search" onChange={handleChange}/>    
            </div> */}

            <div className="select-info-main">
                <h3 className="search-info-txt" onClick={()=>handleClick("ALL")}>
                    SELECT A CATEGORY:</h3>
                <h3 className="search-info-txt" onClick={()=>handleClick("GOVERNMENT")}>
                    GOVERNMENT</h3>
                <h3 className="search-info-txt" onClick={()=>handleClick("RESCUE & LAW ENFORCEMENT")}>
                    RESCURE & REINFORCMENT</h3>
                <h3 className="search-info-txt" onClick={()=>handleClick("COMMUNITY SERVICES")}>
                    COMUNITY SERVICES</h3>
                <h3 className="search-info-txt" onClick={()=>handleClick("UTILITIES")}>
                    POSTAL SERVICES</h3>
                <h3 className="search-info-txt" onClick={()=>handleClick("NEWSPAPER")}>
                    UTILITIES</h3>
                <h3 className="search-info-txt" onClick={()=>handleClick("POSTAL SERVICES")}>
                    NEWSPAPER</h3>
                <h3 className="search-info-txt" onClick={()=>handleClick("VEHICLES")}>
                    VEHICLE</h3>
            </div>

            <InfoList data={filteredData}/>
        </>
    )
}
