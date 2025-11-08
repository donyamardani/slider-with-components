import React from 'react'

export default function Unit({units}) {
    const items=units?.map((e,index)=>{
        return(
        <div className={`one-third ${units.length - 1 == index && "no-border"}`}>
          <div className="stat">{e?.state}<sup>S</sup></div>
          <div className="stat-value">{e?.value}</div>
        </div>
        );
    });
         return (
         <>
          {items}
         </>
          )
         
}
