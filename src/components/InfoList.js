import React from 'react'
// import data from './data'

export default function InfoList({data}) {
    // console.log(data)
    return (
        <div className="info-list-main-div">
            <p className="info-list-title">
                <strong>NUMBERS&nbsp;</strong> YOU NEED TO KNOW</p>
                <p>Area code is (432) unless otherwise noted.</p>

                {data.map(a=>{return(
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
                )})}
        </div>
    )
}
