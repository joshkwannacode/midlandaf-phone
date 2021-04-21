import React,{useState} from 'react'
import InfoList from './InfoList'
import data from './data'

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
        const searchS = event.target.value;
        const newArray = [];
        
        for (let i = 0; i < data.length - 1; i++)
        {
          let sub1 = data[i];
          if (sub1.mainName.toLowerCase().includes(searchS.toLowerCase()))
          {
            newArray.push({
                mainName: sub1.mainName.toLowerCase(),  
              });
           
          }
      
          for (let a = 0; a < sub1.sub.length - 1; a++)
          {
            let sub2 = sub1.sub[a];
      
            if (sub2.subName.toLowerCase().includes(searchS.toLowerCase()))
            {
            newArray.push({
                subName: sub2.subName,
              });
            }
      
            for (let b = 0; b < sub2.subDetails.length - 1; b++)
            {
              let last = sub2.subDetails[b].item.toLowerCase();
              
              if (last.includes(searchS.toLowerCase()))
              {
                setIsSearch(true);
                newArray.push({
                    item: sub2.subDetails[b].item,
                    itemNum: sub2.subDetails[b].itemNum,
                    subName: sub2.subName,
                  });
                  setSearchResult(newArray);
               
              }
            }
          }
        }
        
        if(event.target.value.length<=0)return setIsSearch(false);        
      };

    const handleSearch=()=>{
        const newArray = [];
        if(searchValue===undefined){ setIsSearch(false); }
        else{
        for (let i = 0; i < data.length - 1; i++)
        {
          let sub1 = data[i];
          if (sub1.mainName.toLowerCase().includes(searchValue.toLowerCase()))
          {
            newArray.push({
                mainName: sub1.mainName.toLowerCase(),  
              });
           
          }
      
          for (let a = 0; a < sub1.sub.length - 1; a++)
          {
            let sub2 = sub1.sub[a];
      
            if (sub2.subName.toLowerCase().includes(searchValue.toLowerCase()))
            {
            newArray.push({
                subName: sub2.subName,
              });
            }
      
            for (let b = 0; b < sub2.subDetails.length - 1; b++)
            {
              let last = sub2.subDetails[b].item.toLowerCase();
              
              if (last.includes(searchValue.toLowerCase()))
              {
                setIsSearch(true);
                newArray.push({
                    item: sub2.subDetails[b].item,
                    itemNum: sub2.subDetails[b].itemNum,
                    subName: sub2.subName,
                  });
                  setSearchResult(newArray);
               
              }
            }
          }
        console.log("newArray",newArray)
        
      };
        
        setFilteredData(newArray)
    }
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
