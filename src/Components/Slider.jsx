import React, { useEffect, useState } from 'react'
import Arrow from './Arrow'
import Card from './Card'
import {Hourglass} from 'react-loader-spinner'
export default function Slider() {
    const [heros,setHeros]=useState();
    const [curentHeros,setCurentHeros]=useState(0);

    useEffect(()=>{
            (async()=>{
                try {
                const res=await fetch('http://localhost:3001/heroes')
                const data=await res.json()
                setHeros(data)
                } catch (error) {
                    console.log(error)
                }
            }
            )()
        },[]
    );
    const nextCurent=()=>{
       setCurentHeros(curentHeros==heros?.length-1?0:curentHeros+1)
    }
    const prevCurent=()=>{
       setCurentHeros(curentHeros==0?heros?.length-1:curentHeros-1)
    }
  return (
   
    <div className="slide-container">
       
        <div className="wrapper">
        {heros?
           <>
          <Arrow handleCurent={prevCurent} position={'prev'}/>
          <Card hero={heros[curentHeros]}/>
          <Arrow  handleCurent={nextCurent} position={'next'}/>

           </>:<div className='loading d-flex justify-content-center align-items-center '>
               <Hourglass height="100" width="100"/>
               </div>
        }
        </div>
     </div>
  )
}
