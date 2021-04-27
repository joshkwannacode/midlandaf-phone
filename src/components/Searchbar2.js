import React,{useState} from 'react'
import InfoList from './InfoList'
import data from './data'
import data2 from './data2'

export default function Searchbar() {
    const [filteredData,setFilteredData] = useState(data)
    const [searchValue,setSearchValue] = useState();
    const [isSearch,setIsSearch] = useState(false);
    const [searchResult, setSearchResult] = useState();

    const handleClick=(id)=>{
        setIsSearch(false);
        if(id==="ALL"){
            setFilteredData(data)
        }else{
            setFilteredData(data.filter(a=>a.mainName===id))
        }
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
        const searchItem = event.target.value;
        setIsSearch(true);

        const filtereditems = event.target.value?data2.filter(itema =>{
            return itema.mainName.toLowerCase().includes(searchItem.toLowerCase())||
            itema.subName.toLowerCase().includes(searchItem.toLowerCase())||
            itema.item.toLowerCase().includes(searchItem.toLowerCase());
          }):data;
            setSearchResult(filtereditems)
          console.log("filtered",filtereditems)
          
        
        if(event.target.value.length<=0)return setIsSearch(false);        
      };

    const handleSearch=()=>{
        
        const filtereditems = data2.filter(itema =>{
            return itema.mainName.toLowerCase().includes(searchValue.toLowerCase())||
            itema.subName.toLowerCase().includes(searchValue.toLowerCase())||
            itema.item.toLowerCase().includes(searchValue.toLowerCase());
          });
          setIsSearch(true)
          setSearchResult(filtereditems)
    };

    return (
        <>
            <form className="search-bar-main">
            <i 
            className="fa fa-search" 
            type="button" 
            onClick={handleSearch}
            style={{cursor: 'pointer'}}></i>
                
                <input 
                type="text"
                id="search" 
                name="search" 
                placeholder="Search" onChange={handleChange}/>    
            </form>

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

            <InfoList data={filteredData} isSearch={isSearch} searchResult={searchResult}/>
        </>
    )
}
