import React from 'react'

export default function Arrow({handleCurent,position}) {
  return (
   
            <div className="arrow-wrapper"  onClick={handleCurent}>
                <div className="round">
                    <div id="cta">
                        <span className ={`arrow ${position}`}></span>
                    </div>
                </div>
            </div>
  )
}
