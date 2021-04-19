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
        // const filteredItems = event.target.value?data.filter(items =>{
        //     return items.sub.map(a=>a.subDetails.map(b=>b.item.toLowerCase()).includes(event.target.value.toLowerCase()));
        //   }):data

          const filteredItems2 = data.filter(items =>{
            return items.sub.map(a=>{
                return a.subDetails.map(b=>{
                    return b.item.toLowerCase().includes(event.target.value.toLowerCase());
                })})
          })
          setFilteredData(filteredItems2)
          console.log("j",filteredItems2)
    };
    const handleSearch=()=>{
        // const filtereditems = e.target.value?items.filter(item =>{
        //     return item.name.toLowerCase().includes(e.target.value.toLowerCase());
        //   }):itemBackUp;
        const filteredItems = data.filter(item =>{
            return item.mainName.toLowerCase().includes(searchValue.toLowerCase());
          });
        setFilteredData(filteredItems)
    };
    // console.log(filteredData)
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
