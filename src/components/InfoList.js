import React from 'react'
// import data from './data'

export default function InfoList({data,isSearch,searchResult}) {
    console.log("data",searchResult)
    return (
        <div className="info-list-main-div">
            <p className="info-list-title">
                <strong>NUMBERS&nbsp;</strong> YOU NEED TO KNOW</p>
                <p className="info-list-title2">Area code is (432) unless otherwise noted.</p>

                {!isSearch?data.map(a=>{return(
                    <div>
                    <h3 className="phone-num-main-name">{a.mainName}</h3>
                    <div className="phone-num-main">

                    {a.sub.map(b=>{return(
                        <div >
                            <h4>{b.subName}</h4>
                            <div className="phone-num-sub">
                            {b.subDetails.map(c=>{return(
                                <div className="phone-num-sub-detail">
                                    <span>{c.item}</span>
                                    <span><a href={"tel:+1-"+c.itemNum} style={{color:"black"}}>
                                        {c.itemNum}</a></span>
                                </div>
                            )})}
                            </div>
                        </div>
                    )})}
                    </div>
                    </div>
                )}):
                <div>
                    <h3 style={{textAlign:"center",marginBottom:"30px"}}>Search Results</h3>
                    {searchResult.map(a=>{
                        return(<div className="searched-main-div">
                                <h4>{a.mainName}</h4>
                                <p><strong>{a.subName?a.subName:null}  </strong> {a.item}: <span>
                                    <a href={"tel:+1-"+a.itemNum} style={{color:"black"}}>
                                        {a.itemNum}</a></span></p>
                            </div>)
                    })}
                </div>
                }
        </div>
    )
}
