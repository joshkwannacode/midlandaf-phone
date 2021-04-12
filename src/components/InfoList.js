import React from 'react'
import data from './data'

export default function InfoList() {
    console.log(data)
    return (
        <div className="info-list-main-div">
            <p className="info-list-title">
                <strong>NUMBERS&nbsp;</strong> YOU NEED TO KNOW</p>
                <p>Area code is (432) unless otherwise noted.</p>

                {data.map(a=>{return(
                    <>
                    <div>{a.mainName}</div>
                    {a.sub.map(b=>{return(
                        <div>
                            <p>{b.subName}</p>
                            {b.subDetails.map(c=>{return(
                                <ol>
                                    <li>{c.item}</li>
                                    <li>{c.itemNum}</li>
                                </ol>
                            )})}
                        </div>
                    )})}
                    </>
                )})}
        </div>
    )
}
