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
        const searchS = event.target.value;
        for(let i=0; i<data.length-1;i++){
            let subs = data[i];
            if(subs.mainName.toLowerCase().includes(searchS.toLowerCase())){
                return console.log("equals",data[i].mainName)
            }

            for(let a=0;a<subs.sub.length-1;a++){
                let subs2 = subs.sub[a]

                if(subs2.subName.toLowerCase().includes(searchS.toLowerCase())){
                    return console.log("equals3",subs2.subName)
                }

                for(let b=0;b<subs2.subDetails.length-1;b++){                    
                    let jackpot =subs2.subDetails[b].item.toLowerCase();
                    

                    const findItems= data.find(f=>{
                        return(f.subs2.subDetails[b].item.toLowerCase().includes(searchS.toLowerCase()))
                    })
                    if(jackpot.includes(searchS.toLowerCase())){ 
                        console.log("equals4",findItems)
                        // setFilteredData(filteredItems)
                    }
                    
                    
                }
            }
        }
        
        //   setFilteredData(filteredItems2)
        
    };
    const handleSearch=()=>{
        
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
